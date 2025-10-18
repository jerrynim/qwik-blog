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
        "프로토타입 체인, ES 클래스의 필드/메서드, #private, super 런타임 동작",
    meta: [
        {
            property: "keywords",
            content:
                "프로토타입 체인, ES 클래스, 프로토타입 메서드, 인스턴스 필드, private 필드, super, 프론트엔드 면접 질문",
        },
        {
            property: "description",
            content:
                "프로토타입 체인 동작과 ES 클래스의 필드/메서드 저장 위치, #private 필드 규칙, super의 생성자/메서드 런타임 차이를 예제로 설명합니다.",
        },
    ],
};

const protoChain = `
const arr = [];
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
console.log(arr.map === Array.prototype.map); // true

// 프로퍼티 탐색: 인스턴스 → 프로토타입 → ... → null
function has(obj, key) {
  while (obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return true;
    obj = Object.getPrototypeOf(obj);
  }
  return false;
}
`;

const classPlacement = `
class C {
  x = 1;                 // 인스턴스 own 필드
  m() { return this.x; } // 프로토타입 메서드(C.prototype.m)
  mm = () => this.x;     // 인스턴스 own 메서드(화살표/필드 메서드)
  static s = 2;          // 클래스(생성자) 자체의 정적 필드
  static sm() { return C.s; } // 정적 메서드
}

const c = new C();
console.log('own', Object.keys(c)); // ['x','mm']
console.log('proto has m', typeof C.prototype.m === 'function'); // true
console.log('static', C.s, C.sm()); // 2 2
`;

const privateField = `
class Base {
  #secret = 42;
  reveal() { return this.#secret; }
}
class Sub extends Base {
  leak() {
    // return this.#secret; // 오류: 서브클래스에서 부모 #필드 직접 접근 불가
    return this.reveal();   // OK: 부모 메서드를 통해 간접 접근
  }
}
`;

const superRuntime = `
class A {
  constructor(name) {
    this.name = name;
  }
  greet() { return 'A:' + this.name; }
  static who() { return 'A'; }
}

class B extends A {
  constructor(name) {
    // 파생 클래스 생성자에서는 this를 쓰기 전에 반드시 super() 필요
    super(name);
    this.role = 'B';
  }
  greet() {
    // 메서드에서의 super.greet(): 부모 프로토타입의 메서드를 찾되 this는 현재 인스턴스
    return super.greet() + ' (' + this.role + ')';
  }
  static who() {
    // static 컨텍스트에서 super는 부모 생성자(클래스)를 가리킴
    return super.who() + '→B';
  }
}
`;

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>프로토타입·클래스: 체인, 필드/메서드, #private, super</h1>
                <PostTag tags={head.meta![0].content!}></PostTag>
                <PostDate>2025-10-18</PostDate>
                <PostSeries title={"프론트엔드 면접 질문"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    프로토타입 체인 동작, ES 클래스의 필드/메서드(프로토타입 vs
                    인스턴스), private 필드, super 호출의 런타임 동작 차이를 설명해보세요.
                </PostBlockquote>

                프로퍼티 탐색은 “자신 → [[Prototype]] → … → null”로 진행됩니다.
                예를 들어 `[].map`은 `Array.prototype.map`에서 옵니다.
                <PostCode code={protoChain} language="typescript" />

                ES 클래스의 저장 위치 요약:
                <br />
                - 인스턴스 필드: `x = 1`은 각 인스턴스의 own 프로퍼티
                <br />
                - 프로토타입 메서드: `m(){}`는 `C.prototype.m`으로 공유
                <br />
                - 인스턴스(필드) 메서드: `mm = () =&gt; {}`는 바인딩 유지용, 인스턴스마다 생성
                <br />
                - static: `static s`, `static sm(){}`는 클래스(생성자) 객체에 저장
                <PostCode code={classPlacement} language="typescript" />

                #private 필드:
                <br />
                - 하드 프라이빗 슬롯으로 클래스 외부/서브클래스에서 직접 접근 불가
                <br />
                - 인스턴스에 존재하지만, 선언된 클래스 내부에서만 접근 가능
                <PostCode code={privateField} language="typescript" />

                super의 런타임 동작:
                <br />
                - 생성자: 파생 클래스는 `this` 사용 전 `super()` 필수(초기화)
                <br />
                - 인스턴스 메서드: `super.m()`은 부모 프로토타입에서 메서드를 찾고
                호출 시 `this`는 현재 인스턴스 유지
                <br />
                - static 메서드: `super`는 부모 “클래스(생성자)”를 가리킴
                <PostCode code={superRuntime} language="typescript" />

                참고:
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain">
                    MDN: Inheritance and the prototype chain
                </PostLink>
                <br />
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">
                    MDN: Classes
                </PostLink>
            </PostBody>
        </>
    );
});


