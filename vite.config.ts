import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import fs from "fs";

export default defineConfig(() => {
    if (process.env.NODE_ENV === "production") {
        const urls: string[] = [];

        const getUrls = (_path: string) => {
            const files = fs.readdirSync(_path);
            files.forEach((filename) => {
                if (filename === "index.tsx") {
                    //? index.ts파일 경로
                    urls.push(_path.replace(`${__dirname}/src/routes`, ""));
                } else if (
                    filename.endsWith(".css") ||
                    filename === "service-worker.ts" ||
                    filename === "menu.md" ||
                    filename === "layout.tsx" ||
                    filename === "e2e-sample"
                ) {
                    //
                } else {
                    //? 폴더는 내부탐색
                    getUrls(`${_path}/${filename}`);
                }
            });
        };
        getUrls(`${__dirname}/src/routes`);
        const urlTags = urls
            .map((url) => {
                if (url !== "/404") {
                    return `  <url>\n    <loc>https://jerrynim.dev${url}</loc>\n  </url>\n`;
                }
            })
            .join("");

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>https://jerrynim.dev/sitemap_post.xml</loc>
      </sitemap>
    </sitemapindex>`;
        const sitemapPost = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlTags}
    </urlset>`;
        try {
            fs.writeFileSync(`${__dirname}/public/sitemap.xml`, sitemap);
            fs.writeFileSync(
                `${__dirname}/public/sitemap_post.xml`,
                sitemapPost,
            );
        } catch (e) {
            console.warn(e);
        }
    }
    return {
        plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    };
});
