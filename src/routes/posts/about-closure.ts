import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("about-closure")
@withPost
export class Closure extends LitElement {
    protected render() {
        return html`<post-head-image
                src="https://res.cloudinary.com/dij9kacx9/image/upload/v1639296340/lit-blog/closure_fjqvyd.jpg"
            ></post-head-image>
            <PostHead>
                <h1>클로저</h1>
                <PostTag>자바스크립트 클로저 closure</PostTag>
                <PostDate>2021-12-08</PostDate>
            </PostHead>
            <PostBody>
                <code>클로저</code>
                란 내부함수가 외부함수의 지역변수에 접근 할 수 있고, 외부함수는
                외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지
                않는 특성을 의미한다.

                <br />
                출처:
                <PostLink href="https://opentutorials.org/course/743/6544"
                    >생활코딩</PostLink
                ><br /><br />
                <PostLink
                    href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures"
                    >MDN 에서</PostLink
                >
                <code
                    >클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다.</code
                >

                라고 설명한다.<br />
                Closures are inner functions that have access to the outer
                function’s variables and parameters. Even after the outer
                function’s execution is finished, the inner functions have
                access to the variables in the outer function.
                <post-blockquote>
                    클로저는 외부함수가 실행이 완료된 후에도 외부 함수의 변수와
                    파라미터에 접근할수 있는 내부함수이다.
                </post-blockquote>
                자세한 설명은 위의 출처를 참고하시길 바랍니다.
            </PostBody>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "about-closur": Closure;
    }
}