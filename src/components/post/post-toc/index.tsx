import {
    $,
    component$,
    Slot,
    useContextProvider,
    useSignal,
    useStyles$,
} from "@builder.io/qwik";
import { TocContext, type TocItem } from "./context";
import styles from "./index.css?inline";

const PostTOC = component$(() => {
    useStyles$(styles);
    const items = useSignal<TocItem[]>([]);
    const registerItem = $((item: TocItem) => {
        if (!items.value.find((i) => i.id === item.id)) {
            items.value = [...items.value, item];
        }
    });

    const unregisterItem = $((id: string) => {
        items.value = items.value.filter((item) => item.id !== id);
    });

    useContextProvider(TocContext, {
        items,
        registerItem,
        unregisterItem,
    });

    const scrollToItem = $((item: TocItem) => {
        const element = item.element.value;
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });

    return (
        <div class="post-toc-container">
            <div class="post-toc-content">
                {items.value.length > 0 && (
                    <aside class="post-toc">
                        <nav class="post-toc-nav">
                            <p class="post-toc-title">목차</p>
                            <ul class="post-toc-list">
                                {items.value
                                    .slice()
                                    .sort((a, b) => {
                                        // Sort by DOM position
                                        const aEl = a.element.value;
                                        const bEl = b.element.value;
                                        if (!aEl || !bEl) return 0;
                                        return aEl.compareDocumentPosition(
                                            bEl,
                                        ) & Node.DOCUMENT_POSITION_FOLLOWING
                                            ? -1
                                            : 1;
                                    })
                                    .map((item) => (
                                        <li
                                            key={item.id}
                                            class={`post-toc-item post-toc-item-level-${item.level}`}
                                        >
                                            <button
                                                class="post-toc-link"
                                                onClick$={() =>
                                                    scrollToItem(item)
                                                }
                                            >
                                                {item.title}
                                            </button>
                                        </li>
                                    ))}
                            </ul>
                        </nav>
                    </aside>
                )}
            </div>
            <Slot />
        </div>
    );
});

export default PostTOC;
