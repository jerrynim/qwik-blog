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
    title: "var, let, const 의 차이점",
    meta: [
        {
            property: "keywords",
            content: "var let const 차이점 웹 개발",
        },
        {
            property: "description",
            content: `var, let, const 는 변수 선언을 위해 사용이되며, var의 경우 함수
            레벨 스코프를 가지고 let, const는 블록 레벨 스코프를
            가지게됩니다. var, let 은 값의 재할당이 가능하고, const 는
            불가합니다. var는 실행 컨텍스트 생성 단계에서 값의 선언과
            초기화가 동시에 이루어지고, let, const의 경우 값이 선언되어도
            초기화되지 않는다. 이로인해 TDZ(Temporal Dead Zone)이 생기게
            됩니다.`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>var, let, const 의 차이점</h1>
                <PostTag tags="var let const 웹 개발"></PostTag>
                <PostDate>2023-10-25</PostDate>
                <PostSeries title={"웹 개발"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    var, let, const 의 차이점이 무엇인가요?
                </PostBlockquote>
                var, let, const 는 변수 선언을 위해 사용이되며, var의 경우 함수
                레벨 스코프를 가지고 let, const는 블록 레벨 스코프를
                가지게됩니다. var, let 은 값의 재할당이 가능하고, const 는
                불가합니다. var는 실행 컨텍스트 생성 단계에서 값의 선언과
                초기화가 동시에 이루어지고, let, const의 경우 값이 선언되어도
                초기화되지 않는다. 이로인해 TDZ(Temporal Dead Zone)이 생기게
                됩니다.
            </PostBody>
        </>
    );
});
