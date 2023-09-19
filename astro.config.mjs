import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "/site/",
  site: "https://fundacion-oportunidades.github.io/site/",
  trailingSlash: "never",
  routes: {
    "/site/": "./src/pages/index.astro",
    "/site/about_us/": "./src/pages/about_us.astro",
  },
  server: {
    port: 3050,
  },
  integrations: [tailwind()],
  jsxFactory: "h",
});
