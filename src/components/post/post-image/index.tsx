import { component$, Numberish, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";
interface PostImageProps {
    src: string;
    width?: string;
    alt?: string;
}
const PostImage = component$(({ width, src, alt }: PostImageProps) => {
    useStylesScoped$(styles);

    const cloudinarySrc = src
        ?.replace("/upload/", `/upload/w_${width || 680}/`)
        ?.replace(".jpg", ".webp");
    return (
        <div class="post-image">
            <a href={cloudinarySrc} target="_blank" rel="noreferrer">
                <img
                    src={cloudinarySrc}
                    alt={alt}
                    width={`${width || 680}` as Numberish}
                />
            </a>
            <span>[{alt}]</span>
        </div>
    );
});

export default PostImage;
