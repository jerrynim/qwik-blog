import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("react-native-scrollview-in-pan")
@withPost
export class ReactNativeScrollViewInPan extends LitElement {
    protected render() {
        return html`<post-head-image src=""></post-head-image>
            <PostHead>
                <h1>react-native ScrollView in pan responder</h1>
                <PostTag>react-native ScrollView in pan panresponder</PostTag>
                <PostDate>2020-06-11</PostDate>
            </PostHead>
            <PostBody>
                I want to use react-native ScrollView in panResponder.
                <br />
                I expect to run scroll-event when drag contents in ScrollView. I
                expect panResponder-event occur when drag contents that is not
                in ScrollView, <br />write code:
                <PostCode
                    code="{code1}"
                    language="typescript"
                    filename="Not Working Code1"
                ></PostCode>
                panResponder works, Scroll did not work<br />
                i found that 'onStartShouldSetPanResponder: () => true' makes
                scroll not work<br />
                and when using 'onStartShouldSetPanResponder: () => false'
                panResponder did not work<br />
                <br />
                I found solution for this,
                <ul>
                    <post-list>
                        <PostTitle subtitle
                            >use react-native-gesture-handler</PostTitle
                        >
                        Use 'react-native-gesture-handler' that supports
                        ScrollView in PanResponder<br />
                        but i need to run it with 'react-native-web', WebView<br />
                        'react-native-gesture-handler' does not support this.
                        <br />I need to find way to support web
                    </post-list>
                    <post-list>
                        <PostTitle>stopPropagation in ScrollView</PostTitle>
                        'stop event propagation' works!
                        <PostCode
                            code="{code2}"
                            language="typescript"
                        ></PostCode>
                    </post-list>
                    <post-list>
                        <PostTitle>use inner View in ScrollView</PostTitle>
                        View which has property
                        'onResponderTerminationRequest={() => false}
                        onStartShouldSetResponder={() => true}' makes scrollable
                        write code:
                        <PostCode
                            code="{code3}"
                            language="typescript"
                        ></PostCode>
                    </post-list>
                </ul>
            </PostBody>`;
    }
}

const code1 = `PanResponder.create({
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

const code2 = `<ScrollView onTouchMove={(e)=>{
  e.stopPropagation()
  ...
}}>`;

const code3 = `<ScrollView>
  <View
    onResponderTerminationRequest={() => false}
    onStartShouldSetResponder={() => true}
  >
    ...
  </View>
</ScrollView>`;

declare global {
    interface HTMLElementTagNameMap {
        "react-native-scrollview-in-pan": ReactNativeScrollViewInPan;
    }
}
