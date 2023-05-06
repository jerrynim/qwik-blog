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
} from "@components/post";

export const head: DocumentHead = {
    title: "gRPC 맛보기",
    meta: [
        {
            property: "keyword",
            content: "gRPC",
        },
        {
            property: "description",
            content:
                "gRPC는 구글이 개발한 오픈 소스 RPC(Remote Procedure Call)시스템이다.",
        },
    ],
};
export default component$(() => {
    return (
        <>
            <PostHeadImage></PostHeadImage>
            <PostHead>
                <h1>gRPC 맛보기</h1>
                <PostTag tags="gRPC"></PostTag>
                <PostDate>2023-01-27</PostDate>
            </PostHead>

            <PostBody>
                gRPC는 구글이 개발한 오픈 소스 RPC(Remote Procedure Call)
                시스템이다.
                <br />
                이전까지는 <code>RPC</code> 기능은 지원하지 않고, 메세지( JSON
                등)을 Serialize할 수 있는 프레임워크인
                <code>PB(Protocol Buffer, 프로토콜 버퍼)</code>만을
                제공해왔는데, PB 기반 Serizlaizer에 <code>HTTP/2</code>를
                결합하여 RPC 프레임워크를 탄생시켰다.
                <br />
                여기서 중요한 개념임 RPC, PB, HTTP/2에 대해 먼저 알아보겠습니다.
                <PostTitle subtitle="RPC란?" />
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683278458/grpc%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%A8_xfye3d.png"
                    alt="gRPC 동작"
                />
                RPC(Remote Procedure Call)의 약자로 네트워크로 연결된 서버 상의
                프로시저(함수, 메서드 등)을 원격으로 호출 할 수 있는 기능이다.
                <br />
                RPC는 <code>IDL</code>기반으로 다양한 언어를 가진 환경에서도
                쉽게 확장이 가능하다.
                <br />
                ⇒gRPC에서는 profoBuffer를 IDL로 사용
                <br />
                <code>Stub</code> clinet stub은 함수 호출에 사용된 파라미터의
                변환(Marshalling, 마샬링) 및 함수 실행 후 서버에서 전달 된
                결과의 변활을, server stub은 클라이언트가 전달한 매개변수의
                역변환(Unmarshalling, 언마샬링) 및 함수 실행 결과 변환을
                담당하게 된다.
                <br />
                <br />* <code>프로시저</code>: 결과값에 집중하기 보단 "명령
                단위가 수행하는 절차"를 의미
                <br />* <code>IDL</code>(Interface Definition Language)이란
                말그대로 인터페이스에 대한 정의를 진행하는 언어이며, 각각의
                시스템을 연결하는 고리가 됩니다. <br />* <code>Stub</code>
                (client): Stub Compiler가 IDL 파일을 읽어 원하는 Language로 생성
                <br />
                <br />
                예시
                <PostCode code={code1} filename="hellowrold.proto" />
                <PostCode code={code2} filename="client.js" />
                <PostTitle subtitle="protocol buffer란?" />
                프로토콜 버퍼는 구조화된 데이터를 <code>직렬화</code>하기 위한
                언어 중립적이고 플랫폼 중립적인 확장 가능한 메커니즘입니다.더
                작고 빠르며 네이티브 언어 바인딩을 생성한다는 점을 제외하면
                JSON과 같습니다.
                <PostCode code={code3} />
                <PostLink href="https://github.com/grpc/grpc/blob/master/doc/server-reflection.md">
                    서버 리플렉션
                </PostLink>
                및 
                <PostLink href="https://github.com/grpc/grpc/blob/master/doc/command_line_tool.md">
                    gRPC 명령줄 도구
                </PostLink>
                와 같은 기능은 이진 Protobuf 메시지를 지원하기 위해 존재합니다.
                또한 Protobuf 메시지는
                <PostLink href="https://developers.google.com/protocol-buffers/docs/proto3#json">
                    JSON 변환
                </PostLink>
                을 지원합니다. 자세한 직렬화 과정:
                <PostLink href="https://medium.com/naver-cloud-platform/nbp-기술-경험-시대의-흐름-grpc-깊게-파고들기-2-b01d390a7190"></PostLink>
                참고 :
                <PostLink href="https://protobuf.dev/overview/">
                    https://protobuf.dev/overview/
                </PostLink>
                <PostTitle subtitle="gPRC 배경" />
                소켓은 대부분의 언어에서 API 형태로 제공하는 편리함 때문에
                지금도 많이 사용되고 있지만, 일련의 통신 과정을 직접 구현하므로
                통신 관련 장애를 처리하는 것은 고스란히 개발자의 몫이 됩니다.
                서비스가 고도화될 수록 수백 수천가지 데이터가 돌아다니게 될텐데,
                이에 따라 data formatting 을 하는 것도 점점 어려워지게 되죠.
                <br />
                참고:
                <PostLink href="https://medium.com/naver-cloud-platform/nbp-%EA%B8%B0%EC%88%A0-%EA%B2%BD%ED%97%98-%EC%8B%9C%EB%8C%80%EC%9D%98-%ED%9D%90%EB%A6%84-grpc-%EA%B9%8A%EA%B2%8C-%ED%8C%8C%EA%B3%A0%EB%93%A4%EA%B8%B0-1-39e97cb3460">
                    https://medium.com/naver-cloud-platform/nbp-기술-경험-시대의-흐름-grpc-깊게-파고들기-1-39e97cb3460
                </PostLink>
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683278460/rpc%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9_swrull.png"
                    alt="gRPC 동작방식"
                />
                <ol>
                    <li>
                        1. IDL(Interface Definition Language)를 통해 호출에 대한
                        인터페이스를 정의합니다.
                    </li>
                    <li>
                        2. IDL에 의해 정의된 인터페이스는 client의 stub과
                        server의 skeleton 생성의 기반이 되며, rcpgen(유틸리티)를
                        통해 각각의 stub과 skeleton을 생성합니다.
                    </li>
                    <li>
                        3. 클라이언트는 리모트의 프로시저를 사용하기 위해
                        설계된 스텁의 프로시저를 호출하고, 프로시저 호출에
                        필요한 인자와 비지니스에 로직에 필요한 메소드를
                        호출합니다.
                    </li>
                    <li>
                        4. 스텁은 서버가 이해할 수 있는 형태로 데이터의 캐스팅
                        진행하고, 서버 측 RPC로 호출을 진행합니다.
                    </li>
                    <li>5. 서버는 수신된 호출에 대한 데이터를 처리합니다.</li>
                    <li>
                        6. 서버측 RPC 프로토콜은 처리된 데이터를 캐스팅하여
                        클라이언트로 응답합니다.
                    </li>
                </ol>
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683278458/rpc%E1%84%90%E1%85%A9%E1%86%BC%E1%84%89%E1%85%B5%E1%86%AB_zcdsyi.png"
                    alt="gRPC 동작방식2"
                />
                <PostTitle subtitle="HTTP2" />
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683278458/http2%E1%84%8E%E1%85%A1%E1%84%8B%E1%85%B5_ev1hqq.png"
                    alt="HTTP1 vs HTTP2"
                />
                http/1.1은 기본적으로 클라이언트의 요청이 올때만 서버가 응답을
                하는 구조로 매 요청마다 connection을 생성해야만 합니다. cookie
                등 많은 메타 정보들을 저장하는 무거운 header가 요청마다 중복
                전달되어 비효율적이고 느린 속도를 보여주었습니다. 이에
                http/2에서는 한 connection으로 동시에 여러 개 메시지를 주고
                받으며, header를 압축하여 중복 제거 후 전달하기에 version1에
                비해 훨씬 효율적입니다. 또한, 필요 시 클라이언트 요청 없이도
                서버가 리소스를 전달할 수도 있기 때문에 클라이언트 요청을 최소화
                할 수 있습니다.
                <br />
                요약하자면,
                <br /> - http/2 의 장점
                <br />
                &nbsp;ㅇ Header compression
                <br />
                &nbsp;&nbsp;&nbsp;ㅁ header table 과 huffman encoding 기법을
                사용하여 헤더정보를 압축
                <br />
                &nbsp;ㅇ Multiplexed Streams
                <br />
                &nbsp;&nbsp;&nbsp;ㅁ http/1 에서는 요청단위로 커넥션 생성하지만,
                http/2 에서는 한개의 커넥션으로 여러개의 메시지를 동시에 주고
                받을 수 있음.
                <br />
                &nbsp;ㅇ Server Push
                <br />
                &nbsp;&nbsp;&nbsp;ㅁ 요청없이도 서버가 리소스를 보낼 수 있음.
                <br />
                &nbsp;&nbsp;&nbsp;ㅁ 클라이언트 요청을 최소화 할 수 있음.
                <br />
                <PostTitle subtitle="활용방안" />
                거의 모든 서버 시스템 개발에 효율적으로 적용될 수 있지만, 특히
                Microservice Architecture 서비스에 적합합니다. 마이크로서비스는
                작은 서비스들을 유기적으로 결합해 하나의 응용프로그램을 개발하는
                방법론인데요. 구성 서비스가 독립적이기에 개발 및 배포 운영이
                용이하여, 확장을 유연하게 할 수 있죠. 때문에 새로운 기술 도입 및
                변경에도 용이한 면을 보입니다.
                <br />
                <br />
                하지만 분산 시스템 특성상 공통 기능의 중복이 발생하여 메모리를
                비효율적으로 사용할 수도 있고, 프로그램 규모가 커질 수록
                구성원들의 철학이나 기술 스택이 제각기 다르니 운영도
                어려워지는데요. 이에 gRPC는 앞서 언급한 특징 덕에 이러한 단점을
                보완하며 장점을 극대화 시킬 수 있습니다.
                <br />
                <br />
                브라우저를 사용하지 않는 백엔드간 서버 통신이나, 자원 한정적인
                환경에서도 유용합니다. byte/호출/cpu 수 등으로 과금되는 클라우드
                환경에서는 비용 절감의 효과도 생각할 수 있겠네요.
                <br />
                [출처]:
                <PostLink href="https://blog.naver.com/n_cloudplatform/221751405158">
                    [네이버클라우드 기술&경험]시대의 흐름, gRPC 깊게 파고들기 #2
                </PostLink>
                <PostTitle subtitle="gRPC-web" />
                gRPC-WEB은 gRPC를 브라우저에서 사용가능하도록 브라우저 지원을
                추가한 스펙입니다.
                <br />
                Envoy proxy등의 응답 변환 Proxy 서버를 통해 요청 및 응답을
                브라우저가 처리할 수 있도록 변환 할 수 있습니다.
                <PostImage
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683278458/grpc-web_jazclf.png"
                    alt="gRPC-web"
                />
                <PostLink href="https://grpc.io/docs/platforms/web/basics/">
                    공식문서 튜토리얼
                </PostLink>
                <PostLink href="https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld">
                    helloworld example
                </PostLink>
                <br />
                gRPC-web 이 proxy를 사용하는 이유:
                <br />
                <PostLink href="https://yuku.takahashi.coffee/blog/2019/01/grpc-proxy-for-grpc-web">
                    https://yuku.takahashi.coffee/blog/2019/01/grpc-proxy-for-grpc-web
                </PostLink>
                <PostLink href="https://github.com/grpc/grpc-web/issues/347">
                    https://github.com/grpc/grpc-web/issues/347
                </PostLink>
                <br />
                브라우저가 지원하는 http2.0은 grpc 에서 필요한 헤더 프로토콜을
                노출하지 않는다.
                <br />
                <br /> 두가지 rpc 모드를 지원한다.
                <br />- Unary RPCs
                <PostLink href="https://github.com/grpc/grpc-web#make-a-unary-rpc-call">
                    (example)
                </PostLink>
                <br />- Server-side Streaming RPCs
                <PostLink href="https://github.com/grpc/grpc-web#server-side-streaming">
                    example
                </PostLink>
                <br />
                <PostLink href="https://www.notion.so/GRPC-0a5a02888f284ebcbc979bebd2597fc0">
                    rpc 통신패턴
                </PostLink>
                <br />
                <PostLink href="https://github.com/grpc/grpc-web">
                    github:grpc-web
                </PostLink>
                <PostTitle subtitle="REST와 차이점" />
                gRPC는 HTTP2를 사용한다.(REST는 HTTP1.1)
                <br />
                gRPC는 protocol buffer data format을 사용한다. REST는 주로
                JSON을 사용한다.
                <br />
                gRPC를 활용하면 server-side-streaming, client-side streaming,
                bidiectonal-streaming과 같은 HTTP/2가 가진 feature를 사용할 수
                있다
                <br />
                내부적으로 Netty(소켓통신)을 사용하고 있다.
                <br />
                이미 배포한 서비스를 중단할 필요 없이 데이터 구조를 바굴 쑤
                있다.
                <br />
                IDL ⇒ 언어 자동 compile(protoc) ⇒ 콜백정의
                <br />
                REST와 비교했을 때 기반 기술이 다르기에 특징도 많이 다르지만,
                가장 두드러진 차이점은 HTTP/2를 사용한다는 것과 프로토콜 버퍼로
                데이터를 전달한다는 점입니다. 그렇기에 Proto File만 배포하면
                환경과 프로그램 언어에 구애받지 않고 서로 간의 데이터 통신이
                가능합니다.
                <PostTitle subtitle="gRPC 장점" />
                <ul>
                    <li>
                        ProtoBuffer를 사용하여 여러 플랫폼과 프로그래밍 언어를
                        사용할 수 있도록 설계되었습니다.
                    </li>
                    <li>
                        gRPC는 Protobuf와 HTTP/2를 사용하기 때문에 REST+JSON
                        통신보다 최대 10배 빠른 성능과 API 보안을 제공합니다.
                    </li>
                    <li>
                        [Streaming] : 클라이언트와 서버가 동시에 응답할 수 있는
                        양방향 전이중 스트리밍.HTTP/3에서도 동작합니다.
                    </li>
                    <li>
                        엔드포인트를 찾는 방법을 정의하기 때문에 URL 이름 지정은
                        더 이상 문제가 되지 않습니다.
                    </li>
                </ul>
                <PostTitle subtitle="gRPC단점" />
                로드밸런서가 HTTP/2를 지원해줘야만 정상적인 로드밸런싱이
                가능:envoy와 같은 revers proxy와의 호환성
                <br />
                성숙의 부족
                <br />
                제한된 브라우저 지원
                <br />
                - gRPC-WEB 사양은 HTTP/1.1 과 HTTP/2를 모두 지원하지만, 현재
                브라우저 API가 HTTP/2 엑세스를 지원하지 않기 때문에 gRPC-WEB을
                사용하여 브라우저에서 서버로 직접 통신을 할 수는 없습니다.
                <br />
                사람이 읽을 수 없음
                <br />- XML 및 JSON과 달리 Protobuf 파일은 데이터가 바이너리
                형식으로 압축되기 때문에 사람이 읽을 수 없습니다.
                <br />
                가파른 학습 곡선
                <br />- 프로토콜 버퍼에 익숙해지고 HTTP/2 마찰에 대처하는 방법을
                찾는 데 시간이 걸립니다
                <PostTitle subtitle="With React-native" />
                <PostLink href="https://gaitatzis.medium.com/building-a-grpc-client-in-react-native-on-ios-4f6dd2df31fc">
                    https://gaitatzis.medium.com/building-a-grpc-client-in-react-native-on-ios-4f6dd2df31fc
                </PostLink>
                <br />
                gRPC 클라이언트 메서드를 네이티브 모듈로 노출
                <PostTitle subtitle="통신패턴" />
                <ul>
                    <li>
                        Unary RPC클라이언트가 단일 함수를 서버에 보내고 단일
                        함수 호출과 같은 단일 응답을받는 단항 RPC.
                        <PostImage
                            src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683278458/unary-rpc_wrzd14.png"
                            alt="Unary RPC"
                        />
                    </li>
                    <li>
                        Server streaming RPC클라이언트가 서버에 요청을 보내고
                        스트림을 가져 와서 일련의 메시지를 다시 읽는 서버
                        스트리밍 RPC.클라이언트는 더 이상 메시지가 없을 때까지
                        리턴 된 스트림에서 읽음.
                        <PostImage
                            src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683278458/server-rpc_qxdhp4.png"
                            alt="Server streaming RPC"
                        />
                    </li>
                    <li>
                        Client streaming RPC클라이언트가 일련의 메시지를
                        작성하고 제공된 스트림을 사용하여 다시 서버로 보내는
                        클라이언트 스트리밍 RPC.클라이언트가 메시지 쓰기를
                        마치면 서버가 메시지를 읽고 응답을 반환 할 때까지 대기.
                        <PostImage
                            src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683278458/clinet-rpc_je4trz.png"
                            alt="Client streaming RPC"
                        />
                    </li>
                    <li>
                        Bidirectional streaming RPC양쪽에서 읽기 / 쓰기 스트림을
                        사용하여 메시지를 주고 받는 양방향 스트리밍 RPC.두
                        스트림은 독립적으로 작동하므로 클라이언트와 서버는
                        원하는 순서대로 읽고/쓰기가 가능.
                        <PostImage
                            src="https://res.cloudinary.com/dij9kacx9/image/upload/v1683278458/bidirectional-rpc_insmls.png"
                            alt="Bidirectional streaming RPC"
                        />
                    </li>
                </ul>
                <br />
                참고:
                <PostLink href="https://codingffler.tistory.com/29">
                    https://codingffler.tistory.com/29
                </PostLink>
                <br />
                참고:
                <PostLink href="https://appmaster.io/ko/blog/grpcneun-mueosibnigga">
                    https://appmaster.io/ko/blog/grpcneun-mueosibnigga
                </PostLink>
                <br />
                참고:
                <PostLink href="https://etloveguitar.tistory.com/107">
                    https://etloveguitar.tistory.com/107
                </PostLink>
                <br />
                참고:
                <PostLink href="https://medium.com/@larbisahli/next-js-server-side-data-fetching-using-grpc-400a4b3bf521">
                    https://medium.com/@larbisahli/next-js-server-side-data-fetching-using-grpc-400a4b3bf521
                </PostLink>
            </PostBody>
        </>
    );
});

export const code1 = `syntax = "proto3";

option java_multiple_files = true;
option java_package = "io.grpc.examples.helloworld";
option java_outer_classname = "HelloWorldProto";
option objc_class_prefix = "HLW";

package helloworld;

// The greeting service definition.
service Greeter {
  // Sends a greeting
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  string message = 1;
}`;

export const code2 = `var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

//stub 
  var client = new hello_proto.Greeter(
    target,
    grpc.credentials.createInsecure()
  );

// 함수명, 인자, 반환값에 대한 데이터형이 정의된 IDL 파일을 rpcgen으로 컴파일하면 stub code가 자동으로 생성됩니다.
  client.sayHello({ name: user }, function (err, response) {
    console.log("Greeting:", response.message);
  });`;

export const code3 = `message Person {
    optional string name = 1;
    optional int32 id = 2;
    optional string email = 3;
  }`;
