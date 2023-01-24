import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";
interface PostImageProps {
    src: string;
    alt?: string;
}
const PostImage = component$(({ src, alt }: PostImageProps) => {
    useStylesScoped$(styles);

    const cloudinarySrc = src
        .replace("/upload/", `/upload/w_680/`)
        .replace(".jpg", ".webp");
    return (
        <div class="post-image">
            <a href={cloudinarySrc} target="_blank" rel="noreferrer">
                <img src={cloudinarySrc} alt={alt} />
            </a>
            <span>{alt}</span>
        </div>
    );
});

export default PostImage;
