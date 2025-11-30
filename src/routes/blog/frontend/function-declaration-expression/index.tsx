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
    title: "함수 선언문과 함수 표현식의 차이",
    meta: [
        {
            property: "keywords",
            content: "함수 선언문 함수 표현식 웹 개발",
        },
        {
            property: "description",
            content: `함수 선언문은 function a() 형태로 함수명이 필수이고, 실행
            컨텍스트에서 선언과 동시에 초기화와 할당이되게 됩니다. 이로
            인하여 선헌하기 전에 호출할 수 있고, 같은 이름의 함수라면
            마지막으로 선언된 함수가 호출됩니다.`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>함수 선언문 함수 표현식</h1>
                <PostTag tags="함수 선언문 함수 표현식 웹 개발"></PostTag>
                <PostDate>2023-10-31</PostDate>
                <PostSeries title={"웹 개발"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    함수 선언문 함수 표현식의 차이는 무엇인가요?
                </PostBlockquote>
                함수 선언문은 function a() 형태로 함수명이 필수이고, 실행
                컨텍스트에서 선언과 동시에 초기화와 할당이되게 됩니다. 이로
                인하여 선헌하기 전에 호출할 수 있고, 같은 이름의 함수라면
                마지막으로 선언된 함수가 호출됩니다.
                <br />
                함수 표현식은 변수에 함수를 할당하는 형태로 const a = function()
                형태를 가지며, 변수의 특성을 가지게되어 실행 컨텍스트에서 바로
                할당이 되지 않습니다. 익명의 함수를 사용할 수 있습니다.
            </PostBody>
        </>
    );
});
