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
    PostSeries,
    PostTag,
} from "@components/post";

export const head: DocumentHead = {
    title: "클로저와 메모리: 유용성, 누수 사례, stale closure 진단/해결",
    meta: [
        {
            property: "keywords",
            content:
                "클로저, 메모리 누수, stale closure, 웹 개발, 자바스크립트, 렉시컬 환경, 이벤트 리스너, 타이머, React",
        },
        {
            property: "description",
            content:
                "클로저의 장점(캡슐화/상태 유지)과 전형적 메모리 누수 사례, stale closure 문제의 진단과 해결 방법을 정리합니다.",
        },
    ],
};

const leakDemo = `
// 1) 이벤트 리스너/인터벌 해제 누락으로 누수
const startLeak = () => {
  const big = new Array(1e5).fill("x").join(""); // 메모리 소비
  const onScroll = () => console.log(big.length); // big 캡처
  window.addEventListener('scroll', onScroll);
  // window.removeEventListener('scroll', onScroll); // 해제 누락 → big 보존
};

// 2) 전역/모듈 캐시에 누적
const cache = new Map();
export function cacheUser(user) {
  cache.set(user.id, user); // 제거 미흡 시 계속 쌓임
}
`;

const staleClosureReact = `
// stale closure 방지: 함수형 업데이트/의존성 정합/AbortController
function useSearch(query) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api?q=' + query, { signal: controller.signal })
      .then(r => r.json())
      .then(data => setResult(prev => data)) // 함수형 업데이트로 최신 state 문맥 보장
      .catch(e => { if (e.name !== 'AbortError') console.error(e); });

    return () => controller.abort(); // 언마운트/의존성 변경 시 취소
  }, [query]); // 의존성 정확히 명시

  return result;
}
`;

export default component$(() => {
    return (
        <>
            <PostHeadImage />
            <PostHead>
                <h1>클로저와 메모리: 유용성, 누수 사례, stale closure 진단/해결</h1>
                <PostTag tags={head.meta![0].content!}></PostTag>
                <PostDate>2025-10-18</PostDate>
                <PostSeries title={"웹 개발"} />
            </PostHead>
            <PostBody>
                <PostBlockquote>
                    클로저가 유용한 이유와 메모리 누수의 전형적 사례는 무엇인가요?
                    stale closure 문제는 어떻게 진단·해결하나요?
                </PostBlockquote>

                클로저는 함수가 생성될 때의 렉시컬 환경을 보존하므로, 외부에서
                직접 접근할 수 없는 상태를 캡슐화하고 안전하게 유지할 수 있습니다.
                이 특성은 모듈 패턴, 프라이빗 상태, 고차함수 등에서 핵심적으로
                활용됩니다.
                <br />
                <br />
                중요한 점은 “클로저 자체”가 누수를 만드는 것이 아니라, 장수 객체
                (타이머/리스너/캐시 등)가 클로저나 그 환경을 계속 참조할 때 누수가
                발생한다는 것입니다. GC는 참조가 끊긴(unreachable) 객체만 수거할 수
                있으므로, 해제/정리가 핵심입니다.
                <br />
                <br />
                전형적 누수 사례:
                <br />
                - 이벤트 리스너/인터벌 해제 누락
                <br />
                - 전역/모듈 스코프 캐시(Map/Set)에 항목 누적, 제거 미흡
                <br />
                - DOM 노드와 클로저의 상호 참조로 분리 후에도 참조 잔존
                <br />
                - Observable/Promise 핸들러가 장기간 보관
                <br />
                <br />
                간단 예시:
                <PostCode code={leakDemo} language="typescript" />
                예방은 “참조를 끊는 것”으로 요약됩니다. 예: 리스너 제거,
                clearInterval/clearTimeout 호출, 캐시 항목 삭제 등. null 할당은
                수단 중 하나일 뿐, 핵심은 더 이상 도달할 수 없게 만드는 것입니다.
                <br />
                <br />
                stale closure란?
                <br />
                비동기 콜백/이벤트 핸들러가 “옛 상태/프로퍼티”를 캡처해 최신 값과
                어긋나는 문제를 말합니다. 예를 들어 React에서 의존성 배열 누락,
                오래 실행되는 비동기 작업이 완료된 뒤 언마운트된 컴포넌트의 state를
                갱신하려 하면서 발생합니다.
                <br />
                <br />
                진단·해결:
                <br />
                - DevTools Memory: Heap snapshot 비교, Retainers로 보관 체인 추적
                <br />
                - DevTools Performance: GC 이후에도 Heap이 지속 우상향이면 의심
                <br />
                - React: ESLint `react-hooks/exhaustive-deps` 활용, 함수형 업데이트,
                최신 값을 `useRef`로 유지, AbortController/클린업으로 비동기 취소
                <br />
                <br />
                React 예시:
                <PostCode code={staleClosureReact} language="typescript" />
                <br />
                참고:
                <PostLink href="https://developer.chrome.com/docs/devtools/memory-problems/memory-101">
                    Chrome DevTools: Memory 101
                </PostLink>
                <br />
                <PostLink href="https://react.dev/learn/synchronizing-with-effects">
                    React Docs: Synchronizing with Effects
                </PostLink>
            </PostBody>
        </>
    );
});


