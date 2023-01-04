import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

const PostDate = component$(() => {
    useStylesScoped$(styles);
    return (
        <div class="post-date">
            <Slot></Slot>
        </div>
    );
});

export default PostDate;
