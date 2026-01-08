import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import {
    PostBody,
    PostHead,
    PostHeadImage,
    PostLink,
    PostTitle,
} from "@components/post";

export const head: DocumentHead = {
    title: "경력 기술서",
    meta: [
        {
            property: "keyword",
            content: "경력 기술서",
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage></PostHeadImage>
            <PostHead>
                <h1>경력 기술서</h1>
            </PostHead>

            <PostBody showBuyMeCoffee={false}>
                <PostTitle title="그리팅" />
                <PostTitle subtitle="Next.js App Router 마이그레이션" />

                <div class="post-details-content">
                    Next.js App Router 마이그레이션을 통해 다음과같은 목표를
                    달성하고자합니다.
                    <ol>
                        <li>대용량 트래픽으로 백엔드 서버 과부하 방지</li>
                        <li>Next.js 스펙 최신화로 기술부채 방지</li>
                        <li>Next.js 서버 컴포넌트 사용으로 성능 향상</li>
                    </ol>
                    고객사에 제공하는 채용사이트는 SSR로 구축되어있어 모든
                    요청마다 서버요청을 수행하여 대기업의 공개채용시 사이트에
                    분당 만건이상의 트래픽이 발생하였습니다. 이때 백엔드에
                    과부하가 발생하여 서버가 다운되는 현상이 발생하였습니다.
                    <br />
                    이를 해결하기위해 캐싱을 고려하였고 이를 구현할 방식은 ISR를
                    사용하는 방법과 Next.js의 cacheComponent를 사용하거나
                    Redis를 사용하는 방법이 있습니다.
                    <br />
                    채용 페이지는 고객사의 디자인 수정이 이루어지면 페이지가
                    갱신되어야하기에 빌드타임에 Static하게 생성될 수 없는
                    상황이고, ISR을 사용하더라도 수정이 이루어진 후에
                    revalidate가 수행되어야합니다.
                    <br />
                    또한 Next.js가 배포된 환경에 k8s self-hosted 환경이기에
                    파드가 여러개인 상황이으로 Vercel의 사용없이 파일 시스템
                    캐싱을 활용하는 것 또한 불안한 요소였습니다.
                    <br />
                    <PostLink href="https://tech.kakao.com/2025/06/26/nextjs-app-router-migration/">
                        카카오 기술블로그 처럼
                    </PostLink>{" "}
                    Next.js ISR 전환과 Redis 외부 캐싱을 사용할 수도 있지만
                    Redis관리및 revalidation 처리에대한 부담이 생기게됩니다.
                    <br />
                    팀 리드와 상황에 맞게 의논 후 Next cacheComponent방식을
                    사용하여 점진적 마이그레이션하는 것으로 결정하였습니다.
                    <br />각 고객사 채용사이트는 subdomain을 가지게되는데(ex:
                    jerrynim.greetinghr.com) 각 고객사의 채용사이트를
                    캐싱하기위해 subdomain을 캐시키로 사용하도록
                    하고자하였습니다.
                    <br />
                    Next.js는 route segment기반이나 tag기반으로 캐싱을하기에
                    요청시 subdomain을 route segment로 사용하여 redirect하는
                    아이디어를 통해 캐싱키로
                    사용하도록하였습니다.([locale]/[subdomain]/...)
                    <br />
                    Next.js Route segment를 params로 사용하다보면 dynamic
                    route와 static route로 인한 params의 props전달이 과도한 dx를
                    해치는 문제가됩니다. 이를 해결할 방법을 찾다가 Next.js
                    github discussion에서 next/root-params라는 비공개 api를 통해
                    props hell을 개선할 수 있었다. 하지만 root-params이기에
                    최상단 layout인 locale과 subdomain을 제외한 params는 여전히
                    props를 통해 전달해여야한다.
                    <br />
                    번역최적화 기존에는 언어별로 모든 번역 data를 전달하고
                    messages객 체를 생성하여 클라이언트로 전달하여 레이아웃에
                    모든 번역을 제공하는 형태였다. 불필요한 번역 데이터가
                    전달되는 오버헤드를 줄이기위하여 페이지별로 번역데이터를
                    분리 및 제공하기 위해 페이지별 코드를 관리하도록 import
                    rule을 수정하고 page별로 번역 message를 import하도록 하였다.
                    또한 기존 lingui 의 singleton 패턴으로인한 새로운 Pod에
                    요청이 된 경우 Instance가 초기화되기 전이여서 번역데이터가
                    존재하지않던 문제또한 수정하였다.
                </div>

                <PostTitle tag="h3">성능 최적화</PostTitle>
                <div class="post-details-content">
                    캐싱 전략 구현 및 성능 개선
                </div>

                <PostTitle tag="h4">번들 사이즈 최적화</PostTitle>
                <div class="post-details-content">
                    코드 스플리팅 및 트리 쉐이킹 적용
                </div>

                <PostTitle tag="h4">렌더링 최적화</PostTitle>
                <div class="post-details-content">
                    서버 컴포넌트를 활용한 렌더링 성능 개선
                </div>

                <PostTitle tag="h3">테스트 및 배포</PostTitle>
                <div class="post-details-content">
                    CI/CD 파이프라인 구축 및 자동화
                </div>
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
