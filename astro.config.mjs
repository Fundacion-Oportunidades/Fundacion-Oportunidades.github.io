import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
// const isDevelopment = process.env.NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  base: "/",
  site: "https://oportunidades.org.ar/",
  trailingSlash: "never",
  // routes: {
  //  "/site/": "./src/pages/index.astro",
  //  "/site/about_us/": "./src/pages/about_us.astro",
  //},
  server: {
    port: 3050,
  },
  integrations: [tailwind()],
  jsxFactory: "h",
});
