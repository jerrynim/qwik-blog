import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBlockquote,
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostSeries,
    PostTag,
} from "@components/post";

export const head: DocumentHead = {
    title: "r#을 붙이는 이유",
    meta: [
        {
            property: "keywords",
            content: "r# rust",
        },
        {
            property: "description",
            content: `Rust에서 이 identifier 앞에 r#을 붙이는 이유는 예약어(reserved
                keyword)와 충돌을 피하기 위함입니다.
                예약어들은 Rust 컴파일러에 의해 특별한 의미를 가지므로
                identifier로 사용할 수 없습니다.`,
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
                <PostDate>2023-11-19</PostDate>
                <PostSeries title={"Rust 지식"} />
            </PostHead>
            <PostBody>
                Rust에서 이 identifier 앞에 r#을 붙이는 이유는 예약어(reserved
                keyword)와 충돌을 피하기 위함입니다.
                <br />
                예약어들은 Rust 컴파일러에 의해 특별한 의미를 가지므로
                identifier로 사용할 수 없습니다.
                <br />
                하지만 때로는 예약어와 같은 이름의 identifier가 필요할 때가
                있습니다.
                <br />
                예를 들어 struct 이름으로 match를 쓰고 싶다고 합시다. 이 경우
                컴파일 에러가 발생합니다:
                <PostCode code={code1} />
            </PostBody>
        </>
    );
});

export const code1 = `struct match {
    id: i32
  }
  
  // Error! match is a reserved word`;
