import { component$ } from "@builder.io/qwik";
import {
    PostBlockquote,
    PostBody,
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
            <head>
                <title>시맨틱 태그</title>
                <meta
                    property="keyword"
                    content="시맨틱 태그 semantic tag no only use div"
                />
                <meta property="og:title" content="시맨틱 태그" />
            </head>
            <PostHeadImage src="https://res.cloudinary.com/dij9kacx9/image/upload/v1633620056/lit-blog/semantic_wlbgsb.jpg"></PostHeadImage>
            <PostHead>
                <h1>시맨틱 태그</h1>
                <PostTag tags="시맨틱 태그 semantic tag no only use div"></PostTag>
                <PostDate>2021-10-09</PostDate>
            </PostHead>
            <PostBody>
                html, css 를 사용하여 화면을 구성하다 보면 다양한 html 태그들을
                사용하여 화면을 구성할 수 있습니다. 하지만
                <code>{"<div>"}</code> 태그만 사용하여도 화면을 원하는대로
                출력하는데에는 문제가 없습니다. <br />
                이에 '그렇다면
                <code>{"<div>"}</code> 태그만 사용하여도 되지 않을까?'' 라는
                의문이 생길 수 있습니다.
                <br />
                결론 부터 말하면 <code>{"<div>"}</code> 태그를 사용하는 것은
                권장되는 방법은 아닙니다. 이것은
                <PostLink href="https://www.w3schools.com/html/html5_semantic_elements.asp">
                    시맨틱 태그(Semantic Tag)
                </PostLink>
                와 관련이 깊습니다.
                <br />
                <PostBlockquote>
                    시맨틱 태그(Semantic Tag)는 의미있는 태그라는 뜻으로,
                    콘텐츠의 내용을 유추 할 수 있도록 이름 지어진 태그를
                    말합니다.
                </PostBlockquote>
                <code>{"<div>"}</code> 태그만 사용하는 대신 시맨틱 태그를
                사용하면 다음과 같은 이점을 얻을 수 있습니다.
                <PostTitle subtitle="시맨틱 태그의 특징"></PostTitle>
                <ul>
                    <li>
                        개발자와 브라우저에 태그의 의미를 알려줄 수 있다. 이는
                        html 구문을 분리하는데 유용하며, 가독성 또한 좋아진다.
                        또한 태그가 가진 기본 기능이나 스타일이 개발을 편리하게
                        해준다.
                    </li>
                    <li>
                        SEO에 유리하다.
                        <br />
                        사람은 페이지를 보고 무엇이 제목이고 콘텐츠인지 구분이
                        가능하지만, 로봇은 구분 할 수 없습니다. 시맨틱 태그를
                        통해 로봇에게 유의미한 콘텐츠를 제공할 수 있습니다.
                    </li>
                    <li>
                        웹 접근성에 좋지 않다.
                        <br />
                        스크린 리더기는 태그를 통해 콘텐츠를 분류하고
                        읽어줍니다.
                    </li>
                </ul>
                또한 <code>{"<div>"}</code> 태그는
                <code>{"display: block;"}</code> 속성을 가진 대표적인 태그로,
                inline 속성의 태그를 대신하여 사용하기에는 적절하지 않습니다.
                이는 디버깅시 불편하게 만듭니다.
                <PostTitle subtitle="시맨틱 태그의 종류"></PostTitle>
                <ul>
                    <li>{"<article>"}</li>
                    <li>{"<aside>"}</li>
                    <li>{"<figcaption>"}</li>
                    <li>{"<figure>"}</li>
                    <li>{"<footer>"}</li>
                    <li>{"<header>"}</li>
                    <li>{"<main>"}</li>
                    <li>{"<mark>"}</li>
                    <li>{"<nav>"}</li>
                    <li>{"<section>"}</li>
                    <li>{"<summary>"}</li>
                    <li>{"<time>"}</li>
                </ul>
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1633766070/lit-blog/img_sem_elements_j2mghy.gif"
                    alt="시맨틱 태그 이미지"
                    width="300"
                ></PostImage>
                <PostTitle subtitle="넌 시맨틱 태그의 종류"></PostTitle>
                <ul>
                    <li>{"<div>"}</li>
                    <li>{"<span>"}</li>
                </ul>
                참고 :
                <PostLink href="https://www.w3schools.com/html/html5_semantic_elements.asp">
                    W3C sematin elements
                </PostLink>
                <br />
                참고 :
                <PostLink href="https://dev.to/kenbellows/why-i-care-about-the-semantic-web-2kn7">
                    Why I care about the Semantic Web - Dev
                </PostLink>
                <PostTitle subtitle="결론"></PostTitle>
                <code>{"<div>"}</code> 태그와 같은 non-sementic 태그보다는
                시맨틱 태그를 사용하는 것이 좋습니다!.
            </PostBody>
        </>
    );
});
