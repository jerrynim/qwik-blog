import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

const PostHead = component$(() => {
    useStyles$(styles);

    return (
        <div class="post-head">
            <Slot></Slot>
        </div>
    );
});
export default PostHead;
