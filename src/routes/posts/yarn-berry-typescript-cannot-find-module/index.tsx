import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBlockquote,
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostImage,
    PostLink,
    PostTag,
    PostTitle,
} from "@components/post";
export const head: DocumentHead = {
    title: "yarn berry cannot find module 해결",
    meta: [
        {
            property: "keyword",
            content: "yarn berry cannot find module vscode",
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage src=""></PostHeadImage>
            <PostHead>
                <h1>yarn berry cannot find module 해결</h1>
                <PostTag tags="yarn berry cannot find module vscode"></PostTag>
                <PostDate>2022-03-07</PostDate>
            </PostHead>
            <PostBody>
                vscode에서 yarn berry 사용시 설치한 모듈들을 찾을 수 없다는
                에러가 뜰때 다음과 같이 실행하면 해결할 수 있다.
                <PostCode code={code1}></PostCode>
                yarn berry 공식 문서에서는 다음과 같이 설명한다.
                <br />
                Smart IDE(예: VSCode 또는 IntelliJ)는 Plug'n'Play 설치 를 사용할
                때 TypeScript가 작동하도록 특별한 구성이 필요합니다 .<br />
                yarn sdks vscode vim지원되는 지정된 편집기에 대한 기본 SDK와
                설정을 모두 생성하는 데 사용 합니다.
                <PostTitle subtitle="[참고자료]"></PostTitle>
                https://yarnpkg.com/getting-started/editor-sdks
                <br />
                https://www.zigae.com/yarn2/
            </PostBody>
        </>
    );
});

export const code1 = `yarn add @yarnpkg/sdks -D
yarn dlx @yarnpkg/sdks vscode
`;
