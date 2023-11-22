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
    title: "Cors",
    meta: [
        {
            property: "keywords",
            content: "cors 프론트엔드 면접 질문",
        },
        {
            property: "description",
            content: ``,
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
                <PostSeries title={"프론트엔드 면접 질문"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    cors란 무엇이고, 어떻게 우회하나요?
                </PostBlockquote>
                Cors는 Cross origin resource sharing의 약자로 교차 도메인 간의
                자원에 접근하는 권한을 브라우저에게 알려주는 체계입니다.
                <br />
                브라우저는 기본적으로 Same Origin Policy 동일출처정책으로 인하여
                다른 출처의 자원을 사용할 수 없습니다.
                <br />
                이를 우회하기 위해서는 서버에서 Cors 의 Response의
                'Acess-Control-Allow-Origin'에 요청하는 도메인을 추가하여 자원을
                공유할 수 있습니다.
                <br />
                이후 브라우저는 Simple Request를 통해 리소스에 접근이 가능한지
                확인합니다.
                <br />
                다른 서버에 쿠키나 인증과 관련된 헤더를 담아 보낼려면
                credentials 옵션을 사용하고, 다른 도메인에서
                Access-Control-Allow-Origin을 명시해 주어야합니다.
            </PostBody>
        </>
    );
});
