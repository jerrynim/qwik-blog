import {
    $,
    component$,
    Slot,
    useContextProvider,
    useSignal,
    useStyles$,
    useVisibleTask$,
} from "@builder.io/qwik";
import { TocContext, type TocItem } from "./context";
import styles from "./index.css?inline";

const PostTOC = component$(() => {
    useStyles$(styles);
    const items = useSignal<TocItem[]>([]);
    const activeId = useSignal<string>("");

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
            const rect = element.getBoundingClientRect();
            const elementTop = window.scrollY + rect.top;
            const offsetPosition = elementTop - 100 + 5; // Same offset as updateActiveSection

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    });

    // Track scroll position and update active section
    useVisibleTask$(({ track, cleanup }) => {
        track(() => items.value.length);

        if (items.value.length === 0) return;

        const updateActiveSection = () => {
            const scrollPosition = window.scrollY + 100; // Offset for header

            // Sort items by DOM position
            const sortedItems = items.value.slice().sort((a, b) => {
                const aEl = a.element.value;
                const bEl = b.element.value;
                if (!aEl || !bEl) return 0;
                return aEl.compareDocumentPosition(bEl) &
                    Node.DOCUMENT_POSITION_FOLLOWING
                    ? -1
                    : 1;
            });

            // Find the section that is currently in view
            let currentSection = sortedItems[0];

            for (const item of sortedItems) {
                const element = item.element.value;
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = window.scrollY + rect.top;

                    if (elementTop <= scrollPosition) {
                        currentSection = item;
                    } else {
                        break;
                    }
                }
            }

            if (currentSection) {
                activeId.value = currentSection.id;
            }
        };

        // Initial update
        updateActiveSection();

        // Listen to scroll events with throttling
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateActiveSection();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        cleanup(() => {
            window.removeEventListener("scroll", handleScroll);
        });
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
                                                class={`post-toc-link ${
                                                    activeId.value === item.id
                                                        ? "active"
                                                        : ""
                                                }`}
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
