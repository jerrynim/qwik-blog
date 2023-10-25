import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBlockquote,
    PostBody,
    PostDate,
    PostHead,
    PostHeadImage,
    PostSeries,
    PostTag,
} from "@components/post";

export const head: DocumentHead = {
    title: "자바스크립트 자료형의 종류",
    meta: [
        {
            property: "keywords",
            content: "javascript data type 프론트엔드 면접 질문",
        },
        {
            property: "description",
            content: ` 원시 타입인 string, number, boolean, null, undefined, symbol 이
            있고, 참조 타입인 Object 가 있습니다.`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>자바스크립트 자료형의 종류</h1>
                <PostTag tags="자바스크립트 자료형의 종류 프론트엔드 면접 질문"></PostTag>
                <PostDate>2023-10-25</PostDate>
                <PostSeries title={"프론트엔드 면접 질문"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    자바스크립트 자료형은 무엇이 있나요?
                </PostBlockquote>
                원시 타입인 string, number, boolean, null, undefined, symbol 이
                있고, 참조 타입인 Object 가 있습니다.
            </PostBody>
        </>
    );
});
