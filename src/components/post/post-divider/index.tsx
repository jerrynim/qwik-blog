import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "index.css?inline";

const PostDivider = component$(() => {
    useStylesScoped$(styles);

    return <hr />;
});

export default PostDivider;
