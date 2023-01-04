import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

const PostHead = component$(() => {
    useStylesScoped$(styles);

    return <Slot></Slot>;
});
export default PostHead;
