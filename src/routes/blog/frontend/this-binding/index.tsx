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
        "this 바인딩 규칙: 기본/암시적/명시적/new와 화살표 함수의 lexical this",
    meta: [
        {
            property: "keywords",
            content:
                "this 바인딩, call, apply, bind, new, 암시적 바인딩, 기본 바인딩, 화살표 함수, lexical this, 우선순위",
        },
        {
            property: "description",
            content:
                "this 바인딩의 4가지 규칙과 화살표 함수의 lexical this를 사례와 함께 정리합니다. 우선순위: new > 명시적 > 암시적 > 기본.",
        },
    ],
};

const codeRules = `
// 1) 기본 바인딩(default): 엄격 모드가 아니면 전역(window), 엄격 모드면 undefined
function f() { return this; }
console.log(f() === (function(){ return this; })()); // 브라우저 비엄격: window

// 2) 암시적 바인딩(implicit): obj.method()에서 base object가 this
const obj = {
  x: 1,
  m() { return this.x; }
};
console.log(obj.m()); // 1
const alias = obj.m;
console.log(alias()); // 기본 바인딩으로 떨어져 this 잃음(엄격: undefined)

// 3) 명시적 바인딩(explicit): call/apply/bind
function g(y) { return this.x + y; }
console.log(g.call({ x: 2 }, 3));     // 5
console.log(g.apply({ x: 3 }, [4]));  // 7
const bound = g.bind({ x: 10 });
console.log(bound(5)); // 15 (새 함수 반환, this 고정)

// 4) new 바인딩: 새 인스턴스가 this
function C(x) { this.x = x; }
const c = new C(7);
console.log(c.x); // 7

// 우선순위: new > 명시적(call/apply/bind) > 암시적(obj.) > 기본
function H() { console.log(this.tag); }
const b = H.bind({ tag: 'bound' });
const inst = new (b as any)(); // new가 bind의 this를 무시하고 새 인스턴스 바인딩

// 화살표 함수: lexical this(바인딩 불가), 생성자 불가
const outer = {
  tag: 'outer',
  init() {
    this.tag = 'outer*';
    const arr = [1];
    arr.forEach(() => {
      // 화살표는 상위 스코프의 this를 캡처
      console.log(this.tag); // 'outer*'
    });
  }
};
outer.init();
`;

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>this 바인딩 규칙과 화살표 함수의 lexical this</h1>
                <PostTag tags={head.meta![0].content!}></PostTag>
                <PostDate>2025-10-18</PostDate>
                <PostSeries title={"프론트엔드 면접 질문"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    this 바인딩의 4가지 규칙(기본/암시적/명시적/new)과 화살표 함수의
                    lexical this 차이를 사례로 설명하세요.
                </PostBlockquote>

                핵심 요약:
                <br />
                - 우선순위: <b>new</b> &gt; <b>명시적(call/apply/bind)</b> &gt; <b>암시적(obj.)</b> &gt; <b>기본</b>
                <br />
                - 화살표 함수는 <b>lexical this</b>를 캡처하며, call/apply/bind로 바꿀 수 없고
                생성자로도 사용할 수 없습니다.
                <br />
                <br />
                예제 코드:
                <PostCode code={codeRules} language="typescript" />
                <br />
                참고:
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this">
                    MDN: this
                </PostLink>
                <br />
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">
                    MDN: Arrow functions
                </PostLink>
            </PostBody>
        </>
    );
});


