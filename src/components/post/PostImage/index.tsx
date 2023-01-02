import { component$ } from "@builder.io/qwik";

interface PostImageProps {
    width?: number;
    src: string;
    alt?: string;
    path?: string;
}
export default component$(({ width, src, alt, path }: PostImageProps) => {
    const _width =
        width || window.innerWidth < 720 ? window.innerWidth - 40 : 680;

    const cloudinarySrc = src.replace(
        "/upload/",
        `/upload/f_auto,w_${_width}/`,
    );
    return (
        <>
            <a
                href={src}
                target="_blank"
                rel="noreferrer"
                style={`max-width:${width}px`}
            >
                <img src={cloudinarySrc} alt={alt} />
            </a>
            <span>{alt}</span>
        </>
    );
});
