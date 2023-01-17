import { component$ } from "@builder.io/qwik";
import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostTag,
} from "@components/post";

export default component$(() => {
    return (
        <>
            <head>
                <title>간단한 원하는 길이의 배열 만들기</title>
                <meta
                    property="keyword"
                    content="simple make array length array from"
                />
                <meta
                    property="og:title"
                    content="간단한 원하는 길이의 배열 만들기)"
                />
            </head>
            <PostHeadImage />
            <PostHead>
                <h1>간단한 원하는 길이의 배열 만들기</h1>
                <PostTag tags="simple make array length array from"></PostTag>
                <PostDate>2022-04-12</PostDate>
            </PostHead>
            <PostBody>
                간단하게 원하는 길이의 배열을 만드는 방법:
                <br />
                Array.from 메서드를 이용합니다.
                <PostCode code={code1} language="typescript"></PostCode>
                <PostCode
                    code={code2}
                    language="typescript"
                    filename="결과"
                ></PostCode>
                끝
            </PostBody>
        </>
    );
});

export const code1 =
    "const array = Array.from({ length: 20 }, (_, index) => index);";

export const code2 = `[
  0,  1,  2,  3,  4,  5,  6,
  7,  8,  9, 10, 11, 12, 13,
 14, 15, 16, 17, 18, 19
]`;
