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
    title: "함수 parameter의 갯수를 아는 방법",
    meta: [
        {
            property: "keywords",
            content: "function parameter 개수 웹 개발",
        },
        {
            property: "description",
            content: `함수의 parameter의 갯수는 arguments의 length를 확인하거나,
             rest 파라미터를 이용하여 rest의 length를 확인할 수
            있습니다.`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>함수 parameter의 개수를 아는 방법</h1>
                <PostTag tags="함수 parameter의 개수 웹 개발"></PostTag>
                <PostDate>2023-10-25</PostDate>
                <PostSeries title={"웹 개발"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    함수 parameter의 갯수를 아는 방법은 무엇이 있나요?
                </PostBlockquote>
                함수의 parameter의 갯수는 arguments의 length를 확인하거나,
                <br /> rest 파라미터를 이용하여 rest의 length를 확인할 수
                있습니다.
            </PostBody>
        </>
    );
});
