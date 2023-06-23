import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostTag,
} from "@components/post";

export const head: DocumentHead = {
    title: "unit8Array 데이터를 FormData 없이 fetch하기",
    meta: [
        {
            property: "keyword",
            content: "lit lit-html lit-elemnt tutorial start",
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage></PostHeadImage>
            <PostHead>
                <h1>unit8Array 데이터를 FormData 없이 fetch하기</h1>
                <PostTag tags="unit8Array fetch하기 FormData"></PostTag>
                <PostDate>2023-06-23</PostDate>
            </PostHead>

            <PostBody>
                주로 이미지나 파일을 업로드하기 위해서 FormData에 data를
                append하여 서버에 전송하는 방법을 주로사용할 수 있습니다.
                <br />
                저는 어느 환경에서 FormData 와 Blob 클래스가 없는 환경에서
                데이터를 fetch 할 상황이 생겨 이미지를 직접적으로 body에
                넣어주어야 하였습니다. 결과적으로 아래의 코드로 서버리스
                환경에서도 동작하는 fetch를 구현할 수 있었습니다.
                <PostCode code={code1} />
                만약 express를 사용한다면 body-parser를 사용하여 raw 데이터를
                받고 크기 제한을 풀어주어합니다.
                <PostCode code={code2} />
            </PostBody>
        </>
    );
});

export const code1 = `import base64 from "base64-js"

const base64Data = base64.fromByteArray(uint8Array)
fetch("<YOUR_URL>/image/upload", {
  method: "POST",
  body: base64Data,
})`;

export const code2 = `app.use(BodyParser.raw({"limit":"10mb"}))`;
