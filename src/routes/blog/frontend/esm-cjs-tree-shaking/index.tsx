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
    title:
        "ESM vs CJS: 정적 분석·라이브 바인딩·Hoisting·TLA·Dynamic import와 트리 셰이킹",
    meta: [
        {
            property: "keywords",
            content:
                "ESM, CJS, 정적 분석, 라이브 바인딩, hoisting, top-level await, dynamic import, 트리 셰이킹, 번들러, 프론트엔드 면접 질문",
        },
        {
            property: "description",
            content:
                "ESM과 CJS의 핵심 차이(정적 분석, 라이브 바인딩, hoisting, top-level await, dynamic import)를 비교하고 번들러 트리 셰이킹에 미치는 영향을 설명합니다.",
        },
    ],
};

const staticVsDynamic = `
// 정적 분석 관점
// ESM: 정적/선언적 import — 빌드 타임에 의존성 그래프가 확정됨
// (조건문 안의 정적 import는 불가하고, 동적 로딩은 import() 사용)

// ESM (가능: 동적 import 표현식)
if (Math.random() > 0.5) {
  const mod = await import('./x.js');
}

// CJS (가능: 런타임 require — 동기이며 경로/조건을 런타임에 결정)
if (Math.random() > 0.5) {
  const mod = require('./x.js');
}
`;

const liveBinding = `
// ESM — 이름별 라이브 바인딩
// a.mjs
export let count = 0;
export function inc() { count++; }

// b.mjs
import { count, inc } from './a.mjs';
console.log(count); // 0
inc();
console.log(count); // 1  (라이브 바인딩)

// CJS — require는 객체를 반환, 구조 분해한 원시값은 스냅샷처럼 보일 수 있음
// a.js
exports.count = 0;
exports.inc = () => { exports.count++; };

// b.js
const a = require('./a');
const { count: snapshot } = a; // 스냅샷
console.log(snapshot); // 0
a.inc();
console.log(snapshot); // 0 (그대로)
console.log(a.count);  // 1 (객체 프로퍼티로 보면 갱신됨)
`;

const hoistingTdz = `
// Hoisting & TDZ
// ESM의 import는 호이스팅되며, 해당 바인딩은 TDZ에 놓임.
// 초기화 전 접근은 런타임에 에러가 될 수 있음(모듈 초기화 순서 준수).

// CJS는 호출 지점에서 require가 실행되며, 순환 의존 시 부분 초기화된 객체를 받을 수 있음.
`;

const tlaAndDynamic = `
// Top-level await (ESM)
// a.mjs
export const value = await Promise.resolve(42);

// b.mjs
import { value } from './a.mjs';
console.log(value); // 42

// Dynamic import (ESM)
const m = await import('./feature.mjs');
`;

const treeShaking = `
// 트리 셰이킹 팁
// - ESM 배포 및 이름별 export 사용
// - package.json에 sideEffects를 정확히 선언
{
  "type": "module",
  "sideEffects": false
}
`;

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>ESM vs CJS: 정적 분석·라이브 바인딩·Hoisting·TLA·Dynamic import</h1>
                <PostTag tags={head.meta![0].content!}></PostTag>
                <PostDate>2025-10-18</PostDate>
                <PostSeries title={"프론트엔드 면접 질문"} />
            </PostHead>

            <PostBody>
                <PostBlockquote>
                    모듈 시스템: ESM과 CJS의 차이(정적 분석, 라이브 바인딩, hoisting,
                    top-level await, dynamic import)를 비교하고, 번들러 트리 셰이킹에
                    미치는 영향을 설명하세요.
                </PostBlockquote>

                <strong>요점 요약</strong>
                <br />
                - ESM: 정적/선언적 import, 이름별 라이브 바인딩, import 호이스팅+TDZ,
                TLA 및 표준 <code>import()</code> 지원 → 정적 분석과 트리 셰이킹에 유리
                <br />
                - CJS: 런타임 동적·동기 <code>require</code>와 객체 반환 → 정적 분석이
                어려워 트리 셰이킹은 제한적/보수적

                <PostCode code={staticVsDynamic} language="typescript" />

                ESM은 이름별 라이브 바인딩을 제공해 원 모듈의 재할당이 소비자에 반영됩니다.
                CJS는 객체를 반환하므로 구조 분해한 원시값은 스냅샷처럼 보일 수 있습니다.
                <PostCode code={liveBinding} language="typescript" />

                Hoisting과 TDZ, 순환 의존 시의 차이를 간단히 정리합니다.
                <PostCode code={hoistingTdz} language="typescript" />

                ESM은 top-level await와 표준 동적 import를 지원합니다.
                <PostCode code={tlaAndDynamic} language="typescript" />

                번들러 트리 셰이킹은 ESM의 정적 구조와 이름별 사용 분석에 크게 의존합니다.
                패키지를 ESM으로 배포하고 <code>package.json</code>에 정확한
                <code>sideEffects</code>를 지정하세요.
                <PostCode code={treeShaking} language="json" />

                참고:
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">
                    MDN: JavaScript modules
                </PostLink>
                <br />
                <PostLink href="https://webpack.js.org/guides/tree-shaking/">
                    webpack: Tree Shaking
                </PostLink>
            </PostBody>
        </>
    );
});


