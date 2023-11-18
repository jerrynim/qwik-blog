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
    title: "React에서 돔을 직접 조작하는 것과 상태를 변경하는 것의 메모리적 차이",
    meta: [
        {
            property: "keywords",
            content: "react dom state 프론트엔드 면접 질문",
        },
        {
            property: "description",
            content: `Virtual DOM은 실제 DOM보다 가벼운 구조이며, 변경된 부분만을
            효율적으로 업데이트할 수 있습니다.
            React.Memo와 같은 메모이제이션을 활용하여 컴포넌트의 리렌더링을
            방지하고 성능을 최적화할 수 있습니다.
            그러나, 만약에 단일의 DOM 업데이트만 필요한 경우라면, Virtual
            DOM 객체가 추가로 메모리를 사용할 수 있습니다. 또한, 애니메이션과 같이 잦은 변경이 발생하는 경우 가상
            DOM은 diff 알고리즘의 연산이 오버헤드가 될 수 있어, 직접 DOM을
            조작하는 것이 유리할 수 있습니다.`,
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
                <PostDate>2023-11-18</PostDate>
                <PostSeries title={"프론트엔드 면접 질문"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    React에서 돔을 직접 조작하는 것과 상태를 변경하는 것의
                    메모리적으로 어떤것이 더 유리한가요?
                </PostBlockquote>
                Virtual DOM은 실제 DOM보다 가벼운 구조이며, 변경된 부분만을
                효율적으로 업데이트할 수 있습니다.
                <br />
                React.Memo와 같은 메모이제이션을 활용하여 컴포넌트의 리렌더링을
                방지하고 성능을 최적화할 수 있습니다.
                <br />
                그러나, 만약에 단일의 DOM 업데이트만 필요한 경우라면, Virtual
                DOM 객체가 추가로 메모리를 사용할 수 있습니다.
                <br /> 또한, 애니메이션과 같이 잦은 변경이 발생하는 경우 가상
                DOM은 diff 알고리즘의 연산이 오버헤드가 될 수 있어, 직접 DOM을
                조작하는 것이 유리할 수 있습니다.
            </PostBody>
        </>
    );
});
