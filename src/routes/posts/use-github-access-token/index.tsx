import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBody,
    PostCode,
    PostHead,
    PostHeadImage,
    PostImage,
    PostLink,
    PostTag,
} from "@components/post";

export const head: DocumentHead = {
    title: "git use a personal access token",
    meta: [
        {
            property: "keywords",
            content: "git personal access token",
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg"></PostHeadImage>
            <PostHead>
                <h1>git use a personal access token</h1>
                <PostTag tags="git personal access token"></PostTag>
            </PostHead>
            <PostBody>
                다음과 같은 에러가 떴을 때에 깃허브의 personal access token을
                사용하도록 설정해주어야 합니다.
                <PostCode code={code1} language="bash"></PostCode>
                첫번째로 personal acess token을 만들어주도록 하겠습니다.
                <ol>
                    <li>
                        create gitgub personal accest token 깃허브의
                        <PostLink href="https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token">
                            Creating a personal access token
                        </PostLink>
                        글을 따라 personal access token을 생성해줍니다. 마지막에
                        만들어진 access token 값을 사용하여야하니 복사하거나
                        따로 저장해주세요!
                    </li>
                    <li>
                        MacOs의 경우 키체인 접근 프로그램을 이용하여 access
                        token을 사용하도록 해줍니다.
                        <PostImage
                            src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628990557/lit-blog/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-15_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.22.20_veq6jt.png"
                            alt="MacOs 키체인 접근"
                            width={"300"}
                        ></PostImage>
                        다음 그림처럼 github로 검색을 하신 후, github.com의
                        암호를 앞에서 만들어둔 personal access token을
                        넣어줍니다.
                        <PostImage
                            src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628990886/lit-blog/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-15_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.26.38_mh8kfn.png"
                            alt="github.com 키체인 변경하기"
                        ></PostImage>
                        이제부터 변경된 personal access token을 컴퓨터에서
                        사용하실 수 있게됩니다!.
                    </li>
                </ol>
            </PostBody>
        </>
    );
});

export const code1 = `remote: Support for password authentication was removed on August 13, 2021.
 Please use a personal access token instead.`;
