import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBlockquote,
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostLink,
    PostSeries,
    PostTag,
} from "@components/post";

export const head: DocumentHead = {
    title:
        "이터러블/제너레이터: 프로토콜 구현, 제너레이터 vs async 제너레이터, 스트리밍",
    meta: [
        {
            property: "keywords",
            content:
                "이터러블, 이터레이터, 제너레이터, async 제너레이터, 스트리밍, for...of, for await...of, 프론트엔드 면접 질문",
        },
        {
            property: "description",
            content:
                "이터러블/이터레이터 프로토콜 직접 구현, 제너레이터와 async 제너레이터의 차이, Web Streams 기반 스트리밍 처리 유스케이스를 설명합니다.",
        },
    ],
};

const manualIterable = `
// 이터러블(Iterable): [Symbol.iterator]()를 가지는 객체
// 이터레이터(Iterator): next(): { value, done }를 제공
const range = (start: number, end: number) => ({
  [Symbol.iterator]() {
    let current = start;
    return {
      next() {
        return current <= end
          ? { value: current++, done: false }
          : { value: undefined, done: true };
      },
    };
  },
});

for (const n of range(1, 3)) {
  console.log(n); // 1, 2, 3
}
`;

const generatorRange = `
function* rangeGen(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i; // 필요할 때마다 한 값씩 생성(지연 계산)
  }
}

const it = rangeGen(1, 3);
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { value: undefined, done: true }
`;

const yieldInjection = `
function* g() {
  const x = yield 1; // 외부 next(3)의 3이 x로 주입됨
  return x * 2;
}

const it = g();
console.log(it.next());   // { value: 1, done: false }
console.log(it.next(3));  // { value: 6, done: true }
`;

const asyncGeneratorStreaming = `
// async 제너레이터: next()가 Promise를 반환, for await...of로 소비
async function* streamLines(stream: ReadableStream<Uint8Array>) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let buf = '';
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      let idx;
      while ((idx = buf.indexOf('\n')) >= 0) {
        yield buf.slice(0, idx);
        buf = buf.slice(idx + 1);
      }
    }
    if (buf) yield buf; // 남은 마지막 줄
  } finally {
    reader.releaseLock();
  }
}

// 예: fetch로 들어오는 텍스트를 줄 단위로 스트리밍 처리
const res = await fetch('/api/stream');
for await (const line of streamLines(res.body!)) {
  console.log('line:', line);
}
`;

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>이터러블/제너레이터: 프로토콜, 제너레이터 vs async 제너레이터, 스트리밍</h1>
                <PostTag tags={head.meta![0].content!}></PostTag>
                <PostDate>2025-10-18</PostDate>
                <PostSeries title={"프론트엔드 면접 질문"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    이터러블/이터레이터 프로토콜을 직접 구현하고, 제너레이터와 async
                    제너레이터의 차이 및 스트리밍 처리(use case)를 설명해보세요.
                </PostBlockquote>

                핵심 요약:
                <br />
                - <b>이터러블</b>: <code>[Symbol.iterator]()</code>를 갖는 객체로, 호출하면
                이터레이터를 반환합니다.
                <br />
                - <b>이터레이터</b>: <code>next(): {'{'} value, done {'}'}</code>을 제공하며,
                선택적으로 <code>return</code>, <code>throw</code>를 가질 수 있습니다.
                <br />
                - <b>제너레이터</b>: <code>function*</code>로 이터러블/이터레이터를 쉽게
                만들고, <code>yield</code>로 중단·<code>next(arg)</code>로 재개/주입합니다.
                <br />
                - <b>async 제너레이터</b>: <code>async function*</code>, <code>next()</code>
                가 Promise를 반환해 <code>for await...of</code>로 소비합니다.

                <PostCode code={manualIterable} language="typescript" />

                제너레이터로 동일 패턴을 간결하게 표현할 수 있습니다.
                <PostCode code={generatorRange} language="typescript" />

                <b>yield ↔ next(arg)</b>로 외부에서 값을 주입할 수 있습니다.
                <PostCode code={yieldInjection} language="typescript" />

                <b>스트리밍 유스케이스</b>:
                <br />
                - 서버 전송 이벤트(SSE), JSONL, LLM 토큰 스트림 등 네트워크 응답을 도착
                순서대로 처리
                <br />
                - 백프레셔를 자연스럽게 처리하며 대용량 데이터를 메모리에 전부 올리지 않음
                <br />
                - Node.js/웹 스트림과 조합해 라인 파싱, 청크 처리, 점진적 렌더링 등 구현
                <PostCode code={asyncGeneratorStreaming} language="typescript" />

                참고:
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols">
                    MDN: Iteration protocols
                </PostLink>
                <br />
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator">
                    MDN: Generator
                </PostLink>
                <br />
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator">
                    MDN: Async generator
                </PostLink>
                <br />
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/API/Streams_API">
                    MDN: Streams API
                </PostLink>
            </PostBody>
        </>
    );
});


