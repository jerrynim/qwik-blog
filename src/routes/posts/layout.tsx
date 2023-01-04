import { component$, Slot } from "@builder.io/qwik";
import PageHeader from "@components/page-header";

export default component$(() => {
    return (
        <>
            <PageHeader />
            <Slot />
        </>
    );
});
