import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostTag,
    PostTitle,
} from "@components/post";

export const head: DocumentHead = {
    title: "IndexedDB Provider",
    meta: [
        {
            property: "keywords",
            content: "IndexedDB Provider",
        },
        {
            property: "description",
            content: `IndexedDB를 활용하기 위한 React Provider`,
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>IndexedDB Provider</h1>
                <PostTag tags="IndexedDB Provider"></PostTag>
                <PostDate>2024-12-10</PostDate>
            </PostHead>
            <PostBody>
                <PostTitle subtitle="IndexedDB를 활용하기 위한 React Provider"></PostTitle>
                IndexedDB를 사용하기 위한 Provider입니다.
                <br />
                <PostCode code={code1} filename="IndexedDBProvider.tsx" />
            </PostBody>
        </>
    );
});

export const code1 = `import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
} from 'react'

type StoreName = 'storeName'
interface IndexedDBContext {
  getData: <T>({
    storeName,
    key,
  }: {
    storeName: StoreName
    key: IDBValidKey
  }) => Promise<T | undefined>
  setData: (
    storeName: StoreName,
    {
      key,
      value,
    }: {
      key: IDBValidKey
      value: any
    },
  ) => Promise<unknown>
  deleteData: ({
    storeName,
    key,
  }: {
    storeName: StoreName
    key: IDBValidKey
  }) => Promise<boolean | undefined>
}

const Context = createContext<IndexedDBContext>({
  getData: () => new Promise(() => {}),
  setData: () => new Promise(() => {}),
  deleteData: async () => new Promise(() => {}),
})

const INDEXED_DB_NAME = 'DBname'
const INDEXED_DB_STORES: {
  name: string
  options?: IDBObjectStoreParameters
}[] = [{ name: 'storeName' }]

export const IndexedDBProvider = ({ children }: PropsWithChildren<unknown>) => {
  const connection = useRef<{ [version: string]: IDBOpenDBRequest }>({})

  //* DB 생성 및 스토어 업데이트
  const initIndexedDB = async () => {
    const db = await _openIndexedDB()

    const notAddedStores = INDEXED_DB_STORES.filter(
      ({ name }) => !db.objectStoreNames.contains(name),
    )
    if (notAddedStores.length) {
      db.close()

      //* 새로운 버전으로 open 시 DB가 업데이트가 된다.
      const updatedDB = await _openIndexedDB({
        version: db.version + 1,
        //* 스토어 추가는 DB 업데이트 시에만 가능하다.
        onUpdate: (_db) => {
          notAddedStores.forEach(({ name, options }) => {
            _db.createObjectStore(name, options)
          })
        },
      })
      updatedDB.close()
    }
  }
  useEffect(() => {
    initIndexedDB()
  }, [])

  const _openIndexedDB = async (options?: {
    version?: number
    onUpdate?: (db: IDBDatabase) => void
  }): Promise<IDBDatabase> => {
    const version = options?.version

    if (connection.current[String(version)]) {
      //* 병렬적으로 indexedDB open 실행시 open 이 여러차레 호출시 open이 멈출 수 있다.
      //* 최초 open 이후 open은 최초 open의 response를 기다리도록한다.
      if (connection.current[String(version)].readyState === 'pending') {
        return await new Promise((resolve) => {
          const handleSuccess = (event: Event) => {
            const { result } = event.target as IDBRequest<IDBDatabase>
            removeListener()

            resolve(result)
          }
          const handleError = (event: Event) => {
            const { result } = event.target as IDBRequest<IDBDatabase>
            removeListener()
            resolve(result)
          }
          const removeListener = () => {
            connection.current[String(version)]?.removeEventListener(
              'success',
              handleSuccess,
            )
            connection.current[String(version)]?.removeEventListener(
              'error',
              handleError,
            )
          }
          connection.current[String(version)].addEventListener(
            'success',
            handleSuccess,
          )
          connection.current[String(version)].addEventListener(
            'error',
            handleError,
          )
        })
      }
      if (
        connection.current[String(version)].readyState === 'done' &&
        connection.current[String(version)].result
      ) {
        return connection.current[String(version)].result
      }
    }
    //* version 이 undefined 라면 최신 db를 가져온다
    const request = window.indexedDB.open(INDEXED_DB_NAME, version)
    connection.current[String(version)] = request

    const result = await new Promise<IDBDatabase>((resolve, reject) => {
      request.onsuccess = (event) => {
        const { result } = event.target as IDBRequest<IDBDatabase>
        connection.current[result.version] = request
        if (connection.current.undefined) {
          delete connection.current.undefined
        }

        resolve(result)
      }
      request.onupgradeneeded = (event) => {
        const { result } = event.target as IDBRequest<IDBDatabase>
        options?.onUpdate?.(result)
        resolve(result)
      }
      request.onerror = (event) => {
        const { error } = event.target as IDBRequest<IDBDatabase>
        reject(error)
      }
    })
    return result
  }

  const _getStore = async (
    storeName: StoreName,
    db: IDBDatabase,
    mode: IDBTransactionMode,
  ) => {
    const transaction = db.transaction(storeName, mode)
    const objectStore = transaction.objectStore(storeName)
    return objectStore
  }

  const _editItemInStore = async (
    store: IDBObjectStore,
    value: any,
    key: IDBValidKey,
  ) => {
    const request = store.put(value, key)
    return await new Promise<boolean>((resolve, reject) => {
      request.onsuccess = () => {
        resolve(true)
      }
      request.onerror = (event) => {
        const { error } = event.target as IDBRequest<IDBObjectStore>
        reject(error)
      }
    })
  }

  const _addItemToStore = async (
    store: IDBObjectStore,
    value: any,
    key: IDBValidKey,
  ) => {
    const request = store.add(value, key)
    return await new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(true)
      }
      request.onerror = (event) => {
        const { error } = event.target as IDBRequest<IDBObjectStore>
        reject(error)
      }
    })
  }

  const _getItem = async <T,>(store: IDBObjectStore, key: IDBValidKey) => {
    const request = store.get(key)

    return await new Promise<T>((resolve, reject) => {
      request.onsuccess = (event) => {
        const { result } = event.target as IDBRequest<T>
        resolve(result)
      }
      request.onerror = (event) => {
        const { error } = event.target as IDBRequest<T>
        reject(error)
      }
    })
  }
  const _deleteItem = async (store: IDBObjectStore, key: IDBValidKey) => {
    const request = store.delete(key)

    return await new Promise<boolean>((resolve, reject) => {
      request.onsuccess = () => {
        resolve(true)
      }
      request.onerror = (event) => {
        const { error } = event.target as IDBRequest
        reject(error)
      }
    })
  }

  const getData = async <T,>({
    storeName,
    key,
  }: {
    storeName: StoreName
    key: IDBValidKey
  }) => {
    const db = await _openIndexedDB()
    const store = await _getStore(storeName, db, 'readonly')
    const item = await _getItem<T>(store, key)
    db.close()
    return item
  }
  const setData = async (
    storeName: StoreName,
    {
      key,
      value,
    }: {
      key: IDBValidKey
      value: any
    },
  ) => {
    const db = await _openIndexedDB()
    const storeExists = db.objectStoreNames.contains(storeName)
    if (!storeExists) {
      throw Error(\`IndexedDB: failed To load store - \${storeName}\`)
    }

    const store = await _getStore(storeName, db, 'readwrite')

    const itemExists = await _getItem(store, key)

    if (itemExists) {
      _editItemInStore(store, value, key)
      db.close()
      return
    }
    _addItemToStore(store, value, key)
    db.close()
  }

  const deleteData = async ({
    storeName,
    key,
  }: {
    storeName: StoreName
    key: IDBValidKey
  }) => {
    const db = await _openIndexedDB()
    const store = await _getStore(storeName, db, 'readwrite')
    const result = await _deleteItem(store, key)
    db.close()
    return !!result
  }

  const value = {
    getData,
    setData,
    deleteData,
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useIndexedDBContext = () => {
  return useContext(Context)
}
`;
