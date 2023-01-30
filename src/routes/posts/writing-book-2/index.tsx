import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
    PostBody,
    PostDate,
    PostHead,
    PostHeadImage,
    PostTag,
    PostTitle,
} from "@components/post";

export const head: DocumentHead = {
    title: "책을 쓰게 된 이야기 - 2부",
    meta: [
        {
            property: "keywords",
            content: "개발 책 집필 Next.js",
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage src="https://res.cloudinary.com/dij9kacx9/image/upload/v1627115456/lit-blog/Desktop_-_3_yx69ez.jpg"></PostHeadImage>
            <PostHead>
                <h1>책을 쓰게 된 이야기 - 2부</h1>
                <PostTag tags="개발 책 집필 Next.js"></PostTag>
                <PostDate>2021-07-18</PostDate>
            </PostHead>
            <PostBody>
                안녕하세요. '클론코딩으로 시작하는 Next.js'의 저자 제리님입니다.
                집필을 마무리하고 어느 정도의 시간이 지나 책을 집필하게 된
                이야기를 풀어보고자 합니다. 이야기는 시간의 순서대로 써나가
                보도록 하겠습니다. 1부에서는 책을 쓰면서 겪는 과정을
                이야기했다면, 2부에서는 책을 쓸 때에 도움이 되는 내용들을
                되돌아보며 이야기를 써보려고 합니다.
                <PostTitle subtitle="피드백"></PostTitle>
                1,2차 마감을 하면서 담당자분에게 피드백을 받게 되었습니다.
                피드백을 통하여 책을 작성할 때에는 글 이외에 고려해야 할 것들이
                많다는 것을 알았습니다.
                <PostTitle subtitle="목차"></PostTitle>
                책들을 보다 보면 첫 부분에는 서문, 목차로 시작하게 되는데 책을
                쓰기 전에 목차를 만들어 둔 것은 책을 쓰다 보면 계속 바뀌게
                됩니다. 그래서 후에 목차 번호를 변경하게 되면 앞 뒤로 숫자들을
                일일이 변경해 주어야 합니다. 예로 1부터 17장을 작성하였는데
                중간에 2장을 새로 추가하면 기존 2부터 17까지 작성한 목차를
                수정하여야 합니다. 그래서 번호를 미리 써두지 않았으면 그런
                고생을 줄일 수 있지 않았을까 생각하고 있습니다.
                <PostTitle subtitle="그림 번호"></PostTitle>
                책에 있는 그림들을 보면 하단에 [그림 12-1]처럼 쓰여있는 것을 볼
                수 있는데요. 이는 책에서는 필수적인 요소로 그림마다 작성해
                주어야 합니다. 목차와 마찬가지로 이 또한 중간에 이미지가
                추가되면 뒤의 그림 번호들을 수정해주어야 하기 때문에 그림 번호는
                후에 한 번에 한다면 좋을 것 같습니다.
                <PostTitle subtitle="색인"></PostTitle>
                책의 마지막 장에는 '찾아보기'처럼 키워드에 대한 정보를 찾을 수
                있도록 키워드와 페이지 번호를 기록하게 됩니다. 책을 작성을
                끝내고 후에 작업을 하게 되었는데 놓치는 부분이 있을 수 있기
                때문에, 책을 작성하는 도중에 키워드를 정의할 때 색인에 추가하면
                편리할 것 같습니다. ex{")"} react 2
                <PostTitle subtitle="그림"></PostTitle>
                그림을 사용할 때에는 알맞은 크기로 넣어주어야 하며, 코드
                이미지를 사용할 때에는 light 테마의 이미지를 사용하여야 합니다.
                후에 교정 과정에서 이미지를 수정할 수 있지만 미리 알아두면
                좋습니다.
                <PostTitle subtitle="말투"></PostTitle>
                기술 책은 객관적인 정보를 제공하는 책이기 때문에 말투 사용에
                있어서 많은 수정이 있었습니다. '~ 같습니다', 처럼 모호한 표현을
                사용하지 않습니다. '위의, 아래에 그림과' : 책은 넘기면서 보기
                때문에 '위' 나 '아래' 같은 표현은 사용하지 않고 '앞의' '다음'과
                같은 단어를 사용하여야 합니다.
                <PostTitle subtitle="마지막 마감"></PostTitle>
                마지막 마감을 남겨두고 피드백의 내용대로 수정하고, 이전에
                미루어둔 설명, 책의 내용 마무리, 반복적인 수정으로 달리면서 1차
                원고를 제출하게 됩니다. 정말 소스코드를 고치게 되어 수정이
                이루어지면 작업량이 5배는 되는 느낌입니다. 하지만 마감은 사람을
                하게 만들었고, 원고를 제출하게 됩니다.(Ulysses를 사용하면
                작업량을 확인할 수 있는데 마감 4주 전부터 작업량이 폭발합니다
                ㅋㅋ)
                <PostTitle subtitle="교정"></PostTitle>
                원고를 제출하게 되면 출판사에서 교정을 하게 됩니다. 이 기간 동안
                출판사에서 오타 점검, 이미지 수정, 말투 수정, 오타 수정 및 내용
                확인 등의 많은 것들을 해줍니다. 교정이 된 책을 보면, 책의 모습을
                갖추게 되면서 이게 내가 쓴 게 맞나 할 정도로 놀랍게 바뀌게
                됩니다. 말투가 교정이 되고, 전문성이 보이게 되고, 디자인이
                추가되는 신기한 경험이었습니다. 교정은 1~2달을 하게 되는데 이
                기간 중에 베타 리더를 모집하고 피드백을 받아 수정을 하게 됩니다.
                <PostTitle subtitle="베타 리더"></PostTitle>
                출판사의 사이트를 통하여 베타 리더를 모집하게 되는데 이 시간이
                생각보다 짧아서 당황스러웠습니다. 모집을 일주일도 안 했고, 책을
                전달하고 7일간의 리뷰 기간을 주게 되었습니다. 기술책을 7일 만에
                보는 것이 가능할까라는 의문이 들었고, 지인이 리뷰를 해주었는데
                코드를 따라 치지는 못하고 내용을 보는 데에는 열심히 하면
                7일이라는 기간 내에 가능했습니다. 책에 대한 리뷰는 내 책을
                읽어주었구나 라는 느낌이 들 정도로 잘 작성해 주셨습니다.
                피드백은 교정이 이루어진 덕분에 많은 제보가 들어오지는
                않았습니다. 저는 지인이 리뷰해 준 덕분에 많은 피드백을 받을 수
                있었습니다.
                <PostTitle subtitle="베타 리더 피드백 반영"></PostTitle>
                베타 리더를 통하여 받은 피드백 및 추가 수정 사항에 대하여 책을
                수정하여야 합니다. 하지만 이때 하는 수정은 이전에 한 수정과는
                많이 다릅니다. 이전에는 텍스트를 사용하여 수정하여 전달했다면,
                이제는 pdf로 만들어진 교정본에 메모를 남기는 방식으로 수정을
                하여야 합니다. 이로 인해서 대규모의 수정은 어려워지고 이미지를
                수정하는 식의 수정이 이루어지게 되어 앞에서 처럼 코드를 바꾸는
                일은 힘든 일입니다. 대략적인 완성본의 책을 수차례 검토하며
                수정을 하였습니다.
                <PostTitle subtitle="출간 직전"></PostTitle>
                책이 거의 완성이 다가온다는 게 느껴지기 시작했습니다. 책의
                뒤표지 내용을 정하고, 아쉬웠던 서문을 수정하고, 작가 소개를
                추가하고, 표지가 정해지게 됩니다. 소스코드를 제출하고 추가
                수정사항을 마무리하여 제가 할 일은 끝이 났습니다. 교정이 되면서
                말투가 달라지고 책을 직접적으로 수정할 수 없게 되면서 내가
                작성한 책을 뺏긴 느낌이었습니다. 마지막 교정 파일은 제가 소유할
                수 없기 때문에 더 그러한 느낌이었습니다.
                <PostTitle subtitle="출간"></PostTitle>
                책이 인쇄되어 서점에 들어가게 되기로 하고, 출판본이 나에게
                전달되니 뿌듯했습니다 ㅎㅎ. 무엇보다 책에 내 이름이 새겨져 있는
                것이 신기했습니다. 지금 책을 보면 내가 이걸 어떻게 했지...라는
                생각만 듭니다. 과거의 내가 했겠지라는 생각뿐입니다. 다시 책을
                쓰게 된다면 이전보다 잘 쓸 수 있겠지만, 만약 다시 책을
                써보겠냐고 나에게 묻는다면 '저는 제 머리카락을 지키겠습니다'라고
                대답하겠습니다.ㅎㅎ
            </PostBody>
        </>
    );
});
