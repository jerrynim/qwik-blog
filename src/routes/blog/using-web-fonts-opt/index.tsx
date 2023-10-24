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
    title: "자주 사용하는 웹 폰트 최적화",
    meta: [
        {
            property: "keywords",
            content: "web fonts optimize ttf woff",
        },
        {
            property: "description",
            content: `제가 자주 사용하는 웹 폰트 최적화 방법입니다.`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>자주 사용하는 웹 폰트 최적화 방법들</h1>
                <PostTag tags="web fonts optimize ttf woff"></PostTag>
                <PostDate>2023-10-16</PostDate>
            </PostHead>
            <PostBody>
                저는 font-face 를 다음과 같이 사용합니다.
                <PostCode code={code1} language="css" filename="font.css" />
                <ol>
                    <li>
                        <strong>woff2 와 woff 압축 폰트 사용</strong>
                        <br />
                        <PostLink href="https://www.w3schools.com/css/css3_fonts.asp">
                            font의 유형
                        </PostLink>
                        중에서 널리 사용되는 형식을 {"(.ttf),(.otf)"} 가 널리
                        사용됩니다.
                        <br />
                        하지만 해당 포맷은 압축이 되지 않아 파일의 크기가 크기
                        때문에 네트워크 비용이 발생하기 때문에 압축이 된 포맷을
                        사용하는 것이 좋습니다.
                        <br />
                        {"(.woff),(.woff2)"} 은 {"(.ttf),(.otf)"} 에 비해 용량이
                        작아 효율적입니다.
                        <br />
                        다만 지원하지 않는 브라우저가 있으니 woff2 만을 사용하면
                        안되어 woff 까지 사용해주어야합니다.
                        <br />
                    </li>
                    <li>
                        <strong>font-display :swap 사용</strong>
                        <br />
                        <PostLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display">
                            MDN
                        </PostLink>
                        문서에 따르면 폰트를 다운받는 동안에 폰트 차단 기간,
                        폰트 교체 기간, 폰트 실패 기간이 존재하는데 swap은
                        다운로드 되기 전에 잠시 폰트를 차단했다가 준비가
                        완료되면 폰트를 교체하는 방식입니다. 폰트 교체로 인한
                        깜박임과 흔들림을 방지하기 위해 swap을 사용하곤 합니다.
                    </li>
                    <li>
                        <strong>{`src: local("")`}</strong>
                        <br />
                        사용자의 컴퓨터에 이미 폰트가 존재한다면 다운로드 없이
                        로컬 폰트를 사용하도록 설정합니다.
                    </li>
                    <li>
                        <strong>영어, 한글 폰트 분리</strong>
                        <br />
                        unicode-range 를 사용하여 언어별로 폰트를 분리할 수
                        있습니다.
                        <PostCode code={`unicode-range:U+AC00-D7A3;`} />
                        혹은 폰트내에 한글이 없다면 font-family 우선순위를 통해
                        폰트를 다르게 적용할 수 있습니다.
                    </li>
                </ol>
            </PostBody>
        </>
    );
});
export const code1 = `/* nanum-gothic-400 - korean */
@font-face {
    font-family: "Nanum Gothic";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(""),
        url("/fonts/nanum-gothic-v17-korean-regular.woff2") format("woff2"),
        url("/fonts/nanum-gothic-v17-korean-regular.woff") format("woff");
}
/* nanum-gothic-700 - korean */
@font-face {
    font-family: "Nanum Gothic";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(""),
        url("/fonts/nanum-gothic-v17-korean-700.woff2") format("woff2"),
        url("/fonts/nanum-gothic-v17-korean-700.woff") format("woff");
}`;
