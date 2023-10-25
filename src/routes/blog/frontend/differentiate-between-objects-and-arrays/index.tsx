import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBlockquote,
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostSeries,
    PostTag,
} from "@components/post";

export const head: DocumentHead = {
    title: "배열과 객체를 구분하는 법",
    meta: [
        {
            property: "keywords",
            content: "javascript difference object array 프론트엔드 면접 질문",
        },
        {
            property: "description",
            content: `자바스크립트에서 배열은 객체이므로 객체의 클래스를 확인하여
            배열과 객체를 구분할 수 있습니다.`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>배열과 객체를 구분하는 법</h1>
                <PostTag tags="자바스크립트 object array difference 프론트엔드 면접 질문"></PostTag>
                <PostDate>2023-10-25</PostDate>
                <PostSeries title={"프론트엔드 면접 질문"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    자바스크립트에서 배열과 객체를 어떻게 구분할까요?
                </PostBlockquote>
                자바스크립트에서 배열은 객체이므로 객체의 클래스를 확인하여
                배열과 객체를 구분할 수 있습니다.
                <PostCode code="Array.constructor === Array" />
                instanceof 연산자를 사용합니다.
                <PostCode code="array instanceof Array" />
                배열은 이터러블 하지만, 객체는 이터러블 하지 않습니다. 따라서
                Symbol.iterator 여부를 확인합니다.
                <PostCode code="!!array[Symbol.iterator]" />
            </PostBody>
        </>
    );
});
