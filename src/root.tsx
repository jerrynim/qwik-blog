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
                <meta name="viewport" content="width=device-width" />
                <meta property="og:title" content="제리님 블로그" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="제리님 블로그" />
                <meta property="og:locale" content="ko_KR" />
                <meta property="keywords" content="제리님 기술 블로그" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="298" />
                <meta property="og:image:height" content="298" />
                <meta property="og:image:alt" content="제리님 블로그" />
                <meta property="og:url" content="https://jerrynim.dev/" />
                <meta
                    property="og:image"
                    content="https://jerrynim.dev/static/Profile.png"
                />
                <meta
                    property="og:image:secure_url"
                    href="https://jerrynim.dev/static/Profile.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/favicon/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/favicon/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/favicon/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/favicon/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/favicon/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/favicon/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/favicon/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/favicon/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/favicon/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/favicon/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body>
                <RouterOutlet />
            </body>
        </QwikCityProvider>
    );
});
