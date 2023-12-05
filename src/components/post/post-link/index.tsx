import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

interface PostLinkProps {
    href?: string;
}

const PostLink = component$(({ href }: PostLinkProps) => {
    useStylesScoped$(styles);
    return (
        <a href={href} target="_blank" rel="noreferrer" class="post-link">
            <p class="hidden-text">{href}</p>
            <Slot></Slot>
        </a>
    );
});
export default PostLink;
