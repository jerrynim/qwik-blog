import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBlockquote,
    PostBody,
    PostDate,
    PostHead,
    PostHeadImage,
    PostTag
} from "@components/post";

export const head: DocumentHead = {
    title: "",
    meta: [
        {
            property: "keywords",
            content: "garabage collection 웹 개발",
        },
        {
            property: "description",
            content: ``,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>{head.title}</h1>
                <PostTag tags={head.meta![0].content!}></PostTag>
                <PostDate>2023-11-26</PostDate>
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    가비지 컬렉션은 무엇이고 어떻게 작동하나요?
                </PostBlockquote>
                가비지 컬렉션은 사용되지 않는 메모리를 해제하는 방식으로, 변수의
                도달 가능성을 확인합니다. 가비지 컬렉션은 mark and swipe 방식을
                활용하여 도달가능한 메모리를 mark 한 후 해제합니다.
            </PostBody>
        </>
    );
});
