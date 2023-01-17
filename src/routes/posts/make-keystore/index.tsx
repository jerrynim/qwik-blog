import { component$ } from "@builder.io/qwik";
import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostTag,
} from "@components/post";

export default component$(() => {
    return (
        <>
            <head>
                <title>.keystore 생성하는 법 (Mac)</title>
                <meta
                    property="keyword"
                    content="generate keystore android Mac"
                />
                <meta
                    property="og:title"
                    content=".keystore 생성하는 법 (Mac)"
                />
            </head>
            <PostHeadImage src="https://res.cloudinary.com/dij9kacx9/image/upload/v1640702976/lit-blog/key_fzonmy.jpg"></PostHeadImage>
            <PostHead>
                <h1>.keystore 생성하는 법 (Mac)</h1>
                <PostTag tags="generate keystore android Mac"></PostTag>
                <PostDate></PostDate>
            </PostHead>
            <PostBody>
                Making .keystore for android debug
                <PostCode
                    code="keytool -genkey -v -keystore debug.keystore -storepass android -alias <YOUR_ALIAS> -keypass android -keyalg RSA -keysize 2048 -validity 10000
"
                ></PostCode>
                And then, you need to enter First and LastName, Organizational
                Unit, Orgaization, City or Locality, State or Province, Country
                Code (XX) like this
                <PostCode code={code1}></PostCode>
                At last, enter 'Y' and you can get keystore file
                <br />
                <br />
                Because it is debug key, you don't have to enter password for
                it.
                <br />
                <br />
                If you want to generate keystore for release, just remove
                <code>{" -storepass android"}</code>
                <PostCode code="keytool -genkey -v -keystore <KEY_STORE_NAME> -alias <YOUR_ALIAS> -keyalg RSA -keysize 2048 -validity 10000"></PostCode>
                Enter and it will look like this:
                <PostCode code="키 저장소 비밀번호 입력:"></PostCode>
                After enter your PWD and confirm PWD, put the answer as you did
                above
                <PostCode code={code2}></PostCode>
                That's all, you will get your keystore for release
                <br />
                <br />
                To check your keystore, run:
                <PostCode code="keytool -list -v -keystore debug.keystore"></PostCode>
                If you made key without password, password is 'android' <br />
                or just press 'enter'
                <br />
                You can see keystore info like this.
                <PostCode code={code3}></PostCode>
            </PostBody>
        </>
    );
});

export const code1 = `이름과 성을 입력하십시오.
[Unknown]:  jerrynim
조직 단위 이름을 입력하십시오.
[Unknown]:  personal
조직 이름을 입력하십시오.
[Unknown]:  personal
구/군/시 이름을 입력하십시오?
[Unknown]:  seoul
시/도 이름을 입력하십시오.
[Unknown]:  seoul
이 조직의 두 자리 국가 코드를 입력하십시오.
[Unknown]:  kr
CN=jerrynim, OU=personal, O=personal, L=seoul, ST=seoul, C=kr이(가) 맞습니까?`;

export const code2 = `키 저장소 비밀번호 입력:  
새 비밀번호 다시 입력: 
이름과 성을 입력하십시오.
  [Unknown]:  `;

export const code3 = ` 저장소 유형: jks
  키 저장소 제공자: SUN
  
  키 저장소에 1개의 항목이 포함되어 있습니다.
  
  별칭 이름: asdf
  생성 날짜: 2021. 12. 29
  항목 유형: PrivateKeyEntry
  인증서 체인 길이: 1
  인증서[1]:
  소유자: CN=y, OU=y, O=y, L=y, ST=y, C=y
  발행자: CN=y, OU=y, O=y, L=y, ST=y, C=y
  일련 번호: 5aff71e4
  적합한 시작 날짜: Wed Dec 29 00:30:45 KST 2021 종료 날짜: Sun May 16 00:30:45 KST 2049
  인증서 지문:
           MD5:  F5:62:54:69:82:7F:3C:BA:23:AB:A9:D8:07
           SHA1: 17:F5:19:01:6F:2B:7C:4B:BA:1C:13:F9:DE:77:BC:91:
           SHA256: FC:7E:F9:A4:6C:5B:6C:8E:D9:A1:5E:3F:53:66:A4:DB:8D:CC:00:80:88:1C:C4:C1:C2:16:85:
  서명 알고리즘 이름: SHA256withRSA
  주체 공용 키 알고리즘: 2048비트 RSA 키
  버전: 3
  
  확장: 
  
  #1: ObjectId: 2.5.29.14 Criticality=false
  SubjectKeyIdentifier [
  KeyIdentifier [
  0000: 7B 90 01 7F FB B5 E1 A5   72 69 9C E0 BB 68 E8 EA  ........ri...h..
  0010: 64                                        d.@L
  ]
  ]
  
  
  
  *******************************************
  *******************************************
  
  
  `;
