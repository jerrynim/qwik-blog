import { component$ } from "@builder.io/qwik";

interface PostLinkProps {
    href?: string;
}

export default component$(({ href }: PostLinkProps) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" class="post-link">
            <p class="hidden-text">{href}</p>
            <slot></slot>
        </a>
    );
});
