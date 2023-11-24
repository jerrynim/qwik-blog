# qwik으로 만드는 블로그

The most common way to write a blog is using Markdown. However, while writing the tutorial, I thought it would be good to include working code in the middle of the article. I could use an external service such as JsFiddle, but I didn't want to go through the hassle of configuring JsFiddle.

So I created a template to write a blog in the editor.

## Components

-   blogquote
-   body
-   buy-me-coffee
-   code
-   date
-   divider
-   head
-   head-image
-   image
-   link
-   series
-   tag
-   title

## Snippet

```
{
	"qwikblog-template": {
		"prefix": "qwikblog-template",
		"body": [
			"import { component$ } from '@builder.io/qwik';",
"import { DocumentHead } from '@builder.io/qwik-city';",
"import {",
"    PostBody,",
"    PostDate,",
"    PostHead,",
"    PostHeadImage,",
"    PostTag,",
"    PostTitle,",
"} from '@components/post';",
"",
"export const head: DocumentHead = {",
"    title: '',",
"    meta: [",
"        {",
"            property: 'keywords',",
"            content: '',",
"        },",
"        {",
"            property: 'description',",
"            content: ``,",
"        },",
"    ],",
"};",
"",
"export default component$(() => {",
"    return (",
"        <>",
"            <PostHeadImage />",
"            <PostHead>",
"                <h1>{head.title}</h1>",
"                <PostTag tags={head.meta![0].content!}></PostTag>",
"                <PostDate>$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE</PostDate>",
"            </PostHead>",
"            <PostBody>",
"                <PostTitle subtitle=''></PostTitle>",
"            </PostBody>",
"        </>",
"    );",
"});",

		],
		"description": "qwikblog-template"
	}
}
```
