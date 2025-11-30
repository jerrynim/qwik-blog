import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBlockquote,
    PostBody,
    PostDate,
    PostHead,
    PostHeadImage,
    PostLink,
    PostSeries,
    PostTag,
} from "@components/post";

export const head: DocumentHead = {
    title: "css-in-js와 css-zero-runtime",
    meta: [
        {
            property: "keywords",
            content: "css-in-js css-zero-runtime 웹 개발",
        },
        {
            property: "description",
            content: `  css-in-js는 js파일에서 css를 작성하여 자바스크립트 변수와 로직을
            이용하여 스타일링 변화를 줄 수 있습니다. 대표적으로
            styled-component와 emotion 라이브러리가 있습니다.
            해당 라이브러리르 사용하여 동적으로 스타일을 변화를 주게된다면
            새로울 스타일이 주입하게됩니다. Css Parsing과 렌더트리가
            다시구축되면서 렌더링이 발생하게 되는 성능 이슈와 자바스크립트의
            실행뒤 UI가 렌더링 되거나 실패로 인하여 렌더링이 되지않는 문제가
            생겼습니다.`,
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
                <PostDate>2023-11-22</PostDate>
                <PostSeries title={"웹 개발"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    css-in-js와 css-zero-runtime에 대해 아시나요?
                </PostBlockquote>
                css-in-js는 js파일에서 css를 작성하여 자바스크립트 변수와 로직을
                이용하여 스타일링 변화를 줄 수 있습니다. 대표적으로
                styled-component와 emotion 라이브러리가 있습니다.
                <br />
                해당 라이브러리르 사용하여 동적으로 스타일을 변화를 주게된다면
                새로울 스타일이 주입하게됩니다. Css Parsing과 렌더트리가
                다시구축되면서 렌더링이 발생하게 되는 성능 이슈와 자바스크립트의
                실행뒤 UI가 렌더링 되거나 실패로 인하여 렌더링이 되지않는 문제가
                생겼습니다.
                <br />
                런타임에 css를 생성하는게 아닌 build 타임에 생성하도록 하는
                zero-runtime-css가 각광을 받았고, 대표적으로 linaria와
                vanilla-extracts가 있습니다.
                <br />
                near zero run time 이라는 개념도 있는데 이는 동적으로 변경될
                css를 미리 정의하여 사용하는 형태입니다. 대표적인 라이브러리로
                stitches 가 있습니다.
                <br />
                참고링크 :
                <PostLink href="https://ideveloper2.dev/blog/2022-01-25--emotion%EC%9C%BC%EB%A1%9C-%ED%8C%8C%EC%95%85%ED%95%B4%EB%B3%B4%EB%8A%94-css-in-js%EC%9D%98-%EC%9D%B4%EB%AA%A8%EC%A0%80%EB%AA%A8/">
                    css-in-js 라이브러리 코드로 파악해보는 css-in-js의 이모저모
                </PostLink>
            </PostBody>
        </>
    );
});
