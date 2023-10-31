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
    title: "for of 와 for in 의 차이점",
    meta: [
        {
            property: "keywords",
            content: "for-of for-in 프론트엔드 면접 질문",
        },
        {
            property: "description",
            content: `for of는 객체의 이터레이터에 의하여 순회를 하며, for in은
            프로퍼티 내의 enumarable 값이 true인 값을 순회합니다.`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>for of 와 for in 의 차이점</h1>
                <PostTag tags="for-of for-in 프론트엔드 면접 질문"></PostTag>
                <PostDate>2023-10-30</PostDate>
                <PostSeries title={"프론트엔드 면접 질문"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    for of 와 for in 의 차이점은 무엇 인가요?
                </PostBlockquote>
                for of는 객체의 이터레이터에 의하여 순회를 하며, for in은
                프로퍼티 내의 enumarable 값이 true인 값을 순회합니다.
            </PostBody>
        </>
    );
});
