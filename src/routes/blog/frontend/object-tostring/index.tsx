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
    title: "Object.toString 의 기능",
    meta: [
        {
            property: "keywords",
            content: "Object toString 프론트엔드 면접 질문",
        },
        {
            property: "description",
            content: `Object.toString은 내부 [Class]슬롯의 값을 나타내고 [object
                Class명]의 문자열을 리턴합니다. Object.toString은 기본적으로
                [object Object]를 리턴하게 되지만 String과 같은 내장 객체들은
                toString 메서드를 재정의 하여 값이 “string” 이나 “number”로
                올바르게 나오게됩니다`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>Object.toString 의 기능</h1>
                <PostTag tags="Object toString 프론트엔드 면접 질문"></PostTag>
                <PostDate>2023-10-25</PostDate>
                <PostSeries title={"프론트엔드 면접 질문"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    Object.toString 의 기능은 무엇인가요?
                </PostBlockquote>
                Object.toString은 내부 [Class]슬롯의 값을 나타내고 [object
                Class명]의 문자열을 리턴합니다. Object.toString은 기본적으로
                [object Object]를 리턴하게 되지만 String과 같은 내장 객체들은
                toString 메서드를 재정의 하여 값이 “string” 이나 “number”로
                올바르게 나오게됩니다
            </PostBody>
        </>
    );
});
