import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

const PostBuyMeCoffee = component$(() => {
    useStylesScoped$(styles);
    return (
        <div class="post-buy-me-coffee">
            <a href="https://www.buymeacoffee.com/jerrynim" target="_blank">
                buy me a coffee
                <img
                    width="150"
                    height="42"
                    src="/static/buy-me-a-coffee.svg"
                    alt=""
                />
            </a>
        </div>
    );
});

export default PostBuyMeCoffee;
