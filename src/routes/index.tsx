import { component$, useStyles$ } from "@builder.io/qwik";
import PageHeader from "../components/page-header";
import styles from "./index.css?inline";

export default component$(() => {
    useStyles$(styles);
    return (
        <div>
            <PageHeader />
            <h1>제리님 블로그</h1>
            only for organic search
        </div>
    );
});
