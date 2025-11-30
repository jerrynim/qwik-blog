import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBlockquote,
    PostBody,
    PostDate,
    PostHead,
    PostHeadImage,
    PostSeries,
    PostTag
} from "@components/post";

export const head: DocumentHead = {
    title: "얕은복사와 깊은복사",
    meta: [
        {
            property: "keywords",
            content: "shallow-copy deep-copy 웹 개발",
        },
        {
            property: "description",
            content: `얕은 복사는 객체 내부의 참조 타입(배열, 객체 등) 프로퍼티들까지
            복사하지 않고 주소값만 복사합니다. 그래서 원본 객체가 변경되면
            복사된 객체 내부 데이터도 영향을 받습니다.
            깊은 복사는 객체 내부의 참조 타입 프로퍼티들까지 모두 새로운
            메모리 공간에 복사합니다. 그래서 원본 객체가 변경되더라도 복사된
            객체 내부 데이터는 영향을 받지 않습니다.`,
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
                    얕은복사와 깊은복사는 무엇인가요?
                </PostBlockquote>
                얕은 복사는 객체 내부의 참조 타입(배열, 객체 등) 프로퍼티들까지
                복사하지 않고 주소값만 복사합니다. 그래서 원본 객체가 변경되면
                복사된 객체 내부 데이터도 영향을 받습니다.
                <br />
                깊은 복사는 객체 내부의 참조 타입 프로퍼티들까지 모두 새로운
                메모리 공간에 복사합니다. 그래서 원본 객체가 변경되더라도 복사된
                객체 내부 데이터는 영향을 받지 않습니다.
            </PostBody>
        </>
    );
});
