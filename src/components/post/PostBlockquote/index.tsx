import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <blockquote class="post-blockquote">
            <Slot />
        </blockquote>
    );
});
