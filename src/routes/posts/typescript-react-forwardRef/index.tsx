import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostImage,
    PostLink,
    PostTag,
    PostTitle,
    PostSeries,
} from "@components/post";
export const head: DocumentHead = {
    title: "타입스크립트 React ForwardRef 사용하기",
    meta: [
        {
            property: "keyword",
            content: "typescript react forwardRef",
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage></PostHeadImage>
            <PostHead>
                <h1>타입스크립트 React ForwardRef 사용하기</h1>
                <PostTag tags="typescript react forwardRef"></PostTag>
                <PostDate>2023-02-18</PostDate>
            </PostHead>

            <PostBody>
                타입스크립트에서 React.FowardRef를 사용하는 법
                <PostCode></PostCode>
            </PostBody>
        </>
    );
});

export const code1 = ``;
