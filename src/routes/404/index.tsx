import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

export default component$(() => {
    useStylesScoped$(styles);
    return (
        <div>
            <img src="/static/404.gif" />
        </div>
    );
});
