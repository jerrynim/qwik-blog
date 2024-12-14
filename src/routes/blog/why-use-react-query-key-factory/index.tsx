import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostLink,
    PostTag,
    PostTitle,
} from "@components/post";
import PostBlockquote from "../../../components/post/post-blockquote";

export const head: DocumentHead = {
    title: "react-query-key-factory를 사용하는 이유",
    meta: [
        {
            property: "keywords",
            content: "react-query-key-factory",
        },
        {
            property: "description",
            content: `react-query-key-factory를 사용하는 이유`,
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>React Query Key Factory를 사용하는 이유</h1>
                <PostTag tags="React Query Key Factory"></PostTag>
                <PostDate>2024-12-10</PostDate>
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    이 글에서의 코드는 item, 종속1 등으로 대체됩니다.
                </PostBlockquote>
                <PostTitle subtitle="기존 Querykey의 형태"></PostTitle>
                <PostCode code={code1} />
                <PostTitle subtitle="기존 keyfactory의 문제점"></PostTitle>
                <ol>
                    <li>
                        key들을 나누는 기준이 개념적 분리, 일괄 무효화를 위한
                        그룹핑이기에 사람마다 나누는 기준이 다릅니다.
                    </li>
                    <li>
                        그로 인하여 일부는 invalidate 시에 관련 키들을
                        일괄적으로 무효화할 수 있지만, 종속값들을 가진 키들을
                        무효화할 때 제외되곤 합니다.
                    </li>
                    <li>
                        의존 순서가 역전되어 있습니다.
                        <br />
                        {` [item,’itemInfo’,{상위종속1,상위종속2}] 를 가지게 되어  itemInfo ⇒ 종속1,종속2 가 되었습니다.
상위종속1 ⇒ 상위종속2 ⇒ itemInfo 가 자연스러울 것입니다.`}
                    </li>
                    <li>
                        쿼리를 찾는 것이 기억에 의존적이어서 찾는 데 불편함이
                        있습니다.
                    </li>
                    <li>invalidateQueries 시에 찾기 힘듭니다.</li>
                    <li>1개의 API에 복수의 queryKey가 존재하기도 합니다.</li>
                    <li>
                        useGetItemQuery와 같은 불필요한 훅스의 생성의
                        번거로움(queryOptions Type 작성은 더욱 불편함)
                    </li>
                    <li>사용자에 따른 통일되지 않은 패턴</li>
                </ol>
                <br />
                Q.1 다음 query는 어떤 keys에 포함되어야 할까요?
                <PostCode code={code2} />
                parameter를 보면 정하는 데 수월해집니다.
                <PostCode code={code3} />
                결국 query key를 구성하는 것은 api에서 사용되는 parameter이기에
                queryKey는 파라미터에 종속이 되는 것이 자연스럽다고 생각합니다.
                <br />
                결론적으로 쿼리 키를 나누는 기준은 개념적 분리(items), 일괄
                무효화를 위한 그룹핑이 아닌, parameter 종속성에 의해 분리가
                되어야 합니다.
                <PostTitle subtitle="query-key-factory"></PostTitle>
                <PostLink href="https://github.com/lukemorales/query-key-factory">
                    query-key-factory
                </PostLink>
                <PostBlockquote>
                    Focus on writing and invalidating queries without the hassle
                    of remembering
                    <br />
                    how you've set up a key for a specific query! This lib will
                    take care of the rest.
                    <br />⇒ 특정 쿼리에 대한 키를 어떻게 설정했는지 기억하는
                    번거로움 없이 쿼리 작성 및 무효화에 집중하세요! 이 lib가
                    나머지를 처리할 것입니다.
                </PostBlockquote>
                예시 코드:
                <PostCode code={code4} />
                query key factory를 사용하는 이유
                <ul>
                    <li>invalidatequeries 시에 쿼리를 찾는 데 용이합니다.</li>
                    <li>동일한 구조를 가질 수 있습니다.</li>
                    <li>키의 범위에 대한 정의가 쉽습니다.</li>
                    <li>
                        Typescript는 사용하기 쉬운 모든 쿼리 키와 해당 출력에
                        대해 자동 완성 기능을 제공합니다.
                    </li>
                    <li>기억하지 않고도 사용할 수 있습니다.</li>
                </ul>
                예시 1:
                <br />
                여기 Todos에 종속된 Items가 있습니다. 이를 확인해볼 수 있는 것은
                api의 path입니다.
                <PostCode code={code5} />
                따라서 위의 예시처럼 작성한다면 다음과 같이 작성할 수 있습니다.
                <PostCode code={code6} />
                그리고 useQuery에서 다음과 같이 작성하여 사용합니다.
                <br />
                contextQueries에는 _ctx 키를 사용하여 접근 가능합니다.
                <PostCode code={code7} />
                queries.workspaces.detail(workspaceId)._ctx.openings에 마우스를
                호버하면 쉽게 queryKey와 종속을 확인할 수 있습니다.
                <br />
                이를 통해 다음과 같이 접근할 수 있습니다.
                <br />
                <br />
                {`- 모든 투두 상세 queries.workspces.detail._def ["items", "detail"]`}
                <br />
                {`- 특정 투두 queries.workspces.detail._def ["items", "detail",{todoId:1}]`}
                <br />
                {`- 특정 투두 아이템 목록 queries.workspces.detail._def ["items", "detail",{todoId:1},”openings”]`}
                <PostTitle subtitle="InfiniteQueries에 대하여"></PostTitle>
                queryFn을 factory에 넣을 경우 타입 지원이 불가하여 Issue를
                남겼지만, <br />
                <PostLink href="https://github.com/lukemorales/query-key-factory/issues/89">
                    https://github.com/lukemorales/query-key-factory/issues/89
                </PostLink>
                <br />
                관심을 받지 못했습니다.
                <br />
                문득 드는 생각은
                <br />
                page, PageParam, sort가 queryKey로 정말 필요한 값일까?
                <br />
                {`page: , pageSize:20, sort:[”DESC”]`}
                <br />
                쿼리를 캐싱하는 것은 불필요한 요청을 줄이기 위함이고,
                Invalidate는 최신의 데이터를 요청하기 위함인데
                <br />
                최신 데이터를 불러올 때 page:0만 무효화할 일은 없을 것입니다.
                고로 전체 page를 무효화하는 게 맞음으로 queryKey로 page를 받을
                필요는 없다고 생각합니다.
                <br />
                <br />
                좋은 예제
                <PostCode code={code8} />
                <br />
                모든 항목(openingId, applicantId) 등을 invalidate 하고 싶을 때
                <br />
                predicate 활용
                <PostCode code={code9} />
            </PostBody>
        </>
    );
});

