import {
    component$,
    useSignal,
    $,
    useStyles$,
    useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./index.css?inline";
import prismSyles from "./prism.css?inline";
import Prism from "./prism";

interface PostCodeProps {
    code: string;
    language?: string;
    filename?: string;
}

const PostCode = component$(
    ({ code, language = "typescript", filename }: PostCodeProps) => {
        useStylesScoped$(styles);
        useStyles$(prismSyles);
        const buttonRef = useSignal<HTMLButtonElement>();
        const buttonText = useSignal("copied!!");
        const _code = code
            .trim()
            .replaceAll("&backtick;", "`")
            .replaceAll("&dollar;", "$");

        const _handleMouseEnter = $(() => {
            buttonRef.value!.style.display = "block";
        });
        const _handleMouseLeave = $(() => {
            buttonRef.value!.style.display = "none";
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
            <div
                class="post-code"
                onMouseEnter$={_handleMouseEnter}
                onMouseLeave$={_handleMouseLeave}
            >
                {filename && <p class="filename">{filename}</p>}
                <button
                    type="button"
                    id="copy-button"
                    style={`top: ${filename ? "46px" : "16px"};`}
                    onClick$={_copyCode}
                    ref={buttonRef}
                >
                    copy
                </button>
                <code
                    class={`language-${language}`}
                    dangerouslySetInnerHTML={Prism.highlight(
                        _code,
                        Prism.languages[language] as any,
                        language,
                    )}
                />
            </div>
        );
    },
);

export default PostCode;
