import { component$, useVisibleTask$, useStyles$ } from "@builder.io/qwik";
import {
    QwikCityProvider,
    RouterOutlet,
    ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import styles from "./styles/resetCss.css?inline";
import paletteStyles from "./styles/palette.css?inline";
import { RouterHead } from "./components/RouterHead";
import { isRobot } from "./utils";

declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
        dataLayer: any;
    }
}

export default component$(() => {
    useStyles$(styles);
    useStyles$(paletteStyles);

    useVisibleTask$(() => {
        if (import.meta.env.PROD && !isRobot(navigator.userAgent)) {
            const script = document.createElement("script");
            const GA_ID = "G-CLE76PBB93";
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            const gtag: any = function () {
                // eslint-disable-next-line prefer-rest-params
                window.dataLayer.push(arguments);
            };

            gtag("js", new Date());
            gtag("config", GA_ID);
        }
    });
    return (
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8" />
                <RouterHead />
            </head>
            <body>
                <RouterOutlet />
                {import.meta.env.PROD && !isRobot && <ServiceWorkerRegister />}
            </body>
        </QwikCityProvider>
    );
});
