import { component$, useStyles$ } from "@builder.io/qwik";
import { PostSeries } from "~/components/post";
import PageHeader from "../components/page-header";
import styles from "./index.css?inline";

export default component$(() => {
    useStyles$(styles);
    return (
        <>
            <PageHeader />
            <div class="w-680 m-auto">
                <h1>제리님 블로그</h1>
                <PostSeries title={"React Quiz"} />
                <PostSeries title={"Next.js Quiz"} />
                <PostSeries title={"블로그"} />
                <PostSeries title={"Lit tutorial"} />
                <PostSeries title={"웹 개발 Quiz"} />
            </div>
        </>
    );
});
