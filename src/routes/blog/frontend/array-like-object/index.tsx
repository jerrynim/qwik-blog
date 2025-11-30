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
    title: "유사배열이란?",
    meta: [
        {
            property: "keywords",
            content: "유사배열 웹 개발",
        },
        {
            property: "description",
            content: `유사배열(Array-Link Object)은 정수형의 양의 인덱스를 가지고
            있고, length 프로퍼티를 가지는 객체를 말합니다.
            대표적으로 DOM 요소 목록, arguments 가 있습니다.`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>유사배열이란?</h1>
                <PostTag tags="유사배열 웹 개발"></PostTag>
                <PostDate>2023-10-25</PostDate>
                <PostSeries title={"웹 개발"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>유사배열이란 무엇 인가요?</PostBlockquote>
                유사배열(Array-Link Object)은 정수형의 양의 인덱스를 가지고
                있고, length 프로퍼티를 가지는 객체를 말합니다.
                <br />
                대표적으로 DOM 요소 목록, arguments 가 있습니다.
            </PostBody>
        </>
    );
});
