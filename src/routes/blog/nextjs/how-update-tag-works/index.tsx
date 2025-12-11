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
  title: "Next.js에서 UpdateTag가 화면을 갱신하는 방법(revalidateTag와의 차이)",
  meta: [
    {
      property: "keywords",
      content: "nextjs updateTag",
    },
    {
      property: "description",
      content:
        "Next.js에서 UpdateTag가 화면을 갱신하는 방법(revalidateTag와의 차이)",
    },
  ],
};

export default component$(() => {
  return (
    <>
      <PostHeadImage src=""></PostHeadImage>
      <PostHead>
        <h1>
          Next.js에서 UpdateTag가 화면을 갱신하는 방법(revalidateTag와의 차이)
        </h1>
        <PostTag tags="nextjs updateTag"></PostTag>
        <PostDate>2025-12-07</PostDate>
      </PostHead>
      <PostBody>
        서버액션에서 UpdateTag를 사용하게되면 Response의 헹더에서
        x-action-revalidated 응답에 {"[[],1,0]"} 값을 반환하게됩니다.
        <PostCode code={code1} language="typescript" />
        그리고 새롭게 렌더링한 페이지의 서버 컴포넌트의 RSC payload로
        전달하게됩니다. CLient에서는 header 값을 통해 currentCacheVersion을
        업데이트하고, 응답으로 받은 RSC payload를 통해 화면을 재조정하게됩니다.
        이를 통해 화면을 갱신할 수있게됩니다.
        <br />
        revalidateTag를 사용하면 태그를 무효화하지만 컴포넌트를 리렌더링하며 RSC
        payload를 응답으로 전달하지는않습니다. header의 x-action-revalidated에는{" "}
        {"[[],1,0]"}로 값이 반환되어
      </PostBody>
    </>
  );
});
const code1 = `[] - revalidated된 경로가 없음
1 - 태그가 revalidate 되었음 (isTagRevalidated = 1)
0 - 쿠키는 revalidate 되지 않음`;
