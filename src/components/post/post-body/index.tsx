import { component$, useStyles$, Slot } from "@builder.io/qwik";
import PostBuyMeCoffee from "../post-buy-me-coffee";
import styles from "./index.css?inline";

const PostBody = component$(() => {
    useStyles$(styles);
    return (
        <div class="post-body">
            <Slot></Slot>
            <PostBuyMeCoffee></PostBuyMeCoffee>
        </div>
    );
});
export default PostBody;
