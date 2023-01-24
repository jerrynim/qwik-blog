import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";
interface PostImageProps {
    width?: string;
    src: string;
    alt?: string;
    path?: string;
}
const PostImage = component$(({ width, src, alt, path }: PostImageProps) => {
    useStylesScoped$(styles);

    const cloudinarySrc = src.replace("/upload/", `/upload/f_auto,w_680/`);
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