export const code1 = `export const openingQueryKeys = {
  ALL: ['item'] as const,
  ItemInfo: (params: GetItemInfoParams) => [
    'itemInfo',
    { ...params },
  ],`;

export const code2 = `export const getItems = async ({`;

export const code3 = `export const getPasses = async ({
  종속1,
  종속2,
  filter,
  ...params
}) => {
  const { data } = await getRequest(
    \`/items/\${종속1}/items/\${종속2}\`,
  );
  return data;
};`;

export const code4 = `import { createQueryKeys, mergeQueryKeys } from "@lukemorales/query-key-factory";

// queries/users.ts
export const users = createQueryKeys('users', {
  all: null,
  detail: (userId: string) => ({
    queryKey: [userId],
    queryFn: () => api.getUser(userId),
  }),
});
// => createQueryKeys output:
// {
//   _def: ['users'],
//   detail: (userId: string) => {
//     queryKey: ['users', 'detail', userId],
//     queryFn: (ctx: QueryFunctionContext) => api.getUser(userId),
//   },
// }
// queries/todos.ts
export const todos = createQueryKeys('todos', {
  detail: (todoId: string) => [todoId],
  list: (filters: TodoFilters) => ({
    queryKey: [{ filters }],
    queryFn: (ctx) => api.getTodos({ filters, page: ctx.pageParam }),
    contextQueries: {
      search: (query: string, limit = 15) => ({
        queryKey: [query, limit],
        queryFn: (ctx) => api.getSearchTodos({
          page: ctx.pageParam,
          filters,
          limit,
          query,
        }),
      }),
    },
  }),
});
todos.list._ctx.serach(params)

// queries/index.ts
export const queries = mergeQueryKeys(users, todos);`;

export const code5 = "/todos/${todoId}/items";

export const code6 = `export const workspaces = createQueryKeys('todos', {
  list: {
    queryKey: null,
    queryFn: () => getTodoListAPI(),
  },
  detail: (todoId: number | ) => ({
    queryKey: [{ todoId }],
    queryFn: () => getTodoAPI({ todoId }),
    contextQueries: {
      items: (params: GetItemListRequestParams) => ({
        queryKey: [params],
        queryFn: () => getItemListAPI({ todoId, ...params }),
      }),`;

export const code7 = `const { data, isLoading } = useQuery(
	  queries.workspaces.detail(todoId)._ctx.items,
    
  // with params
  const { data, isLoading } = useQuery({
    ...queries.workspaces.detail(todoId)._ctx.items({
      page,
      pageSize: 10,
    }),`;

export const code8 = `  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    ...queries.items
      .detail({ todoId, itemId })
      ._ctx.search({
        debouncedSearch,
      }),
    queryFn: async ({ pageParam }) =>
      await getSearchedItems({
        todoId,
        itemId,
        page: pageParam,
        pageSize: 20,
        keyword: debouncedSearch,
      }),
    initialPageParam: 0,`;

export const code9 = `queryClient.invalidateQueries({
        // queries.openings.detail({ todoId, itemId })._ctx.authority,
        predicate: (query) =>
          query.queryKey[0] === 'items' &&
          query.queryKey[1] === 'detail' &&
          query.queryKey[3] === 'some',
      })`;
