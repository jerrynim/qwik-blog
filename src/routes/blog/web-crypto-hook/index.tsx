import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBlockquote,
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
    title: "Web Crypto API Hook",
    meta: [
        {
            property: "keywords",
            content: "Web Crypto API Hook",
        },
        {
            property: "description",
            content: `Web Crypto API 와 IndexedDB를 활용하기 위한 React Hook`,
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>Web Crypto API Hook</h1>
                <PostTag tags="Web Crypto API Hook"></PostTag>
                <PostDate>2024-12-10</PostDate>
            </PostHead>
            <PostBody>
                <PostTitle subtitle="Web Crypto API 활용하기 위한 React Hook"></PostTitle>
                <PostLink href=" https://youtu.be/w44YoS_q0H8?feature=shared&t=703">
                    자바스크립트 화이트박스 암호와 크롬 라인 메신저의 보안 강화
                </PostLink>
                세션을 토대로 작성한 코드입니다.
                <br />
                <PostCode code={code1} filename="useCryptoText.ts" />
            </PostBody>
        </>
    );
});

export const code1 = `export const UseCryptoText = () => {
  async function generateCryptoKey() {
    const key = await crypto.subtle.generateKey(
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt'],
    )
    return key
  }
  const encryptText = async (text: string, key: CryptoKey) => {
    const encodedText = new TextEncoder().encode(text)
    //* IV는 대칭 암호화 알고리즘에서 사용되며, 암호화된 데이터의 보안성을 강화하는 데 사용됩니다.
    const iv = crypto.getRandomValues(new Uint8Array(12))
    const encrypted = await window.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      encodedText,
    )

    return { encrypted, iv }
  }

  const decryptText = async (params: {
    encrypted: Uint8Array
    iv: Uint8Array
    key: CryptoKey
  }) => {
    const { encrypted, iv, key } = params
    const decrypted = await window.crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      encrypted,
    )

    return new TextDecoder().decode(decrypted)
  }

  return { generateCryptoKey, encryptText, decryptText }
}
`;
