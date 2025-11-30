import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

const PostBuyMeCoffee = component$(() => {
    useStylesScoped$(styles);
    return (
        <div class="post-buy-me-coffee">
            <a
                href="https://www.buymeacoffee.com/jerrynim"
                target="_blank"
                rel="noreferrer"
            >
                buy me a coffee
                <img
                    width="150"
                    height="42"
                    src="/qwik-blog/static/buy-me-a-coffee.svg"
                    alt="buy-me-a-coffee"
                />
            </a>
        </div>
    );
});

export default PostBuyMeCoffee;
