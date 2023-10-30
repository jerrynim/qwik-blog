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
    title: "객체의 변형을 방지하는 방법",
    meta: [
        {
            property: "keywords",
            content: "javascript object freeze 프론트엔드 면접 질문",
        },
        {
            property: "description",
            content: ` </PostBlockquote>
            객체는 프로퍼티 어트리뷰트 라는 값을 가지고 있습니다. 그 중
            writable 값을 false로 하여 프로퍼티의 값이 변경되는 것을 수정할
            수 있습니다.
            이를 간단하게 지원하는 메소드인 Object.freeze 나 Object.seal
            메서드를 사용하여 객체의 수정을 막을 수 있습니다.
            다른 방법으로는 객체의 getter를 사용하여 값을 받을 수
            있도록하고, setter를 설정하지 않아 수정하지 않도록 할 수
            있습니다.`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>객체의 변형을 방지하는 방법</h1>
                <PostTag tags="자바스크립트 객체 변형 방지 프론트엔드 면접 질문"></PostTag>
                <PostDate>2023-10-30</PostDate>
                <PostSeries title={"프론트엔드 면접 질문"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    객체의 수정을 막으려면 어떻게 할 수 있을까요?
                </PostBlockquote>
                객체는 프로퍼티 어트리뷰트 라는 값을 가지고 있습니다. 그 중
                writable 값을 false로 하여 프로퍼티의 값이 변경되는 것을 수정할
                수 있습니다.
                <br />
                이를 간단하게 지원하는 메소드인 Object.freeze 나 Object.seal
                메서드를 사용하여 객체의 수정을 막을 수 있습니다.
                <br />
                다른 방법으로는 객체의 getter를 사용하여 값을 받을 수
                있도록하고, setter를 설정하지 않아 수정하지 않도록 할 수
                있습니다.
            </PostBody>
        </>
    );
});
