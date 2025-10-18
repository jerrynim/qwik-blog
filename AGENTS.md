# Repository Guidelines

# 프로젝트 구조
qwik을 메인으로 사용합니다
@src/routes/menu.md 를 통해 노출되는 목록을 관리합니다

## 블로그 작성방법
head와 component$을 export하여 콘텐츠를 작성합니다.
@src/components/post의 컴포넌트를 사용하여 콘텐츠를 구성합니다.
```
export const head: DocumentHead = {
export default component$(() => {
    return (
        <>
            <PostHeadImage src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg"></PostHeadImage>
            <PostHead>
                <h1>Lit 튜토리얼 (1/6)</h1>
                <PostTag tags="lit lit-html lit-elemnt tutorial start"></PostTag>
                <PostDate>2021-07-25</PostDate>
                <PostSeries title={"Lit tutorial"} />
            </PostHead>

            <PostBody>
```
@src/routes/menu.md 에 링크를 추가합니다
```
 -   [this 바인딩 규칙: 기본/암시적/명시적/new와 화살표 함수의 lexical this](/blog/frontend/this-binding)
```

## Project Structure & Module Organization
Source lives under `src`: UI components in `src/components`, route-based pages in `src/routes`, shared styles in `src/styles`, and helpers in `src/utils`. Static assets sit in `public`. Adapter-specific build settings live in `adapters/`, and automation scripts (such as search indexing) are under `scripts/`. Review `vercel.json` before changing deployment behavior.

