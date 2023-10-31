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
    title: "자바스크립트 이터레이터",
    meta: [
        {
            property: "keywords",
            content: "자바스크립트 이터레이터 프론트엔드 면접 질문",
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
                <h1>자바스크립트 이터레이터</h1>
                <PostTag tags="자바스크립트 이터레이터 프론트엔드 면접 질문"></PostTag>
                <PostDate>2023-10-25</PostDate>
                <PostSeries title={"프론트엔드 면접 질문"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    자바스크립트 이터레이터에 대해 설명해주세요
                </PostBlockquote>
                이터레이터는 객체를 순회가능한 이터러블 객체로 만들며,
                <br />
                Symbol.Iterator 라는 프로퍼티는 next() 메서드를 사용하여 value
                와 done 을 리턴하여 객체의 이터러블 프로토콜을 구현합니다.
            </PostBody>
        </>
    );
});
