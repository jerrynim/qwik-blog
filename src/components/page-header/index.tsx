import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";
import { JerrynimLogo } from "../svgs/jerrynim-logo";

const PageHeader = component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="post-header">
            <a
                href={"https://github.com/jerrynim"}
                target={"_blank"}
                rel="noreferrer"
            >
                <JerrynimLogo />
                jerrynim-Logo
            </a>
        </div>
    );
});

export default PageHeader;
