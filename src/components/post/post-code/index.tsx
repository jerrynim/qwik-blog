import { component$, useSignal, useClientEffect$, $ } from "@builder.io/qwik";

export default component$(({ code, language, filename, whiteSpace }) => {
    const ref = useSignal<Element>();
    const buttonRef = useSignal<Element>();
    const buttonText = useSignal("copied!!");
    const _code = code
        .trim()
        .replaceAll("&backtick;", "`")
        .replaceAll("&dollar;", "$");

    const _handleMouseEnter = () => {
        buttonRef.value.style.display = "block";
    };
    const _handleMouseLeave = () => {
        buttonRef.value.button!.style.display = "none";
    };
    useClientEffect$(() => {
        ref.value.addEventListener("mouseenter", _handleMouseEnter);
        ref.value.addEventListener("mouseleave", _handleMouseLeave);
        return () => {
            ref.value.removeEventListener("mouseenter", _handleMouseEnter);
            ref.value.removeEventListener("mouseenter", _handleMouseLeave);
        };
    });

    const _copyCode = $(() => {
        const textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        textarea.value = code;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        setTimeout(() => {
            buttonText.value = "copy";
        }, 2000);
    });

    return (
        <div class="post-code">
            <link rel="stylesheet" href="/prism.css" />

            {filename && <p class="filename">{filename}</p>}
            <button type="button" id="copy-button" onClick$={_copyCode}>
                copy
            </button>
            <code class="language-${this.language}">${_html}</code>
        </div>
    );
});

// export class PostCode extends LitElement {
//     static styles = [
//         resetCss,

//     ];

//     protected render() {
//         const _html = unsafeHTML(
//             `${prism.highlight(
//                 this.code,
//                 (prism as any).languages[this.language],
//                 this.language,
//             )}`,
//         );

//         const buttonStyles = { top: this.filename ? "46px" : "16px" };
//         return html``;
//     }
// }
