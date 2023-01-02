import { component$, useStylesScoped$ } from "@builder.io/qwik";
import LogoIcon from "/static/logo.svg?raw";
import styles from "./index.css?inline";

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <a href={"https://github.com/jerrynim"} target={"_blank"}>
            jerrynim-Logo{LogoIcon}
        </a>
    );
});
