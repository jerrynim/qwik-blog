import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

const PostBlockquote = component$(() => {
    useStylesScoped$(styles);

    return (
        <blockquote class="PostBlockquote">
            <Slot />
        </blockquote>
    );
});
export default PostBlockquote;
