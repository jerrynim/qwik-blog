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
    return (
        <div class="post-image">
            <a href={src} target="_blank" rel="noreferrer">
                <img src={src} alt={alt} />
            </a>
            <span>{alt}</span>
        </div>
    );
});

export default PostImage;
