import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostLink,
    PostTag,
    PostTitle,
} from "@components/post";

export const head: DocumentHead = {
    title: "Next.js에서 UpdateTag와 revalidateTag의 차이와 화면을 갱신하는 방법",
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
                    Next.js에서 UpdateTag와 revalidateTag의 차이와 화면을
                    갱신하는 방법
                </h1>
                <PostTag tags="nextjs updateTag revalidateTag"></PostTag>
                <PostDate>2026-01-08</PostDate>
            </PostHead>
            <PostBody>
                <PostTitle subtitle="updateTag" />
                <PostCode
                    code={code2}
                    language="typescript"
                    filename="packages/next/src/server/web/spec-extension/revalidate.ts"
                />
                특징:
                <br />
                - Server Action에서만 사용 가능
                <br />
                - profile: undefined → 항상 즉시 만료 전략
                <br />
                - Read-Your-Own-Writes 보장
                <br />
                <PostTitle subtitle="revalidateTag" />
                <PostCode
                    code={code3}
                    language="typescript"
                    filename="packages/next/src/server/web/spec-extension/revalidate.ts"
                />
                특징:
                <br />
                - Server Action + Route Handler 모두 사용 가능
                <br />
                - profile 파라미터로 캐시 전략 제어
                <br />
                - profile에 따라 Read-Your-Own-Writes 보장 여부가 달라짐
                <br />
                <PostTitle subtitle="profile에 따른 Read-Your-Own-Writes 여부" />
                - undefined 또는 {"{expire: 0}"}: 즉시 만료 → pathWasRevalidated
                설정 → RSC payload 포함 → Read-Your-Own-Writes
                <br />
                - 'max' 또는 기타 값: SWR 패턴 → pathWasRevalidated 미설정 → RSC
                payload 없음 → 기존 화면 유지
                <br />
                profile이 undefined라면 내부동작과, 서버, 클라이언트는
                다음과같이 수행합니다.
                <PostCode code={code4} language="typescript" />
                x-action-revalidated 헤더값은 값에 따라 다음과같은 열할을
                수행합니다.
                <br /> - "0" = ActionDidNotRevalidate - 재검증 없음
                <br />
                - "1" = ActionDidRevalidateStaticAndDynamic - 태그/쿠키 재검증
                <br />
                - "2" = ActionDidRevalidateDynamicOnly - 동적 데이터만 재검증
                <br />
                <br />
                <br />
                <br />
                <PostLink href="https://github.com/vercel/next.js/pull/86878">
                    https://github.com/vercel/next.js/pull/86878
                </PostLink>
                에서 변경되었습니다. 16.1.0 미만 버전은 아래 내용을
                참고해주세요.
                <br />
                <del>
                    서버액션에서 UpdateTag를 사용하게되면 Response의 헹더에서
                    x-action-revalidated 응답에 {"[[],1,0]"} 값을
                    반환하게됩니다.
                    <PostCode code={code1} language="typescript" />
                    그리고 새롭게 렌더링한 페이지의 서버 컴포넌트의 RSC
                    payload로 전달하게됩니다. CLient에서는 header 값을 통해
                    currentCacheVersion을 업데이트하고, 응답으로 받은 RSC
                    payload를 통해 화면을 재조정하게됩니다. 이를 통해 화면을
                    갱신할 수있게됩니다.
                    <br />
                    revalidateTag를 사용하면 태그를 무효화하지만 컴포넌트를
                    리렌더링하며 RSC payload를 응답으로 전달하지는않습니다.
                    header의 x-action-revalidated에는 {"[[],1,0]"}로 값이
                    반환되어 화면을 갱신하지 않습니다.
                </del>
            </PostBody>
        </>
    );
});
const code1 = `[] - revalidated된 경로가 없음
1 - 태그가 revalidate 되었음 (isTagRevalidated = 1)
0 - 쿠키는 revalidate 되지 않음`;

const code2 = `  export function updateTag(tag: string) {
    const workStore = workAsyncStorage.getStore()

    if (!workStore || workStore.page.endsWith('/route')) {
      throw new Error(
        'updateTag can only be called from within a Server Action.'
      )
    }

    // 🔥 핵심: profile을 undefined로 전달
    return revalidate([tag], \`updateTag \${tag}\`, undefined)
  }`;

const code3 = `export function revalidateTag(tag: string, profile: string | CacheLifeConfig) {
  if (!profile) {
    console.warn(
      '"revalidateTag" without the second argument is now deprecated, add second argument of "max" or use "updateTag". See more info here: https://nextjs.org/docs/messages/revalidate-tag-single-arg'
    )
  }
  return revalidate([tag], \`revalidateTag \${tag}\`, profile)
}`;

const code4 = `// revalidate(['products'], 'updateTag products', undefined)

    // 내부 동작:
    // - pendingRevalidatedTags: ['products']
    // - pathWasRevalidated = 1 
  }

  // Server Response:
  // Header: x-action-revalidated: "1"
  // - isTagRevalidated = 1 (태그가 있으니)
  // - skipPageRendering = false (pathWasRevalidated가 1이니)
  // Body: {
  //   a: result,
  //   f: [flightData],  
  // }

  // Client:
  // - revalidationKind = 1
  // - currentCacheVersion++ 
  // - Flight data로 즉시 리렌더 
  // - Read-Your-Own-Writes 보장 `;
