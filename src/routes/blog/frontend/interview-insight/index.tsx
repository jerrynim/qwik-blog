import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBody,
    PostDate,
    PostHead,
    PostHeadImage,
    PostLink,
    PostTag,
    PostTitle,
} from "@components/post";

export const head: DocumentHead = {
    title: "Frontend interview insight",
    meta: [
        {
            property: "keywords",
            content: "Frontend interview insight",
        },
        {
            property: "description",
            content: `Frontend interview insight`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>{head.title}</h1>
                <PostTag tags={head.meta![0].content!}></PostTag>
                <PostDate>2023-12-05</PostDate>
            </PostHead>
            <PostBody>
                <ul>
                    <li>
                        하이드레이션이 비싼 이유
                        <br />
                        <PostLink href="https://www.builder.io/blog/hydration-is-pure-overhead">
                            https://www.builder.io/blog/hydration-is-pure-overhead
                        </PostLink>
                    </li>
                    <li>
                        React에서 생각하는 SSR의 문제점
                        <PostLink href="https://github.com/reactwg/react-18/discussions/37#What%20Is%20SSR?">
                            https://github.com/reactwg/react-18/discussions/37#What%20Is%20SSR?
                        </PostLink>
                    </li>
                    <li>
                        zustand와 pub/sub 모델
                        <br />
                        <PostLink href="https://ui.toast.com/weekly-pick/ko_20210812">
                            https://ui.toast.com/weekly-pick/ko_20210812
                        </PostLink>
                    </li>
                    <li>
                        recoil
                        <br />
                        <PostLink href="https://techblog.yogiyo.co.kr/recoil%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%86%90%EC%89%AC%EC%9A%B4-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-b70b32650582">
                            https://techblog.yogiyo.co.kr/recoil%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%86%90%EC%89%AC%EC%9A%B4-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-b70b32650582
                        </PostLink>
                    </li>
                </ul>
            </PostBody>
        </>
    );
});
