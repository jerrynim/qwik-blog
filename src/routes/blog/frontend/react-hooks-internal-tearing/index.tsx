import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  PostBlockquote,
  PostBody,
  PostCode,
  PostDate,
  PostDivider,
  PostHead,
  PostHeadImage,
  PostTag,
  PostTitle,
} from "~/components/post";

export const head: DocumentHead = {
    title: "React Hooks 내부 구조와 Concurrent Rendering: Linked List에서 Tearing 문제까지",
    meta: [
        {
            name: "description",
            content:
                "React Hooks의 linked list 기반 내부 구현 원리와 규칙, Concurrent Rendering 환경에서의 Tearing 문제, 그리고 useSyncExternalStore의 해결 방안을 심층 분석합니다.",
        },
        {
            name: "keywords",
            content:
                "React, Hooks, useState, useEffect, linked list, fiber, Concurrent Rendering, Tearing, useSyncExternalStore, custom hooks, 외부 상태 관리",
        },
        {
            property: "og:title",
            content: "React Hooks 내부 구조와 Concurrent Rendering: Linked List에서 Tearing 문제까지",
        },
        {
            property: "og:description",
            content:
                "React Hooks의 linked list 기반 내부 구현 원리와 규칙, Concurrent Rendering 환경에서의 Tearing 문제, 그리고 useSyncExternalStore의 해결 방안을 심층 분석합니다.",
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage src="https://res.cloudinary.com/dij9kacx9/image/upload/v1740000000/react-hooks-internal/react-hooks-internal-head.jpg"></PostHeadImage>
            <PostHead>
                <PostTitle>React Hooks 내부 구조와 Concurrent Rendering: Linked List에서 Tearing 문제까지</PostTitle>
                <PostTag tags="React Hooks useState useEffect linked-list fiber Concurrent-Rendering Tearing useSyncExternalStore custom-hooks"></PostTag>
                <PostDate>2025-10-20</PostDate>
            </PostHead>

            <PostBody>
                <p>
                    React Hooks는 함수형 컴포넌트에 상태와 생명주기 기능을 제공하는 강력한 API입니다. 
                    하지만 "왜 조건문 안에서 Hook을 사용하면 안 될까?", "Concurrent Rendering에서 Tearing이란 무엇일까?"와 같은 질문들은 
                    Hooks의 내부 구현을 이해해야만 답할 수 있습니다. 이 글에서는 시니어 프론트엔드 엔지니어 관점에서 
                    Hooks의 내부 메커니즘부터 현대적인 상태 관리 문제까지 심층적으로 살펴봅니다.
                </p>

                <PostDivider />

                <h2>1. Hooks의 내부 구현: Linked List 기반 아키텍처</h2>

                <h3>1.1 Fiber 노드와 Hook 체인</h3>

                <p>
                    React는 내부적으로 각 컴포넌트를 Fiber 노드로 표현합니다. 
                    각 Fiber 노드는 <code>memoizedState</code> 프로퍼티를 가지며, 
                    이 프로퍼티가 해당 컴포넌트에서 사용된 모든 Hook들의 연결 리스트(linked list)의 시작점이 됩니다.
                </p>

                <PostCode
                    code={`// React 내부 Fiber 구조 (단순화)
type Fiber = {
  memoizedState: Hook | null;  // Hook 체인의 시작점
  alternate: Fiber | null;      // work-in-progress와 current를 번갈아가며 사용
  // ... 기타 프로퍼티들
};

// Hook 구조
type Hook = {
  memoizedState: any;          // 현재 Hook의 상태값
  baseState: any;              // 업데이트 이전의 기본 상태
  baseQueue: Update | null;    // 업데이트 큐
  queue: UpdateQueue | null;   // 펜딩 업데이트들
  next: Hook | null;           // 다음 Hook을 가리키는 포인터
};`}
                    language="typescript"
                    filename="react-internals.ts"
                />

                <h3>1.2 Hook 호출 순서와 Index 관리</h3>

                <p>
                    React는 Hook이 호출될 때마다 현재 처리 중인 Hook 포인터를 다음으로 이동시킵니다. 
                    이는 배열의 인덱스처럼 동작하지만, 실제로는 linked list를 순회하는 방식입니다.
                </p>

                <PostCode
                    code={`// React 렌더링 시 Hook 처리 과정 (의사코드)
let currentlyRenderingFiber: Fiber | null = null;
let currentHook: Hook | null = null;          // 현재 Fiber의 현재 Hook
let workInProgressHook: Hook | null = null;   // 업데이트 중인 Hook

function renderWithHooks(Component, props) {
  currentlyRenderingFiber = workInProgressFiber;
  currentHook = currentlyRenderingFiber.alternate?.memoizedState ?? null;
  workInProgressHook = null;
  
  // 컴포넌트 렌더링 (Hook 호출됨)
  const children = Component(props);
  
  // 렌더링 후 정리
  currentlyRenderingFiber = null;
  currentHook = null;
  workInProgressHook = null;
  
  return children;
}

// useState 내부 구현 (단순화)
function useState<S>(initialState: S): [S, Dispatch<SetStateAction<S>>] {
  const hook = updateWorkInProgressHook();  // 다음 Hook 가져오기
  
  if (hook.memoizedState === undefined) {
    // 초기 렌더링
    hook.memoizedState = initialState;
  }
  
  const dispatch = (action: SetStateAction<S>) => {
    // 업데이트 큐에 추가
    const update = { action };
    enqueueUpdate(hook, update);
    scheduleUpdateOnFiber(currentlyRenderingFiber);
  };
  
  return [hook.memoizedState, dispatch];
}

function updateWorkInProgressHook(): Hook {
  if (workInProgressHook === null) {
    // 첫 번째 Hook
    workInProgressHook = currentHook;
    currentHook = currentHook?.next ?? null;
  } else {
    // 다음 Hook으로 이동
    workInProgressHook = workInProgressHook.next;
    currentHook = currentHook?.next ?? null;
  }
  
  if (workInProgressHook === null) {
    // 새로운 Hook 생성
    workInProgressHook = createHook();
  }
  
  return workInProgressHook;
}`}
                    language="typescript"
                    filename="react-hooks-internals.ts"
                />

                <h3>1.3 왜 조건문 안에서 Hook을 사용하면 안 될까?</h3>

                <p>
                    Hooks가 linked list로 관리되기 때문에, <strong>호출 순서가 매 렌더링마다 동일해야 합니다</strong>. 
                    조건문 안에서 Hook을 사용하면 호출 순서가 변경되어 Hook 체인이 깨지게 됩니다.
                </p>

                <PostCode
                    code={`function BadComponent({ condition }) {
  // ❌ 잘못된 예: 조건부 Hook 사용
  if (condition) {
    const [state1, setState1] = useState(0);  // Hook #1
  }
  const [state2, setState2] = useState('');   // Hook #2 (또는 #1?)
  
  // 첫 렌더링 (condition = true):
  //   Hook 체인: useState(0) -> useState('') -> null
  // 
  // 두 번째 렌더링 (condition = false):
  //   Hook 체인: useState('') -> null
  //   ⚠️ React는 첫 번째 Hook이 useState(0)일 것으로 예상하지만
  //      실제로는 useState('')가 호출됨 → 타입 불일치!
  
  return <div>{state2}</div>;
}

function GoodComponent({ condition }) {
  // ✅ 올바른 예: 항상 동일한 순서로 Hook 호출
  const [state1, setState1] = useState(0);    // 항상 Hook #1
  const [state2, setState2] = useState('');   // 항상 Hook #2
  
  // Hook 체인: useState(0) -> useState('') -> null (항상 동일)
  
  // 조건부 로직은 Hook 외부에서
  const value = condition ? state1 : 0;
  
  return <div>{state2}</div>;
}`}
                    language="typescript"
                    filename="hook-rules.tsx"
                />

                <PostBlockquote>
                    <strong>핵심 원리:</strong> React는 Hook을 호출 순서(position)로 식별합니다. 
                    이름이나 변수가 아닌 "몇 번째 Hook인가"로 구분하기 때문에, 
                    조건부 실행은 이 순서를 깨뜨려 버그를 발생시킵니다.
                </PostBlockquote>

                <PostDivider />

                <h2>2. Custom Hook 작성: 베스트 프랙티스</h2>

                <h3>2.1 Custom Hook의 기본 원칙</h3>

                <p>
                    Custom Hook은 단순히 Hook들을 조합한 함수입니다. 
                    하지만 재사용 가능하고 유지보수하기 쉬운 Hook을 만들기 위해서는 몇 가지 원칙을 따라야 합니다.
                </p>

                <PostCode
                    code={`// ✅ 좋은 Custom Hook 예시
function useAsync<T>(
  asyncFunction: () => Promise<T>,
  dependencies: React.DependencyList = []
) {
  const [state, setState] = useState<{
    loading: boolean;
    data: T | null;
    error: Error | null;
  }>({
    loading: false,
    data: null,
    error: null,
  });

  // useCallback으로 함수 메모이제이션
  const execute = useCallback(async () => {
    setState({ loading: true, data: null, error: null });
    
    try {
      const data = await asyncFunction();
      setState({ loading: false, data, error: null });
    } catch (error) {
      setState({ loading: false, data: null, error: error as Error });
    }
  }, dependencies);

  // 자동 실행 옵션
  useEffect(() => {
    execute();
  }, [execute]);

  return { ...state, execute };
}

// 사용 예시
function UserProfile({ userId }: { userId: string }) {
  const { loading, data, error, execute } = useAsync(
    () => fetch(\`/api/users/\${userId}\`).then(res => res.json()),
    [userId]
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return (
    <div>
      <h1>{data.name}</h1>
      <button onClick={execute}>Refresh</button>
    </div>
  );
}`}
                    language="typescript"
                    filename="useAsync.tsx"
                />

                <h3>2.2 Custom Hook 주의사항</h3>

                <PostCode
                    code={`// ❌ 안티패턴 1: 불필요한 의존성 누락
function useBadEffect(callback: () => void, value: number) {
  useEffect(() => {
    callback();  // callback이 dependencies에 없음!
  }, [value]);   // ⚠️ ESLint 경고: callback을 추가해야 함
}

// ✅ 해결 방법 1: useCallback으로 감싸기
function useGoodEffect(callback: () => void, value: number) {
  const memoizedCallback = useCallback(callback, []);
  
  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback, value]);
}

// ✅ 해결 방법 2: useEvent (React RFC)
// 미래의 React에서 제공될 예정
function useEvent<T extends (...args: any[]) => any>(handler: T): T {
  const handlerRef = useRef<T>(handler);
  
  useLayoutEffect(() => {
    handlerRef.current = handler;
  });
  
  return useCallback(((...args) => {
    const fn = handlerRef.current;
    return fn(...args);
  }) as T, []);
}

// ❌ 안티패턴 2: Hook 내부에서 조건부 Hook 사용
function useBadConditionalHook(shouldUseEffect: boolean) {
  const [state, setState] = useState(0);
  
  if (shouldUseEffect) {
    useEffect(() => {  // ❌ 조건부 Hook!
      console.log(state);
    }, [state]);
  }
  
  return [state, setState];
}

// ✅ 해결 방법: Hook은 항상 호출하고 내부에서 조건 처리
function useGoodConditionalHook(shouldUseEffect: boolean) {
  const [state, setState] = useState(0);
  
  useEffect(() => {
    if (shouldUseEffect) {  // ✅ Hook 내부에서 조건 처리
      console.log(state);
    }
  }, [state, shouldUseEffect]);
  
  return [state, setState];
}

// ❌ 안티패턴 3: 과도한 추상화
function useOverEngineered<T>(
  initialValue: T,
  validator?: (value: T) => boolean,
  transformer?: (value: T) => T,
  onChangeCallback?: (value: T) => void,
  debounceMs?: number,
  // ... 10개 이상의 옵션들
) {
  // 복잡한 로직...
}

// ✅ 해결 방법: 단순하고 명확한 API
function useValidatedState<T>(
  initialValue: T,
  options?: {
    validate?: (value: T) => boolean;
    onChange?: (value: T) => void;
  }
) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);
  
  const updateValue = useCallback((newValue: T) => {
    if (options?.validate && !options.validate(newValue)) {
      setError('Validation failed');
      return;
    }
    
    setError(null);
    setValue(newValue);
    options?.onChange?.(newValue);
  }, [options]);
  
  return { value, setValue: updateValue, error };
}`}
                    language="typescript"
                    filename="custom-hook-patterns.tsx"
                />

                <h3>2.3 성능 최적화가 필요한 Custom Hook</h3>

                <PostCode
                    code={`// 고급 예시: 디바운싱과 캔슬레이션을 지원하는 검색 Hook
function useDebounceSearch<T>(
  searchFn: (query: string) => Promise<T>,
  debounceMs: number = 300
) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  // AbortController를 사용한 요청 취소
  const abortControllerRef = useRef<AbortController | null>(null);

  const debouncedSearch = useMemo(
    () =>
      debounce(async (searchQuery: string) => {
        // 이전 요청 취소
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }

        if (!searchQuery.trim()) {
          setResults(null);
          setLoading(false);
          return;
        }

        abortControllerRef.current = new AbortController();
        setLoading(true);
        setError(null);

        try {
          const data = await searchFn(searchQuery);
          setResults(data);
        } catch (err) {
          if (err.name !== 'AbortError') {
            setError(err as Error);
          }
        } finally {
          setLoading(false);
        }
      }, debounceMs),
    [searchFn, debounceMs]
  );

  useEffect(() => {
    debouncedSearch(query);
    
    // 클린업: 컴포넌트 언마운트 시 요청 취소
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [query, debouncedSearch]);

  return {
    query,
    setQuery,
    results,
    loading,
    error,
  };
}

// 사용 예시
function SearchComponent() {
  const { query, setQuery, results, loading } = useDebounceSearch(
    async (q) => {
      const response = await fetch(\`/api/search?q=\${encodeURIComponent(q)}\`);
      return response.json();
    },
    500
  );

  return (
    <div>
      <input 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {loading && <div>Loading...</div>}
      {results && <SearchResults data={results} />}
    </div>
  );
}

// 유틸리티: debounce 함수
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}`}
                    language="typescript"
                    filename="useDebounceSearch.tsx"
                />

                <PostDivider />

                <h2>3. Concurrent Rendering과 Tearing 문제</h2>

                <h3>3.1 Tearing이란 무엇인가?</h3>

                <p>
                    <strong>Tearing</strong>은 UI가 렌더링되는 동안 외부 상태가 변경되어, 
                    화면의 서로 다른 부분이 동일한 상태의 서로 다른 값을 표시하는 현상입니다. 
                    Concurrent Rendering에서는 렌더링이 중단되고 재개될 수 있기 때문에 이 문제가 발생할 수 있습니다.
                </p>

                <PostCode
                    code={`// 외부 스토어 (React 외부의 상태)
let externalStore = { count: 0 };
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return externalStore.count;
}

function updateExternalStore(newCount: number) {
  externalStore.count = newCount;
  listeners.forEach(listener => listener());
}

// ❌ 문제가 있는 구현: Tearing 발생 가능
function ComponentA() {
  const [count, setCount] = useState(getSnapshot());
  
  useEffect(() => {
    return subscribe(() => setCount(getSnapshot()));
  }, []);
  
  return <div>Component A: {count}</div>;
}

function ComponentB() {
  const [count, setCount] = useState(getSnapshot());
  
  useEffect(() => {
    return subscribe(() => setCount(getSnapshot()));
  }, []);
  
  return <div>Component B: {count}</div>;
}

// Concurrent Rendering 시나리오:
// 1. 초기 상태: externalStore.count = 0
// 2. ComponentA 렌더링 시작 (count = 0 읽음)
// 3. 렌더링 중단 (우선순위 높은 업데이트 발생)
// 4. 외부에서 updateExternalStore(5) 호출
// 5. ComponentB 렌더링 (count = 5 읽음)
// 6. ComponentA 렌더링 재개 (여전히 count = 0 사용)
// 
// 결과: ComponentA는 0을 표시, ComponentB는 5를 표시 → Tearing!`}
                    language="typescript"
                    filename="tearing-problem.tsx"
                />

                <h3>3.2 useSyncExternalStore의 해결 방안</h3>

                <p>
                    React 18에서 도입된 <code>useSyncExternalStore</code>는 
                    외부 스토어를 구독하면서 Tearing 문제를 방지하는 Hook입니다. 
                    내부적으로 렌더링 중 상태 변경을 감지하고 렌더링을 재시작하여 일관성을 보장합니다.
                </p>

                <PostCode
                    code={`import { useSyncExternalStore } from 'react';

// ✅ Tearing 방지: useSyncExternalStore 사용
function ComponentA() {
  const count = useSyncExternalStore(
    subscribe,      // 구독 함수
    getSnapshot,    // 현재 스냅샷 가져오기
    getSnapshot     // 서버 사이드 렌더링용 스냅샷 (선택)
  );
  
  return <div>Component A: {count}</div>;
}

function ComponentB() {
  const count = useSyncExternalStore(subscribe, getSnapshot);
  return <div>Component B: {count}</div>;
}

// useSyncExternalStore의 내부 동작 (단순화된 설명):
// 1. getSnapshot()으로 초기 값 읽기
// 2. subscribe로 변경 감지 시작
// 3. 렌더링 중 getSnapshot()을 다시 호출하여 값 검증
// 4. 값이 변경되었다면 → 렌더링 중단하고 새로운 값으로 재시작
// 5. 이를 통해 모든 컴포넌트가 동일한 스냅샷을 보도록 보장`}
                    language="typescript"
                    filename="useSyncExternalStore-solution.tsx"
                />

                <h3>3.3 외부 상태 관리 라이브러리 구현하기</h3>

                <p>
                    외부 상태 관리 라이브러리를 만들 때는 <code>useSyncExternalStore</code>를 
                    활용하여 Tearing을 방지해야 합니다. 다음은 간단한 상태 관리 라이브러리의 구현 예시입니다.
                </p>

                <PostCode
                    code={`import { useSyncExternalStore, useCallback } from 'react';

// 타입 정의
type Listener = () => void;
type SetStateFn<T> = (state: T) => T;
type Selector<T, R> = (state: T) => R;

// 간단한 상태 관리 스토어 구현
function createStore<T>(initialState: T) {
  let state = initialState;
  const listeners = new Set<Listener>();

  // 상태 변경 및 리스너 알림
  const setState = (newState: T | SetStateFn<T>) => {
    const nextState = typeof newState === 'function'
      ? (newState as SetStateFn<T>)(state)
      : newState;

    if (!Object.is(state, nextState)) {
      state = nextState;
      listeners.forEach(listener => listener());
    }
  };

  // 현재 상태 가져오기
  const getState = () => state;

  // 리스너 구독
  const subscribe = (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, subscribe };
}

// React Hook 생성
function createUseStore<T>(store: ReturnType<typeof createStore<T>>) {
  // 전체 상태 사용
  function useStore(): T;
  // 셀렉터로 부분 상태 사용
  function useStore<R>(selector: Selector<T, R>): R;
  
  function useStore<R>(selector?: Selector<T, R>) {
    const subscribe = store.subscribe;
    
    // 셀렉터가 없으면 전체 상태 반환
    const getSnapshot = useCallback(() => {
      const state = store.getState();
      return selector ? selector(state) : state;
    }, [selector]);

    return useSyncExternalStore(
      subscribe,
      getSnapshot,
      getSnapshot
    ) as R extends undefined ? T : R;
  }

  return useStore;
}

// 사용 예시
interface AppState {
  user: { name: string; id: number } | null;
  theme: 'light' | 'dark';
  count: number;
}

const store = createStore<AppState>({
  user: null,
  theme: 'light',
  count: 0,
});

const useAppStore = createUseStore(store);

// 컴포넌트에서 사용
function UserProfile() {
  // 전체 상태 구독 (비효율적)
  const state = useAppStore();
  
  return <div>{state.user?.name}</div>;
}

function UserProfileOptimized() {
  // 셀렉터로 필요한 부분만 구독 (최적화)
  const userName = useAppStore(state => state.user?.name);
  
  return <div>{userName}</div>;
}

function ThemeToggle() {
  const theme = useAppStore(state => state.theme);
  
  const toggleTheme = () => {
    store.setState(state => ({
      ...state,
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
  };
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}`}
                    language="typescript"
                    filename="custom-store.tsx"
                />

                <h3>3.4 고급 기능: 셀렉터 메모이제이션과 얕은 비교</h3>

                <p>
                    성능을 더욱 최적화하려면 셀렉터의 결과를 메모이제이션하고, 
                    객체 참조가 아닌 값 비교를 수행해야 합니다.
                </p>

                <PostCode
                    code={`import { useSyncExternalStore, useRef, useEffect } from 'react';

// 얕은 비교 유틸리티
function shallowEqual(objA: any, objB: any): boolean {
  if (Object.is(objA, objB)) return true;
  
  if (
    typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null
  ) {
    return false;
  }
  
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  
  if (keysA.length !== keysB.length) return false;
  
  for (let i = 0; i < keysA.length; i++) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, keysA[i]) ||
      !Object.is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }
  
  return true;
}

// 메모이제이션을 지원하는 고급 스토어
function createStoreWithMemoization<T>(initialState: T) {
  let state = initialState;
  const listeners = new Set<Listener>();

  const setState = (newState: T | SetStateFn<T>) => {
    const nextState = typeof newState === 'function'
      ? (newState as SetStateFn<T>)(state)
      : newState;

    if (!shallowEqual(state, nextState)) {
      state = nextState;
      listeners.forEach(listener => listener());
    }
  };

  const getState = () => state;
  const subscribe = (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, subscribe };
}

// 메모이제이션된 useStore Hook
function createUseStoreWithMemo<T>(
  store: ReturnType<typeof createStoreWithMemoization<T>>
) {
  function useStore<R>(
    selector: Selector<T, R>,
    equalityFn: (a: R, b: R) => boolean = Object.is
  ): R {
    const subscribe = store.subscribe;
    
    // 이전 선택 결과를 저장
    const selectorResultRef = useRef<R>();
    const isFirstRenderRef = useRef(true);

    const getSnapshot = () => {
      const selectedState = selector(store.getState());
      
      // 첫 렌더링이거나 값이 변경된 경우에만 업데이트
      if (
        isFirstRenderRef.current ||
        !equalityFn(selectorResultRef.current as R, selectedState)
      ) {
        selectorResultRef.current = selectedState;
        isFirstRenderRef.current = false;
      }
      
      return selectorResultRef.current as R;
    };

    return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  }

  return useStore;
}

// 사용 예시
const memoStore = createStoreWithMemoization<AppState>({
  user: null,
  theme: 'light',
  count: 0,
});

const useMemoStore = createUseStoreWithMemo(memoStore);

function UserInfo() {
  // 객체를 반환하는 셀렉터 + 얕은 비교
  const userInfo = useMemoStore(
    state => ({ name: state.user?.name, id: state.user?.id }),
    shallowEqual  // 얕은 비교로 불필요한 리렌더링 방지
  );
  
  // userInfo의 name과 id가 변경되지 않으면 리렌더링 안 됨
  return <div>{userInfo.name}</div>;
}

function Counter() {
  // 원시값 반환 → Object.is로 충분
  const count = useMemoStore(state => state.count);
  
  return <div>Count: {count}</div>;
}`}
                    language="typescript"
                    filename="memoized-store.tsx"
                />

                <PostDivider />

                <h2>4. 실전 고려사항</h2>

                <h3>4.1 서버 사이드 렌더링(SSR) 지원</h3>

                <p>
                    <code>useSyncExternalStore</code>는 세 번째 인자로 
                    서버 렌더링용 스냅샷 함수를 받습니다. 이는 SSR 환경에서 
                    하이드레이션 불일치를 방지하기 위해 필수적입니다.
                </p>

                <PostCode
                    code={`// SSR을 지원하는 스토어
function createSSRStore<T>(initialState: T) {
  // 서버 환경인지 확인
  const isServer = typeof window === 'undefined';
  
  let state = initialState;
  const listeners = new Set<Listener>();

  const setState = (newState: T | SetStateFn<T>) => {
    if (isServer) {
      // 서버에서는 상태 변경 불가
      console.warn('Cannot update state on the server');
      return;
    }
    
    const nextState = typeof newState === 'function'
      ? (newState as SetStateFn<T>)(state)
      : newState;

    if (!Object.is(state, nextState)) {
      state = nextState;
      listeners.forEach(listener => listener());
    }
  };

  const getState = () => state;
  
  const subscribe = (listener: Listener) => {
    if (isServer) {
      // 서버에서는 구독 불필요
      return () => {};
    }
    
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, subscribe };
}

function createUseSSRStore<T>(store: ReturnType<typeof createSSRStore<T>>) {
  function useStore<R>(selector: Selector<T, R>): R {
    const getSnapshot = () => selector(store.getState());
    
    // 서버에서도 동일한 스냅샷 함수 사용
    const getServerSnapshot = getSnapshot;

    return useSyncExternalStore(
      store.subscribe,
      getSnapshot,
      getServerSnapshot  // SSR용 스냅샷
    );
  }

  return useStore;
}

// Next.js에서 사용 예시
const ssrStore = createSSRStore<AppState>({
  user: null,
  theme: 'light',
  count: 0,
});

const useSSRStore = createUseSSRStore(ssrStore);

export default function Page() {
  const theme = useSSRStore(state => state.theme);
  
  return <div className={theme}>Hello World</div>;
}`}
                    language="typescript"
                    filename="ssr-store.tsx"
                />

                <h3>4.2 DevTools와 Time-Travel 디버깅</h3>

                <PostCode
                    code={`// 디버깅을 위한 고급 스토어
function createDevStore<T>(initialState: T, options?: {
  name?: string;
  trace?: boolean;
}) {
  let state = initialState;
  const listeners = new Set<Listener>();
  
  // 상태 변경 히스토리 (개발 환경에서만)
  const history: T[] = process.env.NODE_ENV === 'development' ? [initialState] : [];
  let historyIndex = 0;

  const setState = (newState: T | SetStateFn<T>, action?: string) => {
    const nextState = typeof newState === 'function'
      ? (newState as SetStateFn<T>)(state)
      : newState;

    if (!Object.is(state, nextState)) {
      state = nextState;
      
      // 개발 환경에서 히스토리 기록
      if (process.env.NODE_ENV === 'development') {
        history.length = historyIndex + 1;
        history.push(nextState);
        historyIndex++;
        
        if (options?.trace) {
          console.group(\`[\${options.name}] State Update\`);
          console.log('Action:', action);
          console.log('Previous:', history[historyIndex - 1]);
          console.log('Next:', nextState);
          console.groupEnd();
        }
      }
      
      listeners.forEach(listener => listener());
    }
  };

  const getState = () => state;
  const subscribe = (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  // Time-travel 디버깅 함수들
  const devtools = process.env.NODE_ENV === 'development' ? {
    undo: () => {
      if (historyIndex > 0) {
        historyIndex--;
        state = history[historyIndex];
        listeners.forEach(listener => listener());
      }
    },
    redo: () => {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        state = history[historyIndex];
        listeners.forEach(listener => listener());
      }
    },
    getHistory: () => history,
    reset: () => {
      state = initialState;
      history.length = 1;
      history[0] = initialState;
      historyIndex = 0;
      listeners.forEach(listener => listener());
    },
  } : undefined;

  return { getState, setState, subscribe, devtools };
}

// 사용 예시
const devStore = createDevStore<AppState>(
  { user: null, theme: 'light', count: 0 },
  { name: 'AppStore', trace: true }
);

// 브라우저 콘솔에서 사용 가능하도록 전역 노출
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as any).__STORE__ = devStore;
  (window as any).__STORE_DEVTOOLS__ = devStore.devtools;
  
  console.log('DevTools available: window.__STORE_DEVTOOLS__');
  console.log('- __STORE_DEVTOOLS__.undo()');
  console.log('- __STORE_DEVTOOLS__.redo()');
  console.log('- __STORE_DEVTOOLS__.getHistory()');
  console.log('- __STORE_DEVTOOLS__.reset()');
}`}
                    language="typescript"
                    filename="dev-store.tsx"
                />

                <h3>4.3 성능 모니터링과 최적화</h3>

                <PostCode
                    code={`// 성능 모니터링 기능이 있는 스토어
function createMonitoredStore<T>(initialState: T) {
  let state = initialState;
  const listeners = new Set<Listener>();
  
  // 성능 메트릭
  const metrics = {
    updateCount: 0,
    listenerCount: 0,
    averageUpdateTime: 0,
    slowUpdates: [] as Array<{ action: string; duration: number }>,
  };

  const setState = (
    newState: T | SetStateFn<T>,
    action: string = 'unknown'
  ) => {
    const startTime = performance.now();
    
    const nextState = typeof newState === 'function'
      ? (newState as SetStateFn<T>)(state)
      : newState;

    if (!Object.is(state, nextState)) {
      state = nextState;
      metrics.updateCount++;
      
      // 리스너 알림
      listeners.forEach(listener => listener());
      
      const duration = performance.now() - startTime;
      
      // 평균 업데이트 시간 계산
      metrics.averageUpdateTime = 
        (metrics.averageUpdateTime * (metrics.updateCount - 1) + duration) / 
        metrics.updateCount;
      
      // 느린 업데이트 기록 (16ms 이상)
      if (duration > 16) {
        metrics.slowUpdates.push({ action, duration });
        console.warn(
          \`Slow state update detected: \${action} took \${duration.toFixed(2)}ms\`
        );
      }
    }
  };

  const getState = () => state;
  
  const subscribe = (listener: Listener) => {
    listeners.add(listener);
    metrics.listenerCount = listeners.size;
    
    return () => {
      listeners.delete(listener);
      metrics.listenerCount = listeners.size;
    };
  };

  const getMetrics = () => ({
    ...metrics,
    currentListenerCount: listeners.size,
  });

  return { getState, setState, subscribe, getMetrics };
}

// React Profiler와 통합
import { Profiler, ProfilerOnRenderCallback } from 'react';

const monitoredStore = createMonitoredStore<AppState>({
  user: null,
  theme: 'light',
  count: 0,
});

function App() {
  const onRender: ProfilerOnRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    if (actualDuration > 16) {
      console.warn(\`Slow render in \${id}: \${actualDuration.toFixed(2)}ms\`);
    }
  };

  return (
    <Profiler id="App" onRender={onRender}>
      <UserProfile />
      <ThemeToggle />
    </Profiler>
  );
}

// 주기적으로 메트릭 리포트
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  setInterval(() => {
    const metrics = monitoredStore.getMetrics();
    console.table({
      'Total Updates': metrics.updateCount,
      'Active Listeners': metrics.currentListenerCount,
      'Avg Update Time': \`\${metrics.averageUpdateTime.toFixed(2)}ms\`,
      'Slow Updates': metrics.slowUpdates.length,
    });
  }, 10000); // 10초마다
}`}
                    language="typescript"
                    filename="monitored-store.tsx"
                />

                <PostDivider />

                <h2>5. 결론</h2>

                <p>
                    React Hooks의 내부 구현을 이해하면 "왜 이런 규칙이 있을까?"라는 질문에 답할 수 있습니다. 
                    Linked list 기반의 아키텍처는 단순하지만 강력하며, 
                    호출 순서를 보장해야 한다는 제약은 이러한 구조에서 자연스럽게 나옵니다.
                </p>

                <p>
                    또한 Concurrent Rendering이 도입되면서 Tearing과 같은 새로운 문제가 등장했고, 
                    <code>useSyncExternalStore</code>는 이를 해결하기 위한 표준 솔루션입니다. 
                    외부 상태 관리 라이브러리를 직접 만들거나 기존 라이브러리를 사용할 때, 
                    이러한 원리를 이해하고 있으면 더 견고하고 성능 좋은 애플리케이션을 만들 수 있습니다.
                </p>

                <PostBlockquote>
                    <strong>핵심 요약:</strong>
                    <ul>
                        <li>Hooks는 Fiber 노드의 linked list로 관리되며, 호출 순서가 곧 식별자입니다.</li>
                        <li>조건부 Hook 호출은 linked list의 순서를 깨뜨려 버그를 발생시킵니다.</li>
                        <li>Custom Hook은 단순하고 명확하게, 의존성 배열을 정확히 관리해야 합니다.</li>
                        <li>Tearing은 Concurrent Rendering에서 렌더링 중 외부 상태 변경으로 발생합니다.</li>
                        <li>useSyncExternalStore는 외부 스토어를 안전하게 구독하고 Tearing을 방지합니다.</li>
                        <li>상태 관리 라이브러리 구현 시 SSR, 성능 최적화, 디버깅을 함께 고려해야 합니다.</li>
                    </ul>
                </PostBlockquote>

                <p>
                    이러한 깊은 이해는 시니어 프론트엔드 엔지니어로서 
                    복잡한 문제를 디버깅하고, 성능을 최적화하며, 
                    팀원들에게 명확한 가이드를 제공하는 데 필수적입니다.
                </p>
            </PostBody>
        </>
    );
});


