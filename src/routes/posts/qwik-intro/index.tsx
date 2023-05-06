import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostImage,
    PostLink,
    PostTag,
    PostTitle,
    PostBlockquote,
} from "@components/post";
export const head: DocumentHead = {
    title: "가장 빠른 프레임워크 qwik",
    meta: [
        {
            property: "keyword",
            content: "qwik javascript framework react",
        },
        {
            property: "description",
            content:
                "qwik은 웹 애플리케이션 구축에 대한 근본적인 새로운 접근방식을 나타내는 세분화된 레이지 로딩 프레임워크 입니다.",
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage></PostHeadImage>
            <PostHead>
                <h1>가장 빠른 프레임워크 qwik</h1>
                <PostTag tags="qwik javascript framework react"></PostTag>
                <PostDate>2022-11-03</PostDate>
            </PostHead>

            <PostBody>
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683364316/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-06_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.11.15_xrloe1.png"
                    alt="qwik logo"
                />
                <PostLink href="https://qwik.builder.io/docs/">qwik</PostLink>
                is a fine-grained lazy-loading framework representing a
                fundamentally new approach to building web applications.
                <PostBlockquote>
                    qwik은 웹 애플리케이션 구축에 대한 근본적인 새로운 접근
                    방식을 나타내는 세분화된 레이지 로딩 프레임워크 입니다.
                </PostBlockquote>
                <PostTitle subtitle="Qwik의 핵심 정책" />
                <ul>
                    <li>
                        Delay execution and download of JavaScript for as long
                        as possible. <br /> [가능한 자바스크립트의 실행과
                        다운로드를 늦춘다.] ⇒ 번들크기 줄임, 필요한 파일 과
                        chunk 만 다운로드
                    </li>
                    <li>
                        Serialize the execution state of the application and the
                        framework on the server and resume it on the client.
                        <br />
                        [서버에서 응용 프로그램 및 프레임워크 실행 상태를
                        직렬화하고 클라이언트에서 다시 시작합니다.] ⇒ 기존의
                        하이드레이션, qwik의 resumable
                    </li>
                </ul>
                <PostTitle subtitle="Optimizer($)" />
                <PostCode code={code1} />
                [Qwik 컴포넌트]
                <br />
                <br />
                Qwik은 파일들을 symbol이라는 수많은 조각으로 나누게 되는데 $
                마크는 Optimizer가 추출할 기능과 그대로 두어야할 기능을
                알려줍니다. 옵티마이저는 $기호를 보고 lazy-load 하거나 import 할
                symbol을 찾아 적용합니다
                <br />
                <br />
                번들링 중에 Vite 플러그인으로 실행됩니다. 옵티마이저의 목적은
                응용 프로그램을 많은 작은 레이지 로드 가능한 청크로 나누는
                것입니다. 옵티마이저는 표현식(일반적으로 함수)을 새 파일로
                이동하고 표현식이 이동된 위치를 가리키는 참조를 뒤에 남깁니다.
                <br />
                <PostLink href="https://qwik.builder.io/tutorial/events/basic/">
                    버튼 이벤트 튜토리얼
                </PostLink>
                <br />
                ⇒ 서버로 받은 html의 button에는 on:click속성이 chunk의 주소를
                가지고있다. <br />
                ⇒ HTML에는 Qwikloader 스크립트가 인라인되어있고, Qwikloader는
                글로벌 리스너를등록합니다. Qwikloader는 1kb정도이고 1ms안에
                실행합니다. <br />
                ⇒ 버튼을 클릭하게되면 Qwikloader가 이벤트를 가로채고 on:clcik
                값을 다운로드하고 실행합니다 <br />
                *청크의 다운로드와 실행사이의 시간이 생기는것을 방지하기 위해
                컴포넌트와 관련된 코드를 prepetch합니다. <br />
                *다운로드된 청크는 실행에 필요한 함수를 포함하고있습니다.
                <PostTitle subtitle="Resumable" />
                <strong>기존의 하이드레이션 방식에 대한 이해</strong>
                <br />
                SSR,SSG 어플리케이션을 클라이언트에서 실행할때 세가지 정보를
                복원해야합니다 <br />
                1. Listeners - locate event listeners and install them on the
                DOM nodes to make the application interactive.(어플리케이션이
                상호작용되도록 DOM 노드들에 리스너를 설치하고 위치시킵니다)
                <br />
                2. Component tree - build up an internal data structure
                representing the application component tree.(응용 프로그램 구성
                요소 트리를 나타내는 내부 데이터 구조를 구축합니다.)
                <br />
                3. Application state - restore the application
                state.(애플리케이션 상태를 복원합니다.)
                <br />
                <br />
                하이드레이션이 비싼 이유
                <br />
                <br />
                1. 프레임워크는 현재 페이지와 관련된 모든 구성 요소 코드를
                다운로드해야 합니다.
                <br />
                2. 프레임워크는 수신기 위치 및 내부 구성 요소 트리를 다시
                빌드하기 위해 페이지의 구성 요소와 연결된 템플릿을 실행해야
                합니다.
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683366573/ExpensiveHydration_sqvqad.png"
                    alt="expensive_hydration"
                />
                <strong>qwik에서 Resumable을 실행하는 방법</strong>
                Qwik에서 Resumable을 실행하는 방법
                <ul>
                    <li>
                        1. 이벤트 리스너(위에서 설명)
                        <PostCode code={code2}></PostCode>
                    </li>
                    <li>
                        2. 컴포넌트 트리 <br />
                        Rebuild the component hierarchy information without the
                        component code actually being present. The component
                        code can remain lazy.
                        <br /> ⇒ 실제 존재하지 않는 컴포넌트 코드를 제외하고
                        컴포넌트 구성 정보를 리빌드합니다. 컴포넌트는 lazy를
                        유지합니다 <br /> <br />
                        Qwik can do this lazily only for the components which
                        need to be re-rendered rather than all upfront.
                        <br />⇒ Qwik은 모두 미리 리렌더하지 않고 필요한
                        컴포넌트에만 lazy하게 리렌더할 수 있습니다
                        <br /> <br />
                        Qwik collects relationship information between stores
                        and components. This creates a subscription model that
                        informs Qwik which components need to be re-rendered as
                        a result of state change. The subscription information
                        also gets serialized into HTML.
                        <br />⇒ Qwik은 스토어와 컴포넌트 간의 관계 정보를
                        수집합니다. 이렇게 하면 상태 변경의 결과로 다시
                        렌더링해야 하는 구성 요소를 Qwik에 알리는 구독 모델이
                        생성됩니다. 구독 정보도 HTML로 직렬화됩니다.
                    </li>
                    <li>
                        3.어플리케이션 상태
                        <br />
                        기존 프레임워크에는 일반적으로 상태가 하이드레이션의
                        일부로 복원될 수 있도록 애플리케이션 상태를 HTML로
                        직렬화하는 방법이 있습니다. 이러한 방식으로 Qwik과 매우
                        유사합니다. 그러나 Qwik에는 구성 요소의 수명 주기에 더
                        긴밀하게 통합된 상태 관리 기능이 있습니다. 실제로 이것은
                        구성 요소가 구성 요소의 상태와 독립적으로 지연 로드될 수
                        있음을 의미합니다. <br /> ⇒ 상태관리에서 계속…
                    </li>
                </ul>
                <PostTitle subtitle="코드 살펴보기(튜토리얼)" />
                계속해서 코드를 보면서 Qwik의 사용법과 원리를 살펴보도록
                하겠습니다.
                <br />
                <br />
                useStore와 useStyle , 직렬화와 recursive
                <br />
                <br />
                Qwik은 템플릿을 비순차적으로 비동기식으로 렌더링하고 있기 때문에
                독특합니다.
                <br />
                <PostLink href="https://qwik.builder.io/docs/components/rendering/">
                    문서
                </PostLink>
                <br />
                내려받지 않은 요소의 업데이트에는 리렌더되지 않습니다.
                <br />
                다른 프레임워크와 다르게 render()가 비동기입니다
                <br />
                useStylesScoped$ 도 있는데 이것은 클래스네임의 중복을 피할 수
                있다
                <PostCode code={code3} />
                <video
                    controls
                    loop
                    width={"100%"}
                    src="https://res.cloudinary.com/dij9kacx9/video/upload/v1683368657/qwik%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%E1%84%87%E1%85%A7%E1%86%AB%E1%84%92%E1%85%AA_gko06d.mov"
                    autoPlay
                />
                [checked 변화시 dom의 변화]
                <br /> 사용되지 않는 스타일은 포함되지 않았었는데, 필요시에
                style 태그가 추가되는 것을 볼 수 있습니다.
                <br />
                <br />
                useSignal,Slot(children) 사용, 인라인 컴포넌트
                <br />
                <br />
                구성 요소가 다른 구성 요소와 함께 로드되도록 하려면 인라인 구성
                요소를 만듭니다.
                <br />
                상위 요소가 렌더될때 함께 렌더링되고, 함께 번들링 된다.
                <br />
                use등의 훅스를 사용할 수 없다.
                <PostCode code={code4} />
                <PostTitle subtitle="라이프사이클" />
                라이프 사이클이 버전이 1.0으로 올라가면서 변경되어&nbsp;
                <PostLink href="https://qwik.builder.io/docs/components/tasks/">
                    공식문서
                </PostLink>
                를 참고하시기 바랍니다.
                <PostTitle subtitle="Qwik City" />
                Qwik City는 Qwik의 meta-framework로 리액트에서 Next.js,Vue와
                Nuxt, svelte와 Svelte Kit를 생각하시면됩니다.
                <br />
                다음 기능을 제공합니다.
                <br />
                <ul>
                    <li>Directory-based routing</li>
                    <li>Nested layouts</li>
                    <li>File-based menus</li>
                    <li>Breadcrumbs</li>
                    <li>
                        Support authoring content with`.tsx`or`.mdx`file formats
                    </li>
                    <li>
                        <PostLink href="https://qwik.builder.io/qwikcity/data/endpoints/">
                            Data endpoints
                        </PostLink>
                    </li>
                </ul>
                추가로 Next.js와 동일하게 ,public, useLocation,
                useEndPointer(getInitialProps,getServerSideProps의 결과물) SSG의
                <PostLink href="https://qwik.builder.io/qwikcity/static-site-generation/dynamic-routes/">
                    getStaticPaths
                </PostLink>
                제공합니다.
                <PostTitle subtitle="Qwik 사용한 소감" />
                값비싼 하이드레이션을 레이지 로딩을 하고 과 번들의 용량을 줄여
                근본적인 어플리케이션의 성능향상을 프레임워크에서 제공한다는
                것이 매력적이다. 하지만 완전히 그것으로부터 자유롭지 않고
                고려하며 개발해야하는 것에는 다름이 없다.
                <br />
                jsx 형태와 훅스형태는 기존 리액트 사용자가 사용하기에 사용하기
                쉽도록 제작되어있고, 실제로 사용하기에 어려움이 없었다.
                <br />
                Next.js와 같은 QwikCity가 있어 서버사이드 렌더링 및 기타
                편의성도 탁월하다
            </PostBody>
        </>
    );
});

