import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostImage,
    PostLink,
    PostTag,
    PostTitle,
    PostSeries,
    PostBlockquote,
} from "@components/post";
export const head: DocumentHead = {
    title: "Lit 튜토리얼 (1/6)",
    meta: [
        {
            property: "keyword",
            content: "lit lit-html lit-elemnt tutorial start",
        },
        {
            property: "description",
            content: "(번역)A deep dive into JavaScript closures",
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage></PostHeadImage>
            <PostHead>
                <h1>(번역)A deep dive into JavaScript closures</h1>
                <PostTag tags="javascript closure"></PostTag>
                <PostDate>2023-02-04</PostDate>
            </PostHead>

            <PostBody>
                <PostBlockquote>
                    원본:
                    <PostLink href="https://birdeatsbug.com/blog/a-deep-dive-into-javascript-closures">
                        a-deep-dive-into-javascript-closures
                    </PostLink>
                </PostBlockquote>
                <PostTitle subtitle="클로저는 무엇입니까?"></PostTitle>
                클로저는 스코프 밖에서 다른 함수(외부 함수)에 접근할 수 있는
                함수(내부 함수)입니다.다른 함수 내부의 함수를 호출하여 만들어진
                함수 조합입니다.클로저는 노드의 싱글 스레드, 이벤트 구동 및
                비블로킹 아키텍처에서 널리 사용됩니다.
                <br />
                다음 예제를 사용하여 이 기능의 구조를 설명하겠습니다.
                <PostCode code={code1} />
                위의 예에서 greeting()은 message라는 이름의 로컬 변수와 내부
                greeting()이라는 이름의 내부 함수를 만듭니다.이 함수는
                greeting() 함수의 범위 내에서만 사용할 수 있습니다.단,
                displayMessage()는 부모 함수 greeting()으로 선언된 변수
                message에 액세스할 수 있습니다.
                <br />
                실시간으로 한번 해보겠습니다.브라우저의 개발 도구로 이동하여
                위의 코드 행을 실행합니다."Hello World"가 alert로 전달되는 것을
                알 수 있습니까?그 이유는 억지스럽지 않다.처음에 언급했듯이
                클로저는 동일한 렉시컬 환경 내에서 서로 액세스할 수 있는 함수의
                조합입니다.이 정의에 따라 newMessage는 greeting() 함수가
                실행되었을 때 생성되는 함수 displayMessage의 인스턴스를
                참조합니다.
                <br />
                주의: displayMessage 인스턴스는 변수 message가 존재하는 렉시컬
                환경에 대한 참조를 유지합니다.
                <br />
                따라서 newMessage를 호출하면 변수 메시지는 계속 사용할 수 있으며
                "Hello World"는 경보로 전달됩니다.
                <PostTitle subtitle="코드에서 클로저 사용"></PostTitle>
                클로저의 기본 특징 중 하나는 내부 함수가 외부 함수가 실행되거나
                반환된 후에도 외부 함수의 변수에 여전히 액세스하고 사용할 수
                있다는 것입니다.
                <br />
                JavaScript에서는 함수가 생성되었을 때와 동일한 스코프 체인을
                사용하여 실행됩니다.즉, 외부 함수가 반환 된 후에도 내부 함수는
                외부 함수의 변수에 액세스할 수 있습니다.
                <br />
                다음 예에서는 더 많은 빛을 발합니다.
                <PostCode code={code2}></PostCode>
                또한 클로저를 사용하여 다른 함수 m(외부 함수) 내에서 함수 n(내부
                함수)을 정의하고 n을 노출하는 방법도 알아봅니다.다음에 간단한
                예를 제시하겠습니다.
                <PostCode code={code3}></PostCode>
                단일 인수 m을 사용하고 새로운 함수 n을 반환하는 multiply(m)
                함수를 정의했습니다.반환되는 함수는 단일 인수 n을 사용하고 m *
                n을 반환합니다.multiply는 두 개의 새로운 클로저(함수)를 작성하기
                위해 사용됩니다.multiply9와 multiply5는 동일한 함수 본문 정의를
                공유하지만 서로 다른 렉시컬 스코프를 포함합니다.예를 들어,
                multiply9의 렉시컬 스코프에서는 m은 9이고, multiply5에서는 m은
                5이다.
                <PostTitle subtitle="왜 클로저가 필요한가요?"></PostTitle>
                클로저는 특정 기능의 범위 내에 있는 것과 없는 것을 제어할 수
                있기 때문에 필수적입니다.또한 동일한 렉시컬 스코프에서 형제
                함수를 공유하는 변수도 제어합니다.클로저는 또한 코드를
                단순화하고 프로그래머로서의 삶을 더 쉽게 만들 수 있습니다.
                <br />
                예를 들어 클로저를 사용하여 데이터를 별도의 범위에 저장 및
                숨기고 적합하다고 판단될 때만 공유할 수 있습니다(데이터
                캡슐화).그러나 데이터 캡슐화에 클로저를 사용하는 경우, 클로저
                변수는 외부 함수의 범위에만 포함됩니다.즉, 객체에 정의된
                메서드를 통해서만 외부 환경에서 데이터에 액세스할 수 있습니다.
                <PostCode code={code4}></PostCode>
                위의 예에서 <code>side</code>는 <code>createSquare</code> 함수의
                범위 내에 있으며 createSquare 함수의 범위 내에만
                표시됩니다.변수/매개변수는 함수 내부에서만 볼 수 있기
                때문입니다.
                <br />이 함수는 <code>createSquare</code> 함수 내에서 정의되므로
                <code>area</code> 함수 내부에서도 액세스할 수 있습니다.이렇게
                하면 area가 노출되지만 Diameter은 숨겨집니다. 즉, 원이 면 안에
                side를 캡슐화합니다.
                <br />
                이는 실제 사용 사례와 실제 사용 사례에서 볼 수 있는 일반적인
                사용 사례이며, 클로저 여부도 알 수 없습니다.
                <br />
                또한 클로저는 데이터를 해당 데이터에 대해 작동하는 함수와
                연결하는 데에도 유용합니다.이것은 오브젝트가 같은 오브젝트의
                속성을 하나 이상의 메서드와 효과적으로 관련짓는 오브젝트 지향
                프로그래밍과 유사합니다.
                <PostTitle title="스코프 체인 이해"></PostTitle>
                JavaScript에서는 모든 클로저에는 3개의 스코프가 있습니다.
                <ul>
                    <li>Global</li>
                    <li>Function scope 범위/local scope</li>
                    <li>Block</li>
                </ul>
                이제 아래의 각 항목을 살펴보겠습니다.
                <PostTitle subtitle="Global Scope"></PostTitle>
                정의된 변수가 함수 또는 한 쌍의 중괄호 {} 안에 없는 경우, 이러한
                변수는 Global 스코프에 존재하므로 프로그램 내 어디에서나
                액세스할 수 있다고 할 수 있습니다.예를 들어 다음과 같습니다.
                <PostCode code={code5}></PostCode>
                <PostTitle subtitle="기능 범위/로컬 범위"></PostTitle>
                함수 내부에서 변수가 선언되면 해당 함수 내에서만 변수에 액세스할
                수 있습니다. 즉, 함수 범위 밖에서는 변수에 액세스할 수
                없습니다.예를 들어 다음과 같습니다.
                <PostCode code={code6}></PostCode>
                <PostTitle subtitle="블록 범위"></PostTitle>
                ECMAScript 2015(또는 ES6) 키워드, let 및 const에서는 변수는 가장
                가까운 중괄호 쌍에만 범위를 지정할 수 있습니다.변수와는 달리
                중괄호 밖에서는 액세스할 수 없습니다.예를 들어 다음과 같습니다.
                <PostCode code={code7}></PostCode>
                <PostTitle subtitle="클로저와 private method 구현"></PostTitle>
                JavaScript의 private 메서드/함수는 해당 스코프 내에서만 액세스할
                수 있습니다.또한 이러한 변수를 통해 범위 내에서 정의된 함수가
                조작 방법을 완전히 제어할 수 있습니다.
                <br />
                JavaScript는 개체와 관련된 변수 및 메서드를 선언에서 public 또는
                private 로 지정할 수 있는 고급 기능을 제공하지 않습니다.다만,
                이하와 같이, 실장할 수 있는 방법이 있습니다.
                <PostCode code={code8}></PostCode>
                출처 : MDN
                <br />
                위의 코드 블록에는 <code>counter.increment</code>,
                <code>counter.decrement</code> 및<code>counter.value</code>의
                3가지 함수에 의해 공유되는 단일 렉시컬 환경이 있습니다.렉시컬
                환경에는 <code>privateCounter</code>라는 변수와
                <code>changeBy</code>라는 함수의 두 가지 private 항목이
                있습니다.익명 함수 counter 외부에서 이러한 private 멤버에
                액세스할 수 없습니다.대신 익명 래퍼에서 반환된 세 가지 공용
                함수를 사용하여 액세스할 수 있습니다.세 가지 공용 함수는 동일한
                렉시컬 환경을 공유하는 클로저로, 각각 범위 지정을 통해
                <code>privateCounter</code> 변수 및 <code>changeBy</code> 함수에
                액세스할 수 있습니다.
                <PostTitle title="요약"></PostTitle>
                <ul>
                    <li>
                        함수 내부에 다른 함수가 있을 때마다 클로저가 있습니다.
                    </li>
                    <li>
                        클로저(다른 함수에 의해 반환되는 내부 함수 또는 함수)는
                        생성 시 렉시컬 환경을 참조한다.
                    </li>
                    <li>
                        클로저는 private 메소드 또는 private 변수와 상관없이
                        private 데이터를 생성하는 데 도움이 됩니다.
                    </li>
                    <li>
                        모든 클로저에는 글로벌, 로컬 및 블록의 세 가지 스코프가
                        있습니다.
                    </li>
                </ul>
                <PostTitle
                    subtitle="Further reading
"
                ></PostTitle>
                <PostLink
                    href="You don’t know JS: Scope and Closures by Oreilly
"
                >
                    You don’t know JS: Scope and Closures by Oreilly
                </PostLink>
            </PostBody>
        </>
    );
});

