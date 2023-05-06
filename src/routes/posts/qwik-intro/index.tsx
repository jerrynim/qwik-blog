import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostImage,
    PostLink,
    PostTag,
    PostTitle,
    PostSeries,
    PostBlockquote,
} from "@components/post";
export const head: DocumentHead = {
    title: "가장 빠른 프레임워크 qwik",
    meta: [
        {
            property: "keyword",
            content: "qwik javascript framework react",
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage></PostHeadImage>
            <PostHead>
                <h1>가장 빠른 프레임워크 qwik</h1>
                <PostTag tags="qwik javascript framework react"></PostTag>
                <PostDate>2022-11-03</PostDate>
            </PostHead>

            <PostBody>
                <PostImage src="" alt="qwik logo" />
                <PostLink href="https://qwik.builder.io/docs/">
                    Qwik
                </PostLink>{" "}
                is a fine-grained lazy-loading framework representing a
                fundamentally new approach to building web applications.
                <PostBlockquote>
                    qwik은 웹 애플리케이션 구축에 대한 근본적인 새로운 접근
                    방식을 나타내는 세분화된 레이지 로딩 프레임워크 입니다.
                </PostBlockquote>
            </PostBody>
        </>
    );
});
