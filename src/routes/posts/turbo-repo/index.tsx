import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostImage,
    PostLink,
    PostTag,
    PostTitle,
    PostBlockquote,
} from "@components/post";
export const head: DocumentHead = {
    title: "Turborepo 훑어보기",
    meta: [
        {
            property: "keywords",
            content: "turborepo",
        },
        {
            property: "description",
            content: `Turborepo는 자바스크립트와 타입스크립트 코드들을 최적화하기위한 뛰어난 빌드 시스템 입니다.`,
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage></PostHeadImage>
            <PostHead>
                <h1>Turborepo 훑어보기</h1>
                <PostTag tags="turborepo cache parallel execution"></PostTag>
                <PostDate>2023-03-27</PostDate>
            </PostHead>

            <PostBody>
                <PostTitle title={"TurboRepo"}></PostTitle>
                Turborepo is an intelligent build system optimized for
                JavaScript and TypeScript codebases ⇒
                <PostLink href="https://turbo.build/repo">Turborepo</PostLink>는
                자바스크립트와 타입스크립트 코드들을 최적화하기위한 뛰어난 빌드
                시스템 입니다.
                <br />
                <PostTitle subtitle="Features" />
                Incremental builds Building once is painful enough, Turborepo
                will remember what you've built and skip the stuff that's
                already been computed.
                <br />⇒ 빌드 는 한번으로 충분하고, 터보레포는 이미 빌드된 것을
                다시 빌드하지 않는다.
                <PostLink href="https://turbo.build/repo/docs/core-concepts/caching">
                    Core ConcepCacing Tasks
                </PostLink>
                <br />
                input 과 output 이 중요합니다.
                <br /> 여기서 input은 여러분이 작업물이고 output은 캐쉬된 파일과
                로그(stdout)입니다
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683273418/missingCache_wujqmb.png"
                    alt="[turborepo missing cache]"
                />
                주어진 input으로 hash를 생성하고 hash 안에 ouput을
                저장한다.(node_nodules/.cache/turbo)
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683273416/hittingCache_buikap.png"
                    alt="[turborepo hitting the cache]"
                />
                hash가 있다면 stdout 로그를
                replay한다.(workspace/.turbo/turbo-build.log)
                <PostTitle subtitle="Parallel execution" />
                Execute builds using every core at maximum parallelism without
                wasting idle CPUs.
                <br />⇒ 유휴 CPU를 낭비하지 않고 모든 코어를 최대 병렬로
                사용하여 빌드를 실행합니다.
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683273816/pararell_akhifa.png"
                    alt="turbo vs lerna parallel"
                />
                <PostTitle subtitle="Profile in your browser" />
                Generate build profiles and import them in Chrome or Edge to
                understand which tasks are taking the longest.
                <br />
                ⇒빌드 프로파일을 생성하고 Chrome 또는 Edge로 가져와 어떤 작업이
                가장 오래 걸리는지 파악합니다.
                <PostTitle subtitle="Practice" />
                <ol>
                    <li>turbo 설치</li>
                    <li>turbo.json 구성 및 프로퍼티 설명</li>
                    <li>저장된 해쉬와 output 확인</li>
                    <li>재실행 및 변경 실행시 차이점 확인</li>
                    <li>프로파일 및 그래프 확인</li>
                    <li>종속성 추가하는법</li>
                </ol>
                turbo 설치하기
                <PostCode code="yarn add turbo -D"></PostCode>
                <PostCode code={code1} filename="turbo.json" />
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683274806/turbotime_oitd6s.png"
                    alt="turborepo test time"
                />
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683274806/turbo-profiler_nzwr9c.png"
                    alt="turborepo profiler"
                />
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683274806/turbo-graph_q44cd9.png"
                    alt="turborepo graph"
                />
                그래프를 보기 위해선
                <PostLink href="https://graphviz.org/download/">
                    https://graphviz.org/download/
                </PostLink>
                설치 필요
                <PostTitle subtitle="기타" />
                Vercel에서 인수하였고, Go로 작성된 코드를 Rust로 마이그레이션
                진행중이다.
                <br /> <br />
                참고:
                <PostLink href="https://engineering.linecorp.com/ko/blog/monorepo-with-turborepo/">
                    https://engineering.linecorp.com/ko/blog/monorepo-with-turborepo/
                </PostLink>
                <br />
                참고:
                <PostLink href="https://d2.naver.com/helloworld/7553804">
                    https://d2.naver.com/helloworld/7553804
                </PostLink>
            </PostBody>
        </>
    );
});

export const code1 = `{
	"$schema": "https://turbo.build/schema.json",
	"pipeline": {
		"build": {
			"inputs": ["src/**/*.tsx", "src/**/*.ts"],
			"outputs": ["dist/**", "storybook-static/**"],
			"dependsOn": ["^build"]
		},
		"lint": {},
		"dev": {
			"cache": false,
			"persistent": true
		},
	}
}`;
