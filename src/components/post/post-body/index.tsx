import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import PostBuyMeCoffee from "../post-buy-me-coffee";
import PostTOC from "../post-toc";
import styles from "./index.css?inline";

const PostBody = component$(
    ({ showBuyMeCoffee = true }: { showBuyMeCoffee?: boolean }) => {
        useStyles$(styles);
        return (
            <PostTOC>
                <div class="post-body">
                    <Slot></Slot>
                    {showBuyMeCoffee && <PostBuyMeCoffee></PostBuyMeCoffee>}
                </div>
            </PostTOC>
        );
    },
);
export default PostBody;
