import { component$ } from "@builder.io/qwik";

interface PostTagProps {
    tags: string;
}

export default component$(({ tags }: PostTagProps) => {
    const _tags = tags?.split(" ");
    return (
        <ul>
            {_tags?.map((tag) => (
                <li>#${tag}</li>
            ))}
        </ul>
    );
});
