import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostTag,
    PostTitle,
} from "@components/post";
export const head: DocumentHead = {
    title: "종료되지 않는 도커 실행하기",
    meta: [
        {
            property: "keyword",
            content: "docker no exit",
        },
        {
            property: "description",
            content: ` 컨테이너를 detached 모드에서 실행하려면, -d=true
            혹은 -d 옵션을 사용하십쇼. Detached 모드는 means
            당신의 터미널의 백그라운드에서 실행됩니다. 인풋을 받거나
            디스플레이 출력을 하지 않습니다.`,
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage></PostHeadImage>
            <PostHead>
                <h1>종료되지 않는 도커 실행하기</h1>
                <PostTag tags="docker no exit"></PostTag>
                <PostDate>2023-02-18</PostDate>
            </PostHead>

            <PostBody>
                <PostCode code={code1}></PostCode>
                <PostTitle subtitle="Detached (-d)"></PostTitle>
                컨테이너를 detached 모드에서 실행하려면, <code>-d=true</code>
                혹은 <code>-d</code> 옵션을 사용하십쇼. Detached 모드는 means
                당신의 터미널의 백그라운드에서 실행됩니다. 인풋을 받거나
                디스플레이 출력을 하지 않습니다.
                <PostTitle subtitle="Option (-i)"></PostTitle>
                attached 되지 않더라고 STDIN을 유지합니다.
                <PostTitle subtitle="Option (-t)"></PostTitle>
                가상 tty를 할당합니다.
                <PostTitle subtitle="Option(-ti)"></PostTitle>
                가상 터미널을 열어 표준 입출력을 전달할 수 있습니다.
                <br />
                출처:https://docs.docker.com/engine/reference/run/
            </PostBody>
        </>
    );
});

export const code1 = `
docker run -dit <DOCKER_ID>
`;
