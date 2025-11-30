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
    PostSeries,
    PostTag,
} from "@components/post";

export const head: DocumentHead = {
    title: "이벤트 루프: macrotask vs microtask 실행 순서와 렌더 타이밍",
    meta: [
        {
            property: "keywords",
            content:
                "이벤트 루프, 태스크 큐, macrotask, microtask, Promise.then, queueMicrotask, MutationObserver, setTimeout, requestAnimationFrame, 렌더링, 웹 개발",
        },
        {
            property: "description",
            content:
                "브라우저 이벤트 루프에서 macrotask와 microtask의 실행 순서, Promise/queueMicrotask/MutationObserver/setTimeout/requestAnimationFrame의 타이밍과 렌더링 영향 정리.",
        },
    ],
};



export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>이벤트 루프: macrotask vs microtask 실행 순서와 렌더 타이밍</h1>
                <PostTag tags={head.meta![0].content!}></PostTag>
                <PostDate>2025-10-18</PostDate>
                <PostSeries title={"웹 개발"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    브라우저 이벤트 루프에서 macrotask와 microtask는 어떤 순서로
                    실행되나요? Promise.then, queueMicrotask, MutationObserver,
                    setTimeout, requestAnimationFrame은 각각 언제 실행되며 렌더링
                    타이밍에 어떤 영향을 주나요?
                </PostBlockquote>

                브라우저 한 턴의 일반적인 순서는 다음과 같습니다.
                <br />
                <br />
                1) macrotask 1개 실행 → 2) microtask 체크포인트에서 큐가 빌 때까지
                모두 실행 → 3) requestAnimationFrame 콜백 실행(프레임이 있을 때)
                → 4) 렌더(레이아웃/페인트) → 다음 macrotask
                <br />
                <br />
                분류 및 타이밍 요약:
                <br />
                - microtask: Promise.then, queueMicrotask, MutationObserver
                (일반적으로 다른 microtask 이후 같은 체크포인트에서 알림이
                flush)
                <br />
                - macrotask: setTimeout (최소 지연 후 “다음 턴”)
                <br />
                - 특수: requestAnimationFrame (microtask 이후, 페인트 직전)
                <br />
                <br />
                렌더링 영향:
                <br />
                - microtask는 렌더 전에 전부 소진됩니다. 길거나 연쇄적인
                microtask 체인은 렌더를 지연시킵니다.
                <br />
                - setTimeout은 보통 이전 턴의 렌더 이후 “다음 턴”에 실행되어
                페인트를 직접 막지 않습니다.
                <br />
                - requestAnimationFrame은 페인트 직전에 실행되어 애니메이션
                갱신에 적합합니다. JS가 오래 걸리면 콜백이 다음 프레임으로 밀려
                프레임 드롭이 발생할 수 있습니다.
                <br />
                <br />
                간단한 데모 코드:
                <PostCode code={demoCode} language="typescript" />
                기대 가능한 출력 순서(환경에 따라 타이밍은 달라질 수 있으나
                일반적 경향):
                <br />
                Promise.then (microtask) → queueMicrotask (microtask) →
                mutationObserver (microtask 알림) → requestAnimationFrame (paint
                직전) → setTimeout (다음 턴 macrotask)
                <br />
                <br />
                참고:
                <PostLink href="https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model">
                    HTML Standard: Event loop
                </PostLink>
                <br />
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth">
                    MDN: Microtask guide
                </PostLink>
                <br />
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame">
                    MDN: requestAnimationFrame
                </PostLink>
            </PostBody>
        </>
    );
});

const demoCode = `
const mo = new MutationObserver(() => console.log('mutationObserver'));
mo.observe(document.body, { childList: true });

setTimeout(() => console.log('setTimeout (macrotask)'), 0);

Promise.resolve().then(() => console.log('Promise.then (microtask)'));
queueMicrotask(() => console.log('queueMicrotask (microtask)'));

requestAnimationFrame(() => console.log('requestAnimationFrame (before paint)'));

// 트리거하여 MutationObserver 알림을 같은 턴의 microtask 체크포인트에서 flush
document.body.appendChild(document.createElement('div'));
`;

