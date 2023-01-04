import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("promise-synchronize")
@withPost
export class PromiseSynchronize extends LitElement {
    protected render() {
        return html`<post-head-image
                src="https://res.cloudinary.com/dij9kacx9/image/upload/v1649685641/lit-blog/inarow_ycwyg4.jpg"
            ></post-head-image>
            <PostHead>
                <h1>Promise 순차실행하기</h1>
                <PostTag>javascript promise synchronize 순차실행</PostTag>
                <PostDate> 2022-04-12 </PostDate>
            </PostHead>
            <PostBody
                >준비물로 promise가 담긴 배열을 만들어봅시다.<br />
                간단한 wait 함수를 만들도록 하겠습니다.
                <PostCode code="{code1}" language="typescript"></PostCode>
                wait 함수를 이용하여 비동기 함수를 만들고 익숙한 Promise.then
                함수를 이용하여 순차적으로 실행할 수 있습니다.
                <PostCode code="{code2}" language="typescript"></PostCode>
                결과
                <PostCode code="{code3}" language="typescript"></PostCode>

                순차적으로 실행 할 함수가 많아질 수록 then 메소드를 사용하는게
                귀찮아지고, 보기 힘들어집니다.<br />
                reduce함수를 이용하여 해당작업은 간편하게 할 수 있습니다.
                <PostCode code="{code4}" language="typescript"></PostCode>
                출처 :
                <PostLink
                    href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Using_promises#composition"
                    >developer.mozilla.org</PostLink
                >

                <PostTitle>async / await</PostTitle>
                async/ await 를 이용하여 더 간단하게 만들 수 있습니다.
                <PostCode code="{code5}" language="typescript"></PostCode>

                동일하게 for of 문 혹은 reduce를 이용하여 긴 배열의 비동기
                함수들도 실행할 수 있습니다.
                <PostCode
                    code="{code6}"
                    language="typescript"
                    filename="for of 사용"
                ></PostCode>

                <PostCode
                    code="{code7}"
                    language="typescript"
                    filename="recude 사용"
                ></PostCode>
            </PostBody>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "promise-synchronize": PromiseSynchronize;
    }
}

const code1 = `const wait = (time) =>
new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, time);
});`;

const code2 = `const func1 = async () => {
    await wait(1000);
    console.log("1 done");
};

const func2 = async () => {
    await wait(1000);
    console.log("2 done");
};

func1().then(func2)`;

const code3 = `1 done
2 done`;

const code4 = `[func1, func2].reduce((p, f) => p.then(f), Promise.resolve());
`;

const code5 = `const run = async () => {
    await func1();
    await func2();
};
run();`;

const code6 = `const run = async () => {
    for (const func of promises) {
        await func();
    }
};
run();`;

const code7 = `promises.reduce(async (prev, current) => {
    await prev;
    return current();
}, Promise.resolve());`;