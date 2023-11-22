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
    title: "react-query를 사용하는 이유",
    meta: [
        {
            property: "keywords",
            content: "why react-query 프론트엔드 면접 질문",
        },
        {
            property: "description",
            content: ` react-query는 비동기 상태 관리 라이브러리로써, 기존의
            데이터패칭을 위해 사용하는 loading,error,refetch 하는 코드를
            간결하게 작성할 수 있도록 도와줍니다.
            또한 response를 캐싱하여 불필요한 데이터 패칭을 하지않도록
            해주며, refetchOnMount 등의 옵션을 통하여 최신 데이터의 동기화를
            지원하고 있습니다.
            또한, Race Condition 과 같은 문제를 queryKey로 관리하여
            해결해주며, 종속성 변경으로 인한 data와 error를 초기화하지
            않아도 됩니다. 그리고 데이터 패칭의 취소와 중단또한 간편하게
            구현할 수 있습니다.`,
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
                    react-query 를 사용하면 무엇이 좋을까요? 왜 react-query를
                    사용할까요?
                </PostBlockquote>
                react-query는 비동기 상태 관리 라이브러리로써, 기존의
                데이터패칭을 위해 사용하는 loading,error,refetch 하는 코드를
                간결하게 작성할 수 있도록 도와줍니다.
                <br />
                또한 response를 캐싱하여 불필요한 데이터 패칭을 하지않도록
                해주며, refetchOnMount 등의 옵션을 통하여 최신 데이터의 동기화를
                지원하고 있습니다.
                <br />
                또한, Race Condition 과 같은 문제를 queryKey로 관리하여
                해결해주며, 종속성 변경으로 인한 data와 error를 초기화하지
                않아도 됩니다. 그리고 데이터 패칭의 취소와 중단또한 간편하게
                구현할 수 있습니다.
                <br />
                <br />
                참고링크 :
                <PostLink href="https://tkdodo.eu/blog/why-you-want-react-query">
                    Why You Need React Query
                </PostLink>
            </PostBody>
        </>
    );
});
