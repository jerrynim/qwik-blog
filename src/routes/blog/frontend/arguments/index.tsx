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
    title: "arguments 란?",
    meta: [
        {
            property: "keywords",
            content: "arguments 프론트엔드 면접 질문",
        },
        {
            property: "description",
            content: `arguments 는 함수 호출시 실행 컨텍스트 단계에서 생성되는
            유사배열로 함수에 전달된 파라미터들을 가지고 있습니다.
            파라미터 변경시 arguments 또한 변경됩니다.
            이는 애로우 함수를 통해서는 생성되지 않습니다.`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>arguments 란?</h1>
                <PostTag tags="arguments 프론트엔드 면접 질문"></PostTag>
                <PostDate>2023-10-25</PostDate>
                <PostSeries title={"프론트엔드 면접 질문"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>arguments란 무엇인가요?</PostBlockquote>
                arguments 는 함수 호출시 실행 컨텍스트 단계에서 생성되는
                유사배열로 함수에 전달된 파라미터들을 가지고 있습니다.
                <br />
                파라미터 변경시 arguments 또한 변경됩니다.
                <br />
                이는 애로우 함수를 통해서는 생성되지 않습니다.
            </PostBody>
        </>
    );
});
