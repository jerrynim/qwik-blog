import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import {
    PostBody,
    PostDate,
    PostHead,
    PostHeadImage,
    PostImage,
    PostLink,
    PostTag,
    PostTitle,
} from '@components/post';

export const head: DocumentHead = {
    title: 'xcode simulator 네트워크 모니터링하기',
    meta: [
        {
            property: 'keywords',
            content: 'xcode simulator 네트워크 모니터링 mornitoring proxyman',
        },
        {
            property: 'description',
            content: `xcode simulator 네트워크 모니터링하기`,
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>xcode simulator 네트워크 모니터링하기{"(with proxyman)"}</h1>
                <PostTag tags='xcode simulator network mornitoring proxyman'></PostTag>
                <PostDate>2023-10-16</PostDate>
            </PostHead>
            <PostBody>
                <PostTitle subtitle="proxyman"></PostTitle>
                <PostLink href='https://proxyman.io/'>proxyman</PostLink>을 사용하여 네트워크 트래픽을 확인하고 디버깅할 수 있습니다.<br/>
            proxyman을 설치하고 난후 상단의 툴바에서 Certificate {">"} Install Certificate on iOS {">"} Simulators... 를 선택합니다.
                <PostImage src='https://res.cloudinary.com/dij9kacx9/image/upload/v1697459358/proxyman-toolbar_jevvis.png'/>
                다음과 같은 가이드 창이 뜨게 되는데 순서대로 실행하시면 됩니다.
                <PostImage src="https://res.cloudinary.com/dij9kacx9/image/upload/v1697459509/%08proxyman_simulator_p2lxjg.png"/>
                시뮬레이터 이외에도 모든 네트워크의 모니터링이 가능하며, App별 도메인 별로 필터링이 가능하며, 다양한 필터링을 제공하여 디버깅시에 유용하여 proxyman을 추천드립니다.
                <PostImage src="https://res.cloudinary.com/dij9kacx9/image/upload/v1697459814/proxyman-sample_onqh5w.png"/>
            </PostBody>
        </>
    );
});
