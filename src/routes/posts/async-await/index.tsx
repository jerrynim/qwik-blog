import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostImage,
    PostTag,
} from "@components/post";
export const head: DocumentHead = {
    title: "async await",
    meta: [
        {
            property: "keyword",
            content: "javascript async await promiser",
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage src=""></PostHeadImage>
            <PostHead>
                <h1>async await</h1>
                <PostTag tags="javascript async await promise"></PostTag>
                <PostDate>2021-12-14</PostDate>
            </PostHead>
            <PostBody>
                설명에 앞서 이 글은 asnyc / await 사용에 익숙한 사람을
                대상으로합니다.
                <br />
                <post-definition>yield</post-definition>는 제네레이터 함수를
                일시정지 시킵니다.
            </PostBody>
        </>
    );
});
