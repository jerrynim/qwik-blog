import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("async-await")
@withPost
export class AsyncAwait extends LitElement {
    protected render() {
        return html`<post-head-image src=""></post-head-image>
            <PostHead>
                <h1>async await</h1>
                <PostTag>javascript async await promise</PostTag>
                <PostDate>2021-12-14</PostDate>
            </PostHead>
            <PostBody
                >설명에 앞서 이 글은 asnyc / await 사용에 익숙한 사람을
                대상으로합니다.
                <br />
                <post-definition>yield</post-definition>
                는 제네레이터 함수를 일시정지 시킵니다.
            </PostBody>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "async-await": AsyncAwait;
    }
}
