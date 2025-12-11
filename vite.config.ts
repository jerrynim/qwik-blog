import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [
      //   {
      //     name: "vite4-qwik-compatibility",
      //     // Fix for Vite 4 compatibility with Qwik v1.x
      //     // Qwik uses deprecated ctx.server.hot API (Vite 3), but Vite 4 uses ctx.server.ws
      //     handleHotUpdate(ctx) {
      //       if (ctx.server.ws && !ctx.server.hot) {
      //         (ctx.server as any).hot = ctx.server.ws;
      //       }
      //     },
      //   },
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
    ],
  };
});
