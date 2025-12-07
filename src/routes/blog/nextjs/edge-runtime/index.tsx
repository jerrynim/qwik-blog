import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
  PostBlockquote,
  PostBody,
  PostCode,
  PostDate,
  PostHead,
  PostHeadImage,
  PostLink,
  PostTag,
} from "@components/post";

export const head: DocumentHead = {
  title: "Next.js에서 Edge Runtime을 사용하는 이유와 제약",
  meta: [
    {
      property: "keywords",
      content: "nextjs edge runtime proxy v8 isolate",
    },
    {
      property: "description",
      content: "Next.js에서 Edge Runtime을 사용하는 이유와 제약",
    },
  ],
};

export default component$(() => {
  return (
    <>
      <PostHeadImage src=""></PostHeadImage>
      <PostHead>
        <h1>Next.js에서 Edge Runtime을 사용하는 이유와 제약</h1>
        <PostTag tags="nextjs edge runtime proxy"></PostTag>
        <PostDate>2025-12-07</PostDate>
      </PostHead>
      <PostBody>
        <PostBlockquote>
          Edge runtime의 사용은 낮은 지연(low latency)를 제공하기 위함이며,
          제약은 환경의 통일성과 portable을 제공하기 위해서입니다.
        </PostBlockquote>
        <PostLink href="https://nextjs.org/docs/app/api-reference/edge">
          Edge runtime
        </PostLink>
        은{" "}
        <PostLink href="https://nextjs.org/docs/app/getting-started/proxy">
          Proxy
        </PostLink>{" "}
        사용시 제한된 API를 제공하는 런타임입니다.
        <br />
        Edge runtime을 사용함으로써 다음과 같은 이점을 가질 수 있습니다.
        <ul>
          <li>Web Standard API 기반의 경량화된 런타임</li>
          <li>빠른 cold start(Edge worker의 V8 isolate 사용 시)</li>
          <li>Edge 환경의 지리적으로 가까운 위치에서 응답을 제공</li>
        </ul>
        Vercel/Cloudflare로 배포하게된다면 Proxy는 전세계 edge locations에{" "}
        <PostLink href="https://developers.cloudflare.com/workers/reference/how-workers-works/#isolates">
          V8 Isolate{" "}
        </PostLink>{" "}
        형태로 배포됩니다.
        <br />
        만약 self-hosting 환경이라면 어떻게 Proxy가 동작할까요?
        <br />
        Proxy는 Node.js의 vm 모듈을 사용하여 격리된 JavaScript 실행 환경을
        만듭니다.
        <PostCode
          code={code}
          language="typescript"
          filename="packages/next/src/server/web/sandbox/context.ts"
        />
        <br />
        따라서 단일 Node.js 프로세스 환경에서 Node.js 힙을 공유하게 되며 Edge
        Runtime의 이점을 가지지 못합니다.
        <br />
        하지만 Next.js는 동일한 환경을 제공하기 위해 제한된 Node.js API 제공
        등의 작업을 수행합니다.
        <br />
        process.env를 사용할 수 있게 합니다.
        <PostCode code={code2} language="typescript" />
        <PostLink href="https://nextjs.org/docs/app/api-reference/edge#reference">
          제한된 API set
        </PostLink>
        를 사용할 수 있게 합니다.
        <PostCode code={code3} language="typescript" />
        Web Standard API를 Next.js 요구사항에 맞게 커스터마이징합니다.
        <PostCode code={code4} language="typescript" />
        <br />
        ISR을 사용할 수 없는 이유도 동일합니다. ISR은 파일 시스템 캐싱을
        사용해야 하지만 Edge Runtime에서는 fs 모듈 사용이 불가합니다.
        <br />
        <br />
        참조 링크 :
        <PostLink href="https://plaintexting.com/knowledge_base-reviews/v8-isolate/">
          {" "}
          [Operating System] V8 Isolate
        </PostLink>
      </PostBody>
    </>
  );
});

const code = `import { runInContext } from 'vm'

        runInContext(content, moduleContext.runtime.context, {
          filename: filepath,
        })
        moduleContext.paths.set(filepath, content)
`;

const code2 = `  const runtime = new EdgeRuntime({
    codeGeneration:
      process.env.NODE_ENV !== 'production'
        ? { strings: true, wasm: true }
        : undefined,
    extend: (context) => {
      context.process = createProcessPolyfill(edgeFunctionEntry.env)


function createProcessPolyfill(env: Record<string, string>) {

// Edge Runtime에서
context.process = createProcessPolyfill(env)

// 사용자 코드에서
process.env.NODE_ENV  // ✅ 허용됨
process.cwd()         // ❌ throwUnsupportedAPIError!
`;

const code3 = `function addStub(context: EdgeRuntime['context'], name: string) {
  Object.defineProperty(context, name, {
    get() {
      return function () {
        throwUnsupportedAPIError(name)
      }
    },
    enumerable: false,
  })
}
  
for (const name of EDGE_UNSUPPORTED_NODE_APIS) {
  addStub(context, name)
}
`;

const code4 = `      const __fetch = context.fetch
      context.fetch = async (input, init = {}) => {
        const callingError = new Error('[internal]')
        const assetResponse = await fetchInlineAsset({
          input,
          assets: options.edgeFunctionEntry.assets,
          distDir: options.distDir,
          context,
        })
        if (assetResponse) {
          return assetResponse
        }

        init.headers = new Headers(init.headers ?? {})
        ...
`;
