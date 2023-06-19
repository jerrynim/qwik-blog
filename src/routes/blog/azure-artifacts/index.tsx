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
} from "@components/post";

export const head: DocumentHead = {
    title: "azure-pipelines artifacts publish 와 download 하는 방법",
    meta: [
        {
            property: "keyword",
            content: "azure pipelines artifacts publish download",
        },
        {
            property: "description",
            content:
                "azure-pipelines에서 artifact를 사용하여 다른 파이프라인간에 파일을 공유할 수 있습니다.",
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>{head.title}</h1>
                <PostTag tags="azure pipelines artifacts publish download"></PostTag>
                <PostDate>2023-06-17</PostDate>
            </PostHead>

            <PostBody>
                azure-pipelines에서 artifact를 사용하여 다른 파이프라인간에
                파일을 공유할 수 있습니다.
                <br />
                우선 업로드할 파일을 publish합시다. 이를 위한 예시 코드는 다음과
                같습니다.
                <br />
                <PostCode code={code1} filename="azure-pipelines.yml" />
                업로드 된 artifact는 azure pipeline 대쉬보드에서 다운로드 다음
                그림과 같이 표시되고 다운로드 할 수 있습니다.
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1687012259/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.26.59_uzem0x.png"
                    alt="uploaded artifact"
                />
                이제 아티팩트를 파이프라인에서 download 하는 법을 보도록
                하겠습니다.
                <PostCode code={code2} />
                같은 파이프라인 내에서 artifact를 다운로드 한다면 'current' 를
                사용할 수 있고, 다른 파이프라인에서 생성된 아티팩트를 사용하려면
                경로를 지정하여 다운로드 할 수 있습니다.
                <br />
                참고:
                <PostLink href="https://learn.microsoft.com/en-us/azure/devops/pipelines/artifacts/pipeline-artifacts?view=azure-devops&tabs=yaml">
                    Microsoft 파이프라인 아티팩트 게시 및 다운로드
                </PostLink>
            </PostBody>
        </>
    );
});

export const code1 = `- script: |
mkdir -p $(Build.SourcesDirectory)/artifacts
- publish: "$(Build.SourcesDirectory)/artifacts"
artifact: "artifact_name"`;

export const code2 = `- download: current
artifact: "android_artifacts"
- script: |
    echo $(Pipeline.Workspace)/artifact_name`;
