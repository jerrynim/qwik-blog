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
        "불변성과 복사: 얕은/깊은 복사, structuredClone 한계, 순환·성능, 최적화",
    meta: [
        {
            property: "keywords",
            content:
                "불변성, 얕은 복사, 깊은 복사, structuredClone, 순환 참조, 성능, 메모이제이션, 변경 감지, 웹 개발",
        },
        {
            property: "description",
            content:
                "얕은/깊은 복사의 차이, structuredClone의 지원/제약, 순환 참조와 성능 이슈, 불변성이 메모이제이션·변경 감지 최적화에 주는 이점을 정리합니다.",
        },
    ],
};

const shallowVsDeep = `
const a = { x: { y: 1 }, arr: [1, 2] };

// 얕은 복사: 최상위만 새 객체, 중첩 객체는 참조 공유
const s1 = { ...a };
const s2 = Object.assign({}, a);
const arr = [{ id: 1 }, { id: 2 }];
const arrShallow = arr.slice();

s1.x.y = 2;
arrShallow[0].id = 99;
console.log(a.x.y);        // 2 (참조 공유)
console.log(arr[0].id);    // 99 (참조 공유)

// 깊은 복사: 모든 중첩 구조를 재귀적으로 새로 만듦
const deep = structuredClone(a);
deep.x.y = 3;
console.log(a.x.y);        // 2 (영향 없음)
`;

const structuredCloneNotes = `
// 많은 내장 타입을 깊은 복사 + 순환 참조 처리
const m = new Map([["a", 1]]);
const cloned = structuredClone({
  date: new Date(),
  rx: /foo/g,
  map: m,
  bin: new Uint8Array([1,2,3])
});
console.log(cloned.map instanceof Map); // true

// 복제 불가 예시: 함수, DOM 노드, WeakMap/WeakSet 등 → DataCloneError
try {
  structuredClone({ fn: () => {} });
} catch (e) {
  console.log(e.name); // 'DataCloneError'
}

// 접근자(getter/setter), 프로퍼티 디스크립터, 프로토타입 체인 등은 보존되지 않음에 유의
`;

const cyclesAndManualDeepClone = `
// 순환 참조
const obj = { name: 'self' };
obj.self = obj;
const ok = structuredClone(obj); // OK

// 수제 깊은 복사 시에는 방문 표식을 위해 WeakMap이 필요
function deepClone(value, visited = new WeakMap()) {
  if (typeof value !== 'object' || value === null) return value;
  if (visited.has(value)) return visited.get(value);

  const out = Array.isArray(value) ? [] : {};
  visited.set(value, out);

  for (const [k, v] of Object.entries(value)) {
    out[k] = deepClone(v, visited);
  }
  return out;
}

// 주의: 위 구현은 Map/Set/Date/RegExp 등 특수 객체는 다루지 않음
`;

const immutabilityAndMemo = `
// 불변성: 변경 경로만 새 객체를 만들고 나머지는 기존 참조 재사용(구조적 공유)
const state = {
  user: { name: 'A', age: 1 },
  todos: [{ id: 1, done: false }]
};

const next = {
  ...state,
  user: { ...state.user, age: 2 } // 이 경로만 새 참조
};

// 얕은 비교 기반 변경 감지(예: React.memo, Redux shallowEqual)
function shallowEqual(a, b) {
  if (Object.is(a, b)) return true;
  if (typeof a !== 'object' || typeof b !== 'object' || !a || !b) return false;
  const ka = Object.keys(a);
  const kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  for (const k of ka) {
    if (!Object.is(a[k], b[k])) return false;
  }
  return true;
}

console.log(shallowEqual(state, next)); // false (user 참조 변화)
console.log(state.todos === next.todos); // true (변경 없음 경로는 재사용)
`;

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>불변성과 복사: 얕은/깊은 복사, structuredClone, 순환·성능, 최적화</h1>
                <PostTag tags={head.meta![0].content!}></PostTag>
                <PostDate>2025-10-18</PostDate>
                <PostSeries title={"웹 개발"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    불변성과 복사: 얕은/깊은 복사 차이, structuredClone의 한계, 순환 참조와
                    성능 이슈, 불변성 유지가 최적화(메모이제이션·변경 감지)에 주는 이점은
                    무엇인가요?
                </PostBlockquote>

                얕은 복사는 최상위 레벨만 새로 만들고 중첩 객체 참조를 공유합니다. 깊은
                복사는 중첩 구조까지 재귀적으로 새로 만들어 참조 공유가 없습니다.
                <PostCode code={shallowVsDeep} language="typescript" />

                structuredClone은 많은 내장 타입(Date/RegExp/Map/Set/TypedArray 등)을 깊게
                복사하고 순환 참조도 안전하게 처리합니다. 다만, 함수·DOM 노드·WeakMap/WeakSet
                등은 복제할 수 없어 DataCloneError가 발생하며, 접근자나 프로퍼티 디스크립터,
                프로토타입 같은 메타 정보는 보존하지 않습니다. 큰 그래프 복사는 시간/메모리
                비용이 크다는 점도 유의해야 합니다.
                <PostCode code={structuredCloneNotes} language="typescript" />

                순환 참조는 JSON.stringify가 실패하지만 structuredClone은 처리합니다. 수제
                깊은 복사를 구현할 때는 WeakMap으로 방문한 객체를 추적해야 합니다.
                <PostCode code={cyclesAndManualDeepClone} language="typescript" />

                불변성은 기존 객체를 직접 수정하지 않고, 변경이 있는 경로에 대해서만 새
                객체(새 참조)를 만들어 리턴하는 전략입니다(구조적 공유). 이렇게 하면 얕은
                비교(Object.is/===)만으로도 변경 여부를 정확하고 빠르게 판단할 수 있어,
                React.memo, useMemo/useCallback 의존성 비교, Redux의 shallowEqual 등에서 큰
                최적화 효과를 얻습니다.
                <PostCode code={immutabilityAndMemo} language="typescript" />

                참고:
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/API/structuredClone">
                    MDN: structuredClone
                </PostLink>
                <br />
                <PostLink href="https://redux.js.org/usage/structuring-reducers/immutable-update-patterns">
                    Redux: Immutable update patterns
                </PostLink>
            </PostBody>
        </>
    );
});


