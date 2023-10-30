import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostTag,
} from "@components/post";
export const head: DocumentHead = {
    title: "puppeteer-access-popup",
    meta: [
        {
            property: "keyword",
            content: "puppeteer-access-popup",
        },
        {
            property: "description",
            content:
                "To get popup info about page like google account select popup you can use code below",
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage></PostHeadImage>
            <PostHead>
                <h1>puppeteer access popup</h1>
                <PostTag tags="puppeteer-access-popup"></PostTag>
                <PostDate>2023-02-18</PostDate>
            </PostHead>

            <PostBody>
                To get popup info about page like google account select popup,
                you can use code below
                <PostCode code={code1}></PostCode>
            </PostBody>
        </>
    );
});

export const code1 = `const waitForWindow = new Promise<Page>((resolve) => page.on("popup", resolve))
const accountSelectPopup = await waitForWindow

`;
