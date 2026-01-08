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
    title: "redirect가 작동하는 방식과 return이 필요 없는 이유",
    meta: [
        {
            property: "keywords",
            content: "nextjs redirect",
        },
        {
            property: "description",
            content: "redirect는 return이 필요 없는 이유",
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage src=""></PostHeadImage>
            <PostHead>
                <h1>redirect는 return이 필요 없는 이유</h1>
                <PostTag tags="nextjs redirect"></PostTag>
                <PostDate>2026-01-08</PostDate>
            </PostHead>
            <PostBody>
                redirect()는 내부적으로 예외를 던져 실행을 중단시키고,
                TypeScript의 never 타입으로 "이 함수는 반환하지 않는다"고
                명시하기 때문에 return 키워드가 불필요합니다. 이는 제어 흐름
                분석에도 도움이 되어, TypeScript가 redirect 이후의 코드는
                실행되지 않는다는 것을 이해할 수 있게 합니다.
                <PostCode code={code1} language="typescript" />
                서버 컴포넌트에서 에러를 throw하면 RSC payload에 에러 정보를
                전달하고, 클라이언트에서 가장 가까운 에러 바운더리에서
                처리되는데, redirect()는 에러 바운더리에 잡히지 않을까요?
                <br />
                서버 컴포넌트에서 redirect() 를 사용하게 되면 nextRouterError를
                따로 처리하고 있어 해당 에러 바운더리에서 처리되지 않습니다.
                <PostCode code={code2} language="typescript" />
                <PostTitle subtitle="서버 액션" />
                서버 액션에서 redirect() 를 사용하게 되면 다음과 같이
                처리됩니다.
                <br />
                1. 클라이언트에서 loginAction() 호출 (fetch 요청)
                <br />
                2. 서버에서 redirect('/login') → RedirectError를 throw
                <br />
                3. action-handler.ts의 catch 블록이 에러 캐치 ✅<br />
                4. isRedirectError(err) 확인 후 특별 처리
                <br />
                5. HTTP 응답에 x-action-redirect: /login;replace 헤더 설정
                <br />
                6. 클라이언트로 303 응답 전송
                <br />
                7. 클라이언트의 server-action-reducer.ts가 헤더 파싱
                <br />
                8. Next.js 라우터로 /login으로 이동
                <br />
                <PostCode
                    code={code4}
                    language="typescript"
                    filename="packages/next/src/server/app-render/action-handler.ts"
                />
                <PostTitle subtitle="서버 컴포넌트" />
                1. 서버가 페이지 렌더링 시작
                <br />
                2. redirect('/login') → RedirectError throw
                <br />
                3. app-render.tsx가 catch
                <br />
                4. HTTP 307 + Location: /login 응답
                <br />
                5. 브라우저가 /login으로 자동 이동
                <br />
                <PostCode
                    code={code3}
                    language="typescript"
                    filename="packages/next/src/server/app-render/app-render.tsx"
                />
            </PostBody>
        </>
    );
});
const code1 = `export function redirect(
  /** The URL to redirect to */
  url: string,
  type?: RedirectType
): never {
  type ??= actionAsyncStorage?.getStore()?.isAction
    ? RedirectType.push
    : RedirectType.replace

  throw getRedirectError(url, type, RedirectStatusCode.TemporaryRedirect)
}`;
const code2 = `export function onCaughtError(
    thrownValue: unknown,
    errorInfo: ErrorInfo & { errorBoundary?: React.Component }
  ) {
    // ... 코드 생략 ...

    // Skip certain custom errors which are not expected to be reported on client
    if (isBailoutToCSRError(thrownValue) || isNextRouterError(thrownValue)) return

  }`;

const code3 = `async function renderToStream(
...
} else if (isRedirectError(err)) {
        errorType = 'redirect'
        res.statusCode = getRedirectStatusCodeFromError(err)
        metadata.statusCode = res.statusCode

        const redirectUrl = addPathPrefix(
          getURLFromRedirectError(err),
          basePath
        )`;

const code4 = `
export async function handleAction({
...
} catch (err) {
    if (isRedirectError(err)) {
      const redirectUrl = getURLFromRedirectError(err)
      const redirectType = getRedirectTypeFromError(err)

      // if it's a fetch action, we'll set the status code for logging/debugging purposes
      // but we won't set a Location header, as the redirect will be handled by the client router
      res.statusCode = RedirectStatusCode.SeeOther
      metadata.statusCode = RedirectStatusCode.SeeOther

      if (isFetchAction) {
        return {
          type: 'done',
          result: await createRedirectRenderResult(
            req,
            res,
            host,
            redirectUrl,
            redirectType,
            ctx.renderOpts.basePath,
            workStore,
            requestStore.url.pathname
          ),
        }
      }`;
