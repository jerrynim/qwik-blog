import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBody,
    PostDate,
    PostHead,
    PostHeadImage,
    PostImage,
    PostLink,
    PostTag,
} from "@components/post";

export const head: DocumentHead = {
    title: "vanilla Javascript 란?",
    meta: [
        {
            property: "keywords",
            content: "vanilla javascript 바닐라 자바스크립트",
        },
        {
            property: "description",
            content: `바닐라 자바스크립트는 Jquery와 같은 프레임워크를 사용하지않는
            순수 자바스크립트를 의미합니다.`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage src="https://res.cloudinary.com/dij9kacx9/image/upload/v1633615729/lit-blog/vanila_azzeyy.jpg"></PostHeadImage>
            <PostHead>
                <h1>vanilla Javascript 란?</h1>
                <PostTag tags="vanilla javascript 바닐라 자바스크립트"></PostTag>
                <PostDate>2021-10-07</PostDate>
            </PostHead>
            <PostBody>
                바닐라 자바스크립트는 Jquery와 같은 프레임워크를 사용하지않는
                순수 자바스크립트를 의미합니다. <br />
                바닐라 자바스크립트라고 불리는건 하나의 개그 요소로,
                자바스크립트 프레임워크를 사용하는 것에만 빠져있고 순수한
                자바스크립트를 모르는 사람들을 위한
                <code>개그</code>입니다.
                <br />
                이러한 개그는 개발자들이 프레임워크 이전에 순수한 자바스크립트에
                대해 알아햐 함을 자각시켜줍니다.
                <br />
                그러니 지금 바로
                <PostLink href="http://vanilla-js.com/">vanilla JS</PostLink>를
                설치하여 사용하십시오! 😜
                <br />
                <br />
                참고1:
                <PostLink href="https://stackoverflow.com/questions/20435653/what-is-vanillajs">
                    what-is-vanillajs-stackoverflow
                </PostLink>
                <br />
                참고2:
                <PostLink href="https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks">
                    learn-vanilla-javascript-before-using-js-frameworks
                </PostLink>
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1633618588/lit-blog/vanilla_b5tzys.png"
                    alt="vanilla-js logo"
                ></PostImage>
            </PostBody>
        </>
    );
});
