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
    title: "자바스크립트 0.1 + 0.2 !== 0.3 인 이유와 해결법",
    meta: [
        {
            property: "keywords",
            content:
                "javascript 0.1 0.2 0.3 floating point 프론트엔드 면접 질문",
        },
        {
            property: "description",
            content: `자바스크립트에서 소수점은 부동소수점 방식을 사용합니다. 값의
            표현에서 가수 부분인 52비트가 넘어가는 값은 표현할 수 없습니다.
            이로 인하여 오차가 발생하여 정확한 계산이 불가합니다. 정확한
            계산을 위해서는 소수를 정수로 변환하거나 라이브러리를 사용하여야
            합니다.`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>자바스크립트 0.1 + 0.2 !== 0.3 인 이유와 해결법</h1>
                <PostTag tags="javascript 0.1 0.2 0.3 floating point 프론트엔드 면접 질문"></PostTag>
                <PostDate>2023-10-25</PostDate>
                <PostSeries title={"프론트엔드 면접 질문"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    자바스크립트에서 0.1 + 0.2 !== 0.3 인 이유와 해결법을
                    아시나요?
                </PostBlockquote>
                자바스크립트에서 소수점은 부동소수점 방식을 사용합니다. 값의
                표현에서 가수 부분인 52비트가 넘어가는 값은 표현할 수 없습니다.
                이로 인하여 오차가 발생하여 정확한 계산이 불가합니다. 정확한
                계산을 위해서는 소수를 정수로 변환하거나 라이브러리를 사용하여야
                합니다.
                <PostBlockquote>
                    그렇다면 다른 언어에서는 소수점 계산을 어떻게 할까요?
                </PostBlockquote>
                다른 언어에서도 부동소수점을 사용한다면 Decimal로 변환하여
                계산하거나, 자료형을 long double 처럼 더 많은 비트를 사용하여
                오차를 줄일 수 있습니다.
            </PostBody>
        </>
    );
});
