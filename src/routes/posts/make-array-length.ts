import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("make-array-length")
@withPost
export class MakeArrayLength extends LitElement {
    protected render() {
        return html`<post-head-image src=""></post-head-image>
            <PostHead>
                <h1>간단한 원하는 길이의 배열 만들기</h1>
                <PostTag>simple make array length array from</PostTag>
                <PostDate>2022-04-12</PostDate>
            </PostHead>
            <PostBody>
                간단하게 원하는 길이의 배열을 만드는 방법:<br />
                Array.from 메서드를 이용합니다.
                <PostCode code="{code1}" language="typescript"></PostCode>

                <PostCode
                    code="{code2}"
                    language="typescript"
                    filename="결과"
                ></PostCode>

                끝
            </PostBody>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "make-array-length": MakeArrayLength;
    }
}

const code1 = "const array = Array.from({ length: 20 }, (_, index) => index);";

const code2 = `[
  0,  1,  2,  3,  4,  5,  6,
  7,  8,  9, 10, 11, 12, 13,
 14, 15, 16, 17, 18, 19
]`;
