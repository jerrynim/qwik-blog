import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
  PostBlockquote,
  PostBody,
  PostCode,
  PostDate,
  PostHead,
  PostHeadImage,
  PostImage,
  PostLink,
  PostTag,
} from "@components/post";

export const head: DocumentHead = {
  title: ".keystore 생성하는 법 (Mac)",
  meta: [
    {
      property: "keywords",
      content: "nextjs server component throw error",
    },
    {
      property: "description",
      content:
        "When you throw an error in a Next.js server component, what happens?",
    },
  ],
};

export default component$(() => {
  return (
    <>
      <PostHeadImage src=""></PostHeadImage>
      <PostHead>
        <h1>서버 컴포넌트에서 throw Error를 하게된다면?</h1>
        <PostTag tags="nextjs server component throw error"></PostTag>
        <PostDate>2025-11-30</PostDate>
      </PostHead>
      <PostBody>
        <PostBlockquote>
          Next.js 서버 컴포넌트에서 throw Error를 하게된다면 가장 가까운 Error
          Boundary에서 처리됩니다.
          <br />
        </PostBlockquote>
        <br />
        서버 컴포넌트에서 에러가 발생하면 에러객체를 직접 클라이언트로
        응답하지않고 RSC payload를 통해 전달하게됩니다.
        <br />
        <code>createFlightReactServerErrorHandler</code>에 의해 digest 를
        생성합니다.(stringHash 함수가 digest를 생성)
        <br />
        <PostCode code={code} language="typescript" />
        <PostLink href="https://nextjs.org/docs/app/api-reference/file-conventions/error#errordigest">
          digest
        </PostLink>
        는 서버 측 로그에서 해당 오류와 일치하는지 확인하는 데 사용할 수
        있습니다.
        <br />
        <br />
        emmitErrorChunk 함수에서 digest, name, message, stack, env, owner 를
        생성하여 전달하게됩니다.
        <br />
        <PostCode code={code2} language="typescript" />
        이는 실제 네트워크 RSC payload에서 확인가능합니다.
        <br />
        <PostCode code={code3} language="typescript" />
        <PostImage
          src="https://res.cloudinary.com/dij9kacx9/image/upload/v1764514048/error-rsc-payload_jrjuud.png"
          alt="error-rsc-payload"
        />
        여기서 "E"는 ASCII 69로서 에러 청크를 나타내는 코드입니다.
        <PostCode code={code4} language="typescript" />
        <br /> RSC payload에서 청크를 받아 "E" case에서 error.digest를 설정하고{" "}
        <code>triggerErrorOnChunk</code> 를 통해 청크 상태를 rejected로
        변경합니다.
        <PostCode code={code5} language="typescript" />
        <br />
        readChunk 함수에서 throw chunk.reason;을 하고, use() 호출 시 자동으로
        에러 재발생시킵니다.
        <PostCode code={code6} language="typescript" />
        정리하면
        <PostCode code={code7} language="typescript" />
        <br />
        + error.js에서는 reset 함수를 제공하는데 해당 함수는 단순 hasError의
        상태를 변경하는 함수입니다.
        <PostCode
          code={code8}
          language="typescript"
          filename="packages/next/src/client/components/error-boundary.tsx"
        />
      </PostBody>
    </>
  );
});

const code = `export function createFlightReactServerErrorHandler(
  shouldFormatError: boolean,
  onReactServerRenderError: (err: DigestedError) => void
): RSCErrorHandler {
  return (thrownValue: unknown) => {
    if (typeof thrownValue === 'string') {
      // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
      return stringHash(thrownValue).toString()
    }`;

const code2 = `    function emitErrorChunk(request, id, digest, error, debug, owner) {
...
  digest = {
        digest: digest,
        name: name,
        message: message,
        stack: stack,
        env: env,
        owner: error
      };`;
const code3 = `E{\"digest\":\"1556183312\",\"name\":\"Error\",\"message\":\"withAuth Error\",\"stack\":[[\"withAuth\",\"/Users/jerrynim/Desktop/my-app/.next/dev/server/chunks/ssr/[root-of-the-server]__1da03bac._.js\",76,11,0,0,false],[\"ServerComponent\",\"/Users/jerrynim/Desktop/my-app/.next/dev/server/chunks/ssr/[root-of-the-server]__1da03bac._.js\",66,21,0,0,false]],\"env\":\"Server\",\"owner\":\"$3a\"}\n"])`;

const code4 = `    function processFullStringRow(response, streamState, id, tag, row) {
      ...
case 69:
          tag = response._chunks;
          var chunk = tag.get(id);
          row = JSON.parse(row);
          var error = resolveErrorDev(response, row);
          error.digest = row.digest;
          chunk
            ? (resolveChunkDebugInfo(response, streamState, chunk),
              triggerErrorOnChunk(response, chunk, error))
            : ((row = new ReactPromise("rejected", null, error)),
              resolveChunkDebugInfo(response, streamState, row),
              tag.set(id, row));
          break;
`;

const code5 = `    function triggerErrorOnChunk(response, chunk, error) {
      if ("pending" !== chunk.status && "blocked" !== chunk.status)
        chunk.reason.error(error);
      else {
        releasePendingChunk(response, chunk);
        var listeners = chunk.reason;
        if ("pending" === chunk.status && null != chunk._debugChunk) {
          var prevHandler = initializingHandler,
            prevChunk = initializingChunk;
          initializingHandler = null;
          chunk.status = "blocked";
          chunk.value = null;
          chunk.reason = null;
          initializingChunk = chunk;
          try {
            initializeDebugChunk(response, chunk);
          } finally {
            (initializingHandler = prevHandler),
              (initializingChunk = prevChunk);
          }
        }
        chunk.status = "rejected";
        chunk.reason = error;
        null !== listeners && rejectChunk(response, listeners, error);
      }
    }`;

const code6 = `    function readChunk(chunk) {
      switch (chunk.status) {
        case "resolved_model":
          initializeModelChunk(chunk);
          break;
        case "resolved_module":
          initializeModuleChunk(chunk);
      }
      switch (chunk.status) {
        case "fulfilled":
          return chunk.value;
        case "pending":
        case "blocked":
        case "halted":
          throw chunk;
        default:
          throw chunk.reason;
      }
    }`;

const code7 = `┌─────────────────────────────────────────────────────────────────┐
│                         서버 측                                   │
└─────────────────────────────────────────────────────────────────┘

1️⃣ ServerComponent에서 에러 발생
   throw new Error("Database connection failed")

2️⃣ React Server가 에러 캐치
   ↓
3️⃣ onError 핸들러 호출 (createFlightReactServerErrorHandler)
   - digest 생성: stringHash(message + stack)
   - digest 반환: "abc123"

4️⃣ emitErrorChunk(request, id, digest, error, ...)
   - name 추출: "Error"
   - message 추출: "Database connection failed"
   - stack 파싱: [{file, line, column}, ...]
   
   JSON 객체 생성:
   {
     digest: "abc123",        // ⭐ digest
     name: "Error",          // ⭐ 에러 타입
     message: "Database...", // ⭐ 에러 메시지
     stack: [...],           // ⭐ 스택 트레이스
     env: "Server",
     owner: null
   }

5️⃣ RSC Stream에 작성:
   "1:E" + JSON.stringify(errorObj) + "\n"
   
   실제 Payload:
   1:E{"digest":"abc123","name":"Error","message":"Database connection failed","stack":[...]}\n

┌─────────────────────────────────────────────────────────────────┐
│                      클라이언트 측                                │
└─────────────────────────────────────────────────────────────────┘

6️⃣ RSC Stream 파싱
   case 69: // 'E'
     row = JSON.parse(row)
     // row = {digest: "abc123", name: "Error", message: "...", stack: [...]}

7️⃣ resolveErrorDev(response, row)
   - errorInfo.message로 Error 생성 ⭐
   - errorInfo.stack으로 스택 재구성 ⭐
   - errorInfo.name 설정 ⭐
   
   결과: 완전히 재구성된 Error 객체

8️⃣ digest 설정
   error.digest = row.digest  // "abc123" ⭐

9️⃣ 최종 Error 객체
   {
     name: "Error",
     message: "Database connection failed",
     stack: "Error: Database...\n  at Component...",
     digest: "abc123",
     environmentName: "Server"
   }

🔟 triggerErrorOnChunk로 에러 저장
   chunk.status = "rejected"
   chunk.reason = error  // ⭐ 완전한 에러 객체

1️⃣1️⃣ use(rsc) 호출 시
   readChunk(chunk)
   → throw chunk.reason  // ⭐ 완전한 에러 throw!

1️⃣2️⃣ ErrorBoundary 캐치
   error.message ✅  // "Database connection failed"
   error.stack ✅    // 전체 스택
   error.digest ✅   // "abc123"`;

const code8 = `export class ErrorBoundaryHandler extends React.Component<

reset = () => {
    this.setState({ error: null })
  }`;
