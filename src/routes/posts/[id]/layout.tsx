import { RequestHandler } from "@builder.io/qwik-city";
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

export const onGet: RequestHandler = async ({ redirect, request }) => {
    redirect(301, request.url.replace("/posts", "/blog"));
};
