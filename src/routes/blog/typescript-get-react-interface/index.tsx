import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostLink,
    PostTag,
} from "@components/post";

export const head: DocumentHead = {
    title: "타입스크립트 react interface 타입 추출하기",
    meta: [
        {
            property: "keywords",
            content: "typescript react interface react-docgen-typescript",
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
                <h1>타입스크립트 interface 타입 추출하기</h1>
                <PostTag tags="개발 책 집필 Next.js"></PostTag>
                <PostDate>2021-07-18</PostDate>
            </PostHead>
            <PostBody>
                <PostLink href="https://github.com/styleguidist/react-docgen-typescript">
                    react-docgen-typescript
                </PostLink>
                를 사용하여 파일을 parse 하면 다음과 같은 객체의 배열을 얻을 수
                있다.
                <PostCode code={code1} />
                궁극적으로 다음과 같은 형태의 객체를 구하려고 하는데
                <PostCode code={code2} />
                이를 위해 간단한 코드를 작성합니다
                <PostCode code={code3} />
                이때 기본 react의 타입또한 포함되므로 필터링을 해주도록 합니다.
                <PostCode code={code4} />
            </PostBody>
        </>
    );
});

export const code1 = `{
	tags: {};
	filePath: "/Users/jerrynim/Desktop/components/index.ts";
	description: "";
	displayName: "Component";
	methods: [];
	props: {
		description: "",
		name: "",
		parent: {
			fileName: "",
			name: "",
		},
		declarations: [[Object]],
		required: false,
		type: { name: "boolean" },
	}[];
}`;

export const code2 = `	"Text": {
    "size": { "type": "number", "defaultValue": 11 },`;

export const code3 = `const propTypes = parse(path.resolve(__dirname, "./components/index.ts"))
    const props = {}
    
    const getTypefromProps = (props) => {
        const newProps = {}
        Object.keys(props).forEach((key) => {
            newProps[props[key].name] = { type: props[key].type.name, defaultValue: props[key].defaultValue }
        })
        return newProps
    }
    
    propTypes.forEach((propType) => {
        Object.assign(props, {
            [propType.displayName]: getTypefromProps(propType.props),
        })
    })`;
export const code4 = `if (!(props[key].parent?.fileName ?? "").includes("node_modules/react")) {`;
