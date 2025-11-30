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
    title: "requestAnimationFrame 이란",
    meta: [
        {
            property: "keywords",
            content: "requestAnimationFrame 웹 개발",
        },
        {
            property: "description",
            content: `request Animation은 브라우저의 주사율에 맞춰 애니메이션을
            실행하도록 리페인트 이전에 주어진 콜백을 실행합니다.
            setInrval은 정해진 시간 간격으로 콜백을 실행하기 때문에 화면
            갱신 주기와 맞지 않아 프레임 유실이 발생할 수 있습니다.
            requestAnimationFrame은 background Tab 환경에서는 중지되므로
            브라우저를 따르는 배터리 수명을 개선할 수 있습니다.
            `,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>requestAnimationFrame 이란</h1>
                <PostTag tags={head.meta![0].content!}></PostTag>
                <PostDate>2023-11-18</PostDate>
                <PostSeries title={"웹 개발"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    requestAnimationFrame 무엇인가요?
                </PostBlockquote>
                request Animation은 브라우저의 주사율에 맞춰 애니메이션을
                실행하도록 리페인트 이전에 주어진 콜백을 실행합니다.
                <br />
                setInrval은 정해진 시간 간격으로 콜백을 실행하기 때문에 화면
                갱신 주기와 맞지 않아 프레임 유실이 발생할 수 있습니다.
                <br />
                requestAnimationFrame은 background Tab 환경에서는 중지되므로
                브라우저를 따르는 배터리 수명을 개선할 수 있습니다.
                <br />
                requestAnimationFrame()의 호출할 함수가 16ms 이상이 걸린다면,
                다음에 호출될 requestAnimationFrame이 생략됩니다.
                <br />
                또한, 다수의 requestAnimationFrame 호출이 동일한 프레임에
                그룹화되어 실행되기 때문에, 여러 애니메이션에 대한 동기화가
                자연스럽게 이루어집니다.
                <br />
                requestAnimationFrame은 cancelAnimationFrame을 통해 중지할 수
                있습니다.
                <br />
                <br />
                참고:
                <PostLink href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame">
                    MDN:Window: requestAnimationFrame() method
                </PostLink>
                <br />
                참고:
                <PostLink href="https://velog.io/@0715yk/HTML-requestAnimationFrame">
                    https://velog.io/@0715yk/HTML-requestAnimationFrame
                </PostLink>
            </PostBody>
        </>
    );
});
