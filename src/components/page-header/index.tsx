import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { JerrynimLogo } from "../svgs/jerrynim-logo";
import styles from "./index.css?inline";

const PageHeader = component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="post-header" aria-hidden="true">
            <Link href={"/"}>
                <JerrynimLogo />
            </Link>
        </div>
    );
});

export default PageHeader;
