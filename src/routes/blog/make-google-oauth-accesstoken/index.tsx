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
    PostSeries,
    PostTag,
} from "@components/post";

export const head: DocumentHead = {
    title: "구글 OAuth 인증 access_token 발급하기",
    meta: [
        {
            property: "keywords",
            content: "google OAuth access_token refresh_token",
        },
        {
            property: "description",
            content: ``,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>{head.title}</h1>
                <PostTag tags={head.meta![0].content!}></PostTag>
                <PostDate>2023-11-18</PostDate>
            </PostHead>
            <PostBody>
                Google API를 사용하기 위해서는 access_token을 발급받아
                사용해야하는 경우가 많습니다.
                <br />
                이를 발급받급 받는 과정을 살펴보도록 하겠습니다.
                <PostImage
                    src={
                        "https://res.cloudinary.com/dij9kacx9/image/upload/v1700318466/oauth_agree_screen_ckhtn8.png"
                    }
                    alt="start_make_consent_screen_1"
                />
                Google Cloud Platform(GCP)에 가셔서 project를 만들고, 사용자
                동의 화면을 만들어 줍니다.
                <PostImage
                    src={
                        "https://res.cloudinary.com/dij9kacx9/image/upload/v1700319126/ouath_screen_1_ftnsyp.png"
                    }
                    alt="start_make_consent_screen_2"
                />
                앱 이름, 사용자 지원 이메일, 개발자 연락처 정보를 추가합니다.
                <br />
                사용자 지원 이메일은 후에 토큰을 발행할 계정을 사용하도록
                합니다.
                <PostImage
                    src={
                        "https://res.cloudinary.com/dij9kacx9/image/upload/v1700319222/ouath_screen2_sfaghj.png"
                    }
                    alt="start_make_consent_screen_3"
                />
                발행할 토큰의 사용 가능한 api의 범위를 추가해 주어야합니다.
                <br />
                사용하실 api를 API 라이브러리에서 추가하는 것을 잊지마세요.
                <PostImage
                    src={
                        "https://res.cloudinary.com/dij9kacx9/image/upload/v1700319359/oauth_screen3_djtckt.png"
                    }
                    alt="start_make_consent_screen_4"
                />
                토큰을 발행할 계정의 이메일을 추가해 줍니다.
                <PostImage
                    src={
                        "https://res.cloudinary.com/dij9kacx9/image/upload/v1700315785/gcp_oatuh_mhojnj.png"
                    }
                    alt="start_make_clinet_id_1"
                />
                사용자 인증 정보 탭으로 이동하여 '+ 사용자 인증 정보 만들기' 를
                선택한 후' OAuth 클라이언트 ID'를 선택합니다.
                <PostImage
                    src={
                        "https://res.cloudinary.com/dij9kacx9/image/upload/v1700316124/gcp_oauth_2_oadndc.png"
                    }
                    alt="start_make_clinet_id_2"
                />
                '웹 애플리케이션'유형을 선택한 후 이름과 승인된 리디렉션 URI를
                추가해 줍니다.
                <br />
                리디렉션 URI는 인증에 필요한 code값 URL 파라미터로 받게될 주소로
                구동되지 않는 주소를 넣어도 무관합니다.
                <PostImage
                    src={
                        "https://res.cloudinary.com/dij9kacx9/image/upload/v1700319776/make_client_id_z5yotp.png"
                    }
                    alt="start_make_clinet_id_3"
                />
                생성된 클라이언트 ID와 클라이언트 Secret을 잘 저장해두세요.
                <br />
                저희는
                <PostLink
                    href={
                        "https://developers.google.com/android-publisher/authorization?hl=ko"
                    }
                >
                    구글 oauth/token API
                </PostLink>
                를 사용하여 access_token과 refresh_token을 얻으려고 합니다.
                <br />
                API를 사용하기 위해서는 client_id, client_secret, redirect_uri가
                필요합니다.
                <br />
                type=offline을 넣는 이유는 취득한 refresh_token을 영구적으로
                사용하기 위함입니다.
                <PostCode code={code1} />
                <PostImage
                    src={
                        "https://res.cloudinary.com/dij9kacx9/image/upload/v1700320500/access_1_y4r7lb.png"
                    }
                    alt="사용자 인증 화면"
                />
                위의 주소를 통해 브라우저에서 접속을 하게되면 로그인을
                필요로합니다.
                <br />
                위에서 추가한 테스트 사용자의 이메일으 사용하여 로그인을 한다면
                액세스 허용을 요청하는 화면을 볼 수 있습니다.
                <PostImage
                    src={
                        "https://res.cloudinary.com/dij9kacx9/image/upload/v1700320687/oauth_code_o78kr4.png"
                    }
                    alt="사용자 인증 code"
                />
                액세스 허용을 진행하면 정의한 리디렉션 URI로 code 파라미터를
                전달받을 수 있습니다.
                <br />
                취득한 code를 사용하여 구글 oauth/token API를 호출하여
                access_token을 취득하도록 하겠습니다.
                <PostCode code={code2} />
                <PostImage
                    src={
                        "https://res.cloudinary.com/dij9kacx9/image/upload/v1700322741/oauth_result_cga6pi.png"
                    }
                    alt={"oatuh/token 결과"}
                />
                access_token을 사용하여 GOOGLE API를 사용할 수 있습니다.
                <br />
                앞으로는 refresh_token을 사용하여 access_token을 취득할 수
                있습니다.
                <PostCode code={code3} />
            </PostBody>
        </>
    );
});

export const code1 = `const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const scope = "https://www.googleapis.com/auth/indexing";
const REDIRECT_URL = "http://localhost:5173";
//* 아래 주소에 GOOGLE_CLIENT_ID,REDIRECT_URL,scope 을 채워넣고 접속해보세요
https://accounts.google.com/o/oauth2/v2/auth?client_id={GOOGLE_CLIENT_ID}&redirect_uri={REDIRECT_URL}&scope={scope}&response_type=code&access_type=offline;
`;

export const code2 = `const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_TOKEN_API = "https://accounts.google.com/o/oauth2/token";
const code=""
const getAccessTokenData ='client_id={GOOGLE_CLIENT_ID}&client_secret={GOOGLE_CLIENT_SECRET}&redirect_uri={REDIRECT_URL}&grant_type=authorization_code&code={code}&access_type=offline';

fetch(GOOGLE_TOKEN_API, {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: getAccessTokenData,
})`;

export const code3 = `
const getRefreshTokenData = "client_id={GOOGLE_CLIENT_ID}&client_secret={GOOGLE_CLIENT_SECRET}&refresh_token={GOOGLE_REFRESH_TOKEN}&grant_type=refresh_token"

fetch(GOOGLE_TOKEN_API, {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: getRefreshTokenData,
})
`;