export const code1 = `import { component$, useStyles$ } from "@builder.io/qwik"
import styles from "./style.css?inline"

export default component$(() => {
	useStyles$(styles)

	return <div>hello Qwik</div>
})`;

export const code2 = `<button on:click="./chunk.js#handler_symbol">click me</button>`;

export const code3 = `import { component$, useStore, useStyles$ } from "@builder.io/qwik"
import { QwikCity, RouterOutlet } from "@builder.io/qwik-city"

import styles from "./style.css?inline"

export default component$(() => {
	useStyles$(styles)

	const store = useStore(
		{
			todos: [
				{
					id: 1,
					text: "투두1",
					checked: false,
				},
				{
					id: 2,
					text: "투두2",
					checked: false,
				},
				{
					id: 3,
					text: "투두3",
					checked: false,
				},
			],
			notDescended: "",
		},
		{ recursive: true }
	)
	console.log(store)
	return (
		<div>
			{store.todos.map((todo) => (
				<div>
					<p>{todo.id}</p>
					<p>{todo.text}</p>
					<div
						onClick$={() => {
							store.todos[todo.id - 1].checked = !store.todos[todo.id - 1].checked
						}}>
						{todo.checked ? <p class="color-red">checked</p> : <p>unchecked</p>}
					</div>
				</div>
			))}
			<button
				onClick$={() => {
					store.notDescended = store.notDescended + "1"
				}}>
				change not descended
			</button>
		</div>
	)
})`;

