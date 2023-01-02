import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";
import CopyIcon from "/static/copy.svg?raw";

interface PostTitleProps {
    title?: string;
    subtitle?: string;
}

export default component$(({ title, subtitle }: PostTitleProps) => {
    useStylesScoped$(styles);

    const _handleClick = () => {
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
    };

    return (
        <h2 class="subtitle" id={title}>
            {subtitle || title}
            {CopyIcon}
        </h2>
    );
});
