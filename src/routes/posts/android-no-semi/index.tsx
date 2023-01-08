import { component$ } from "@builder.io/qwik";
import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostImage,
    PostTag,
} from "@components/post";

export default component$(() => {
    return (
        <>
            <PostHeadImage src="https://res.cloudinary.com/dij9kacx9/image/upload/v1640683677/lit-blog/semi_qqxojj.jpg"></PostHeadImage>
            <PostHead>
                <h1>
                    Expected URL scheme 'http' or 'https' but no colon was found
                </h1>
                <PostTag tags="android websocket no colon error"></PostTag>
                <PostDate>2021-12-28</PostDate>
            </PostHead>
            <PostBody>
                You can solve this problem just add semicolon(;) at the end of
                url
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1640683677/lit-blog/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-12-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.03.47_gj5vze.png"
                    alt="Expected URL scheme 'http' or 'https' but no colon was found"
                    width="500"
                ></PostImage>
                and code can be
                <PostCode
                    code="new WebSocket(<YOUR_URL>;)"
                    language="typescript"
                ></PostCode>
            </PostBody>
        </>
    );
});