export const code4 = `import { component$, Slot, useStore, useStyles$, useSignal, $ } from "@builder.io/qwik"
import { QwikCity, RouterOutlet } from "@builder.io/qwik-city"

import styles from "./style.css?inline"

interface TodoProps {
	id?: number
	text?: string
	checked?: boolean
}

export const Todo = ({ id, text, checked }: TodoProps) => {
	return (
		<div>
			<p>{id}</p>
			<p>{text}</p>
			<p onClick$={() => {}} class={checked ? "color-red" : undefined}>
				{checked ? "checked" : "unchecked"}
			</p>
			<Slot></Slot>
		</div>
	)
}

export const LazyTodo = component$(({ id, text, checked }: TodoProps) => {
	const _checked = useSignal(!!checked)

	const toggleChecked = $(() => {
		_checked.value = !_checked.value
	})
	return (
		<div>
			<p>{id}</p>
			<p>{text}</p>
			<p onClick$={toggleChecked} class={_checked.value ? "color-red" : undefined}>
				{_checked.value ? "checked" : "unchecked"}
			</p>
			<Slot></Slot>
		</div>
	)
})

export default component$(() => {
	useStyles$(styles)

	const todos = [
		{
			id: 1,
			text: "투두1",
			checked: false,
		},
		{
			id: 2,
			text: "투두2",
			checked: false,
		},
		{
			id: 3,
			text: "투두3",
			checked: false,
		},
	]

	return (
		<div>
			{todos.map((todo, index) => (
				<Todo {...todo}>
					<p>childeren = slot {index}</p>
				</Todo>
			))}

			{todos.map((todo, index) => (
				<LazyTodo {...todo}>
					<p>childeren = slot {index}</p>
				</LazyTodo>
			))}
		</div>
	)
})`;
