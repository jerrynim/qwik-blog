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
        "프로퍼티 디스크립터: writable/configurable/enumerable, 접근자 vs 데이터, defineProperty와 순회·직렬화",
    meta: [
        {
            property: "keywords",
            content:
                "property descriptor, writable, configurable, enumerable, accessor, data property, Object.defineProperty, for...in, Object.keys, Reflect.ownKeys, JSON.stringify, 웹 개발",
        },
        {
            property: "description",
            content:
                "writable/configurable/enumerable의 의미, 접근자 vs 데이터 프로퍼티 차이, Object.defineProperty가 순회(for...in/Object.keys/Reflect.ownKeys)와 직렬화(JSON.stringify)에 주는 영향을 예제로 정리합니다.",
        },
    ],
};

const dataVsAccessor = `
// 데이터 프로퍼티와 접근자 프로퍼티의 차이
const obj = {};

// 데이터 프로퍼티: value/writable/enumerable/configurable
Object.defineProperty(obj, 'x', {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true,
});

// 접근자 프로퍼티: get/set/enumerable/configurable (value/writable 없음)
let _y = 10;
Object.defineProperty(obj, 'y', {
  get() { return _y; },
  set(v) { _y = v; },
  enumerable: true,
  configurable: true,
});

console.log(obj.x); // 1
obj.y = 20;
console.log(obj.y); // 20
`;

const defaultsAndConfigurable = `
// defineProperty의 기본값은 모두 false(또는 value: undefined)
const o = {};
Object.defineProperty(o, 'hidden', { value: 123 });
// => { value: 123, writable: false, enumerable: false, configurable: false }

// configurable: false가 되면 삭제 불가, 디스크립터 변경 제한, 타입 전환 금지
console.log(Object.getOwnPropertyDescriptor(o, 'hidden'));
console.log(delete o.hidden); // false (strict 모드면 TypeError)
`;

const iterationEffects = `
// 순회에 미치는 영향: enumerable이 핵심
const a = {};
Object.defineProperty(a, 'e', { value: 1, enumerable: true });
Object.defineProperty(a, 'n', { value: 2, enumerable: false });
const sym = Symbol('s');
Object.defineProperty(a, sym, { value: 3, enumerable: true });

// for...in: 자신 + 프로토타입의 '열거 가능한' 문자열 키
for (const k in a) console.log('for...in', k); // 'e'만 출력

// Object.keys: 자신의 '열거 가능한' 문자열 키
console.log(Object.keys(a)); // ['e']

// Reflect.ownKeys: 자신의 모든 키(열거 가능 무관, 문자열 + 심벌)
console.log(Reflect.ownKeys(a)); // ['e', 'n', Symbol(s)]
`;

const serializationEffects = `
// 직렬화(JSON.stringify): 자신의 '열거 가능한 문자열 키'만 포함
const b = {};
Object.defineProperty(b, 'v', { value: 1, enumerable: true });
Object.defineProperty(b, 'hidden', { value: 2, enumerable: false });
Object.defineProperty(b, 'f', { value: () => {}, enumerable: true });
Object.defineProperty(b, 'u', { value: undefined, enumerable: true });
const S = Symbol('s');
Object.defineProperty(b, S, { value: 3, enumerable: true });

// 게터는 직렬화 중 호출될 수 있음
Object.defineProperty(b, 'g', {
  get() { return 42; },
  enumerable: true,
});

console.log(JSON.stringify(b));
// 결과: {"v":1,"g":42}
// 이유:
// - hidden: enumerable=false → 제외
// - f(함수), u(undefined): 객체의 프로퍼티 값이면 제외
// - 심벌 키: 제외
`;

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>
                    프로퍼티 디스크립터: writable/configurable/enumerable, 접근자 vs 데이터,
                    defineProperty와 순회·직렬화
                </h1>
                <PostTag tags={head.meta![0].content!}></PostTag>
                <PostDate>2025-10-18</PostDate>
                <PostSeries title={"웹 개발"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    프로퍼티 디스크립터의 writable/configurable/enumerable 의미, 접근자 vs 데이터
                    프로퍼티 차이, Object.defineProperty가 순회(for...in/Object.keys/Reflect.ownKeys)
                    와 직렬화(JSON.stringify)에 미치는 영향을 설명하세요.
                </PostBlockquote>

                개념 요약:
                <br />
                - writable: 값 변경 가능 여부(데이터 프로퍼티에만 존재)
                <br />
                - configurable: 삭제 가능 및 디스크립터 변경 가능 여부
                <br />
                - enumerable: 열거 대상 여부(순회/직렬화 포함)
                <br />
                - 데이터 프로퍼티: value, writable, enumerable, configurable
                <br />
                - 접근자 프로퍼티: get, set, enumerable, configurable

                <PostCode code={dataVsAccessor} language="typescript" />

                기본값과 configurable의 제약:
                <PostCode code={defaultsAndConfigurable} language="typescript" />

                순회 API에 대한 영향:
                <PostCode code={iterationEffects} language="typescript" />

                직렬화(JSON.stringify)에 대한 영향:
                <PostCode code={serializationEffects} language="typescript" />

                참고:
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">
                    MDN: Object.defineProperty
                </PostLink>
                <br />
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">
                    MDN: Enumerability and ownership
                </PostLink>
                <br />
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify">
                    MDN: JSON.stringify
                </PostLink>
            </PostBody>
        </>
    );
});


