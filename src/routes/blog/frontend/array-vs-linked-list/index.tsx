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
    title: "배열과 연결리스트 중에 어떤것이 빠른가요?",
    meta: [
        {
            property: "keywords",
            content: "array linked-list 웹 개발",
        },
        {
            property: "description",
            content: ` 배열은 연속된 메모리 공간을 가지고 있기때문에 조회 및 탐색에
            유리하다. 대신에 수정에 대해서 중간 메모리가 이동해야할 수 있어
            비용이 높을 수 있습니다.
            연결리스트는 요소를 추가하거나 제거하는 것이 빠르지만, 조회 및
            순회시 순차적으로 탐색을 하여야 하기 때문에 배열에 비하여
            느립니다.`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>배열과 연결리스트 중에 어떤것이 빠른가요?</h1>
                <PostTag tags="배열 연결리스트 웹 개발"></PostTag>
                <PostDate>2023-10-30</PostDate>
                <PostSeries title={"웹 개발"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    배열과 연결리스트 중에 어떤것이 빠른가요?
                </PostBlockquote>
                배열은 연속된 메모리 공간을 가지고 있기때문에 조회 및 탐색에
                유리하다. 대신에 수정에 대해서 중간 메모리가 이동해야할 수 있어
                비용이 높을 수 있습니다.
                <br />
                연결리스트는 요소를 추가하거나 제거하는 것이 빠르지만, 조회 및
                순회시 순차적으로 탐색을 하여야 하기 때문에 배열에 비하여
                느립니다.
            </PostBody>
        </>
    );
});
