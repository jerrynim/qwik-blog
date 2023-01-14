import { component$ } from "@builder.io/qwik";
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

export default component$(() => {
    return (
        <>
            <PostHeadImage src=""></PostHeadImage>
            <PostHead>
                <h1>자바스크립트에서 CJS,ESM 은 대체 뭘까?</h1>
                <PostTag tags="cjs esm javascript"></PostTag>
                <PostDate>2022-04-11</PostDate>
            </PostHead>
            <PostBody>
                다음 글에서 번역해서 부분 가져왔습니다.
                <PostLink href="https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm">
                    What the heck are CJS, AMD, UMD, and ESM in Javascript?
                </PostLink>
                <br />
                처음에는, 자바스크립트는 모듈을 import/export 할 방법이
                없었습니다. 이것은 문제입니다. 당신의 앱을 한파일에 쓰는 것을
                상상해 보세요 - 이것은 악몽입니다! 그래서, 뛰어난 사람들이
                자바스크립트에 모듈화를 추가하기 위해 시도했습니다.
                <PostTitle subtitle="CJS"></PostTitle>
                CJS는 Common JS의 줄임말입니다.
                <ul>
                    <li>
                        여러분 중 일부는 노드에서 CJS 구문을 즉시 인식할 수
                        있다. 노드가 CJS 모듈 포맷을 사용하기 때문이다.
                    </li>
                    <li>동기적으로 모듈을 import 한다.</li>
                    <li>
                        node_modules 또는 로컬 디렉토리에서 라이브러리를 import
                        할 수 있다. 어느 쪽이든
                        <PostCode
                            language="typescript"
                            code="const myLocalModule = require('./some/local/file.js')"
                        ></PostCode>
                        <PostCode
                            language="typescript"
                            code="var React = require('react');"
                        ></PostCode>
                        처럼 작동한다.
                    </li>
                    <li>import 할 때, import 한 객체의 복제를 줍니다.</li>
                    <li>
                        브라우저에서 작동하지 않을 것이다. 트랜스 파일 되어야
                        하고 번들 되어야 한다.
                    </li>
                </ul>
                <PostTitle subtitle="ESM"></PostTitle>
                ESM은 ES Modules를 의미한다. 표준 모듈 시스템을 구현하자는 것이
                자바스크립트의 제안이다. 나는 여러분 중 많은 사람들이 이것을
                봤을 것이라고 확신한다.
                <ul>
                    <li>많은 최신 브라우저에서 사용 가능</li>
                    <li>
                        CJS와 같은 단순한 구문과 AMD의 비동기식 구문 두 가지
                        장점을 모두 갖췄다.
                    </li>
                    <li>ES6의 정적 모듈 구조로 인해 트리 쉐이킹 가능</li>
                    <li>
                        E롤업과 같은 번들러가 불필요한 코드를 제거할 수 있도록
                        허용하고, 사이트는 더 빠른 로드를 얻기 위해 더 적은
                        코드를 발송할 수 있다.
                    </li>
                    <li>
                        HTML로 호출할 수 있는 작업:
                        <PostCode code={code1} language="typescript"></PostCode>
                    </li>
                </ul>
                좀 더 자세한 내용은 다음글을 읽으시는 것을 추천드립니다.
                <PostLink href="https://devblog.croquis.com/ko/2022-04-09-1-esm-problem/">
                    ESM 삽질기
                </PostLink>
            </PostBody>
        </>
    );
});

export const code1 = `<script type="module">
import {func1} from 'my-lib';
import { component$ } from '@builder.io/qwik';

func1();
</script>`;
