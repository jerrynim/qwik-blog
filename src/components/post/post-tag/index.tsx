import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

interface PostTagProps {
    tags: string;
}

const PostTag = component$(({ tags }: PostTagProps) => {
    useStylesScoped$(styles);
    const _tags = tags?.split(" ");
    return (
        <ul class="post-tag-wrapper">
            {_tags?.map((tag) => (
                <li class="post-tag">#${tag}</li>
            ))}
        </ul>
    );
});
export default PostTag;
