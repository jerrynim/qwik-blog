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
    title: "렌더링 시에 Paint와 Composite의 차이",
    meta: [
        {
            property: "keywords",
            content: "Paint와 Composite 웹 개발",
        },
        {
            property: "description",
            content: `Paint는 레이아웃된 박스들을 픽셀로 그리는 단계입니다.
            Composite 은 Paint 단계에서 그려진 요소들을 합성하는 단계로,
            요소들의 겹치는 부분을 병합하고, z-index와 같은 쌓임 순서에 따라
            요소들이 정렬됩니다.`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>객체의 변형을 방지하는 방법</h1>
                <PostTag tags="Paint Composite 웹 개발"></PostTag>
                <PostDate>2023-11-18</PostDate>
                <PostSeries title={"웹 개발"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    객체의 수정을 막으려면 어떻게 할 수 있을까요?
                </PostBlockquote>
                Paint는 레이아웃된 박스들을 픽셀로 그리는 단계입니다.
                <br />
                Composite 은 Paint 단계에서 그려진 요소들을 합성하는 단계로,
                요소들의 겹치는 부분을 병합하고, z-index와 같은 쌓임 순서에 따라
                요소들이 정렬됩니다.
            </PostBody>
        </>
    );
});
