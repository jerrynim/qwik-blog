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
    PostBlockquote,
} from "@components/post";
export const head: DocumentHead = {
    title: "yarn workspace nohoist monorepo",
    meta: [
        {
            property: "keywords",
            content:
                "yarn workspace nohoist hoistingLimits monorepo node_modules",
        },
        {
            property: "description",
            content: ` packages/projectB의 호이스팅을 막기 위해서는 projectB가 하나의
                워크스페이스가 되어야하고,
                nmHoistingLimits: workspaces 값을 사용하여
                호이스팅을 막을 수 있습니다.`,
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage></PostHeadImage>
            <PostHead>
                <h1>yarn workspace nohoist</h1>
                <PostTag tags="yarn workspace nohoist hoistingLimits monorepo node_modules"></PostTag>
                <PostDate>2023-01-28</PostDate>
            </PostHead>

            <PostBody>
                <PostTitle subtitle="tl;dr"></PostTitle>
                packages/projectB의 호이스팅을 막기 위해서는 projectB가 하나의
                워크스페이스가 되어야하고,
                <code>nmHoistingLimits: workspaces</code> 값을 사용하여
                호이스팅을 막을 수 있습니다.
                <PostCode
                    code={code4}
                    filename="packages/projectB/.yarrc.yml"
                />
                <PostCode
                    code={code5}
                    filename="packages/projectB/package.json"
                ></PostCode>
                <br />
                다음과 같은 간단한 yarn workspace가 있습니다.
                <PostCode code={code1} filename="파일구조" />
                <PostCode code={code2} filename="/package.json" />
                yarn install 을 하게되면 루트의 node_modules로 패키지가
                호이스팅되게 되는 상황에서, projectb의 패키지를 호이스팅하지
                않기 위해서 nohoist 옵션을 사용해도 호이스팅이 막아지지 않습니다
                <PostCode code={code3} filename="package.json" />
                yarn3을 사용중이시라면 다음과 같은 경고 로그를 볼 수 있습니다.
                <PostCode code="'nohoist' is deprecated, please use 'installConfig.hoistingLimits' instead" />
                <PostLink href="https://yarnpkg.com/configuration/manifest#installConfig.hoistingLimits">
                    yarn config installConfig.hoistingLimits 문서
                </PostLink>
                를 보면 해당 옵션에 대한 설명을 확인할 수 있습니다.
                <PostLink href="https://yarnpkg.com/configuration/yarnrc#nmHoistingLimits">
                    nmHoistingLimits
                </PostLink>
                값을 오버라이드하며 nmHoistingLimits에 대한 설명은 다음과
                같습니다.
                <PostBlockquote>
                    :nmHoistingLimits
                    <br />
                    Defines the highest point where packages can be hoisted. One
                    of workspaces (don't hoist packages past the workspace that
                    depends on them), dependencies (packages aren't hoisted past
                    the direct dependencies for each workspace), or none (the
                    default, packages are hoisted as much as possible). This
                    setting can be overriden per-workspace through the
                    installConfig.hoistingLimits field.
                </PostBlockquote>
                <PostBlockquote>
                    :번역
                    <br />
                    패키지가 호이스팅 될 수 있는 가장 높은 지점을 정의합니다.
                    <br />
                    workspaces: 종속된 워크스페이스를 지나 패키지를 호이스팅하지
                    않습니다.
                    <br />
                    dependencies: 패키지는 워크스페이스의 직접적인 디펜던시를
                    지나 호이스팅 되지 않습니다
                    <br />
                    none: default 이며, 가능한 패키지는 호이스팅 됩니다.
                    <br /> 이 설정은 installConfig.hoistingLimits field를 통해
                    각 워크스페이스에 오버라이드될 수 있습니다.
                </PostBlockquote>
                따라서 packages/projectB의 호이스팅을 막기 위해서는 projectB가
                하나의 워크스페이스가 되어야하고,
                <code>nmHoistingLimits: workspaces</code> 값을 사용하여
                호이스팅을 막을 수 있습니다.
                <PostCode
                    code={code4}
                    filename="packages/projectB/.yarrc.yml"
                />
                <PostCode
                    code={code5}
                    filename="packages/projectB/package.json"
                ></PostCode>
                yarn3에서는 package.json에 workspaces를 설정하지 않고도
                호이스팅을 막을 수 있습니다.
                <PostCode code={code6}></PostCode>
            </PostBody>
        </>
    );
});

export const code1 = `
/
package.json
packages 
├─projectA
│   └─package.json
└─projectB
    └─package.json
`;

export const code2 = `
{
  ...
  "workspaces": [
    "packages/*"
  ]
}
`;

export const code3 = `
...
"workspaces": {
  "packages": [
    "packages/*"
  ],
  "nohoist": [
    "*"
  ]
}`;

export const code4 = `
nmHoistingLimits: workspaces
`;

export const code5 = `
{
    "name": "projectb",
    ...
    "private": true, 
    "workspaces": [
      "*"
    ]
  }  
`;

export const code6 = `
yarn set version berry
cd packages/projectB
yarn`;
