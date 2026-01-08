import {
    $,
    component$,
    Slot,
    useContext,
    useSignal,
    useStyles$,
    useVisibleTask$,
} from "@builder.io/qwik";
import { CopyIcon } from "../../svgs/copy-icon";
import { TocContext } from "../post-toc/context";
import styles from "./index.css?inline";

interface PostTitleProps {
    title?: string;
    subtitle?: string;
    tag?: "h2" | "h3" | "h4" | "h5" | "h6";
}

const PostTitle = component$(({ title, subtitle, tag }: PostTitleProps) => {
    useStyles$(styles);
    const elementRef = useSignal<Element>();
    const tocContext = useContext(TocContext, { optional: true });

    // Determine the level for TOC (compute outside of useVisibleTask$ for serialization)
    // Priority: explicit tag > subtitle > title
    const level =
        tag === "h3"
            ? 3
            : tag === "h4"
            ? 4
            : tag === "h5"
            ? 5
            : tag === "h6"
            ? 6
            : subtitle
            ? 2
            : title
            ? 1
            : 1;

    const _handleClick = $(() => {
        const textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        textarea.value = `${window.location.href}#${encodeURI(
            subtitle || title!,
        )}`;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        const toastUpEvent = new CustomEvent("toast-up", {
            composed: true,
            detail: { text: "클립보드에 복사되었습니다." },
        });
        window.dispatchEvent(toastUpEvent);
    });

    // Register with TOC context when component mounts
    // Use document-ready strategy to ensure all titles are registered on initial load
    useVisibleTask$(
        ({ cleanup }) => {
            const displayTitle = subtitle || title;
            if (
                tocContext &&
                "registerItem" in tocContext &&
                displayTitle &&
                elementRef.value
            ) {
                const itemId = title || subtitle || "";
                tocContext.registerItem({
                    id: itemId,
                    title: displayTitle,
                    level: level,
                    element: elementRef,
                });

                cleanup(() => {
                    tocContext.unregisterItem(itemId);
                });
            }
        },
        { strategy: "document-ready" },
    );

    const Tag = tag ? tag : title ? "h1" : subtitle ? "h2" : "h2";

    return (
        <Tag
            ref={elementRef}
            class={!tag && subtitle && "subtitle"}
            id={title}
            onClick$={_handleClick}
        >
            {subtitle || title || <Slot />}

            <CopyIcon class="copy-icon" />
        </Tag>
    );
});

export default PostTitle;