export const code1 = `
function greeting(){
  let message = "Hello World";
  function displayMessage(){
      alert(message);
  }
  return displayMessage;
}
let newMessage = greeting();
newMessage();`;

export const code2 = `
function firstName (firstName) {
  var nameIntro = "My name is ";
  // this is an inner function which as we will get to see, has access to the outer function's variables

//this function lastName is a closure because it is a function inside another  function)
   function lastName (lastName) {
        return nameIntro + firstName + " " + lastName;
    }
    return lastName;
}

var fullName = firstName("Bill");
//The firstName outer function has returned which we passed to this var fullName

fullName ("Johnson");  // My name is Bill Johnson

// The closure (lastName) is called after the outer function has returned above
// Yet, the closure still has access to the outer function's //variables and parameter`;

export const code3 = `
function multiply (m) {
  return function (n) {
    return m * n
  };
}

var multiply9 = multiply(9)
var multiply5 = multiply(5)

console.log (multiply9(8)); // 72
console.log (multiply5(12)); // 60`;

export const code4 = `
function createSquare(side) {
  return {
      area: function() {
          return side * side;
      }
  }
};

let square = createSquare(7);
console.log("Area is " + square.area());
console.log("Diameter is " + square.side); // THIS WILL NOT RUN`;

export const code5 = `var greeting = 'Welcome Home';
//greeting is a global variable that we can access from anywhere

function greet() {
  console.log(greeting);
}
greet(); //We get "Welcome Home" printed on the console because the greet function can access the global variable`;

export const code6 = `function greet() {
  var greeting = 'Welcome Home';
  console.log(greeting);
}
// Prints 'Welcome Home'
greet(); //try calling the function outside of its scope==>Uncaught ReferenceError: greeting is not defined
console.log(greeting);`;

export const code7 = `{
  let greeting = 'Welcome Home';
  var course = 'JavaScript';
  console.log(greeting); // Prints 'Welcome Home'
}
// Prints 'JavaScript'
console.log(course);

// Uncaught ReferenceError: greeting is not defined
console.log(greeting);`;

export const code8 = `
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.`;
