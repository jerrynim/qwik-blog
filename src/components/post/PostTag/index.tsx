import { component$ } from "@builder.io/qwik";

interface PostTagProps {
    text: string;
}

export default component$(({ text }: PostTagProps) => {
    const tags = text?.split(" ");
    return (
        <ul>
            {tags?.map((tag) => (
                <li>#${tag}</li>
            ))}
        </ul>
    );
});
