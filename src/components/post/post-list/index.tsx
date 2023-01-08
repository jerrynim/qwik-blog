import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

const PostList = component$(() => {
    useStylesScoped$(styles);

    // if (this.parentElement?.localName === "ol") {
    //     return html`<style>
    //             :host {
    //                 display: list-item !important;
    //             }
    //             slot::before {
    //                 content: none !important;
    //             }</style
    //         ><slot></slot>`;
    // }
    return <slot></slot>;
});

export default PostList;
