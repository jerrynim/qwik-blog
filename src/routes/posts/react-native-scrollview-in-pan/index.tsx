import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import {
    PostBody,
    PostCode,
    PostDate,
    PostHead,
    PostHeadImage,
    PostTag,
    PostTitle,
} from "@components/post";

export const head: DocumentHead = {
    title: "react-native ScrollView in pan responder",
    meta: [
        {
            property: "keywords",
            content: "react-native ScrollView in pan panresponder",
        },
        {
            property: "description",
            content: "react-native ScrollView in pan panresponder",
        },
    ],
};

export default component$(() => {
    return (
        <>
            <PostHeadImage src=""></PostHeadImage>
            <PostHead>
                <h1>react-native ScrollView in pan responder</h1>
                <PostTag tags="react-native ScrollView in pan panresponder"></PostTag>
                <PostDate>2020-06-11</PostDate>
            </PostHead>
            <PostBody>
                I want to use react-native ScrollView in panResponder.
                <br />
                I expect to run scroll-event when drag contents in ScrollView. I
                expect panResponder-event occur when drag contents that is not
                in ScrollView, <br />
                write code:
                <PostCode
                    code={code1}
                    language="typescript"
                    filename="Not Working Code1"
                ></PostCode>
                panResponder works, Scroll did not work
                <br />i found that 'onStartShouldSetPanResponder: () {"=> "}
                true' makes scroll not work
                <br />
                and when using 'onStartShouldSetPanResponder: (){"=> "}false'
                panResponder did not work
                <br />
                <br />I found solution for this,
                <ul>
                    <li>
                        <PostTitle subtitle="use react-native-gesture-handler"></PostTitle>
                        Use 'react-native-gesture-handler' that supports
                        ScrollView in PanResponder
                        <br />
                        but i need to run it with 'react-native-web', WebView
                        <br />
                        'react-native-gesture-handler' does not support this.
                        <br />I need to find way to support web
                    </li>
                    <li>
                        <PostTitle>stopPropagation in ScrollView</PostTitle>
                        'stop event propagation' works!
                        <PostCode code={code2} language="typescript"></PostCode>
                    </li>
                    <li>
                        <PostTitle>use inner View in ScrollView</PostTitle>
                        View which has property 'onResponderTerminationRequest=
                        {() => false}
                        onStartShouldSetResponder={() => true}' makes scrollable
                        write code:
                        <PostCode code={code3} language="typescript"></PostCode>
                    </li>
                </ul>
            </PostBody>
        </>
    );
});

export const code1 = `PanResponder.create({
  onStartShouldSetPanResponder: () => true,
  onMoveShouldSetPanResponder: () => true,
  onPanResponderMove: (event, gestureState) => {}

  ...

  return (<View {...panResponders.panHandlers}>
    <ScrollView >
    ...
    </ScrollView>
  </View>)
`;

export const code2 = `<ScrollView onTouchMove={(e)=>{
  e.stopPropagation()
  ...
}}>`;

export const code3 = `<ScrollView>
  <View
    onResponderTerminationRequest={() => false}
    onStartShouldSetResponder={() => true}
  >
    ...
  </View>
</ScrollView>`;
