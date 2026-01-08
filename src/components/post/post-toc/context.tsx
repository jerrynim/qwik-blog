import { createContextId, type Signal } from "@builder.io/qwik";

export interface TocItem {
    id: string;
    title: string;
    level: number; // 1: title, 2: subtitle, 3: h3, 4: h4, etc.
    element: Signal<Element | undefined>;
}

export interface TocContextValue {
    items: Signal<TocItem[]>;
    registerItem: (item: TocItem) => void;
    unregisterItem: (id: string) => void;
}

export const TocContext = createContextId<TocContextValue>("post-toc-context");
