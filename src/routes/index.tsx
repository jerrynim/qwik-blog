import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

export default component$(() => {
    useStyles$(styles);
    return <div>only for organic search</div>;
});
