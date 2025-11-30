import { $, component$, Slot, useStyles$ } from "@builder.io/qwik";
import { CopyIcon } from "../../svgs/copy-icon";
import styles from "./index.css?inline";

interface PostTitleProps {
    title?: string;
    subtitle?: string;
}

const PostTitle = component$(({ title, subtitle }: PostTitleProps) => {
    useStyles$(styles);

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

    console.log(subtitle,"subtitle",title,"title");
    return (
        <h2 class={subtitle && "subtitle"} id={title} onClick$={_handleClick}>
            {subtitle || title ||  <Slot/>}
           
            <CopyIcon class="copy-icon" />
        </h2>
    );
});

export default PostTitle;
