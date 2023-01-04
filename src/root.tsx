import { component$, useStyles$, useStylesScoped$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import styles from "./styles/resetCss.css?inline";
import paletteStyles from "./styles/palette.css?inline";

export default component$(() => {
    useStyles$(styles);
    useStyles$(paletteStyles);
    return (
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8" />
            </head>
            <body>
                <RouterOutlet />
            </body>
        </QwikCityProvider>
    );
});
