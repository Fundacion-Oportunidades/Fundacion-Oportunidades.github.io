import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
const isDevelopment = process.env.NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  base: "/",
  site: "https://fundacion-oportunidades.github.io/",
  trailingSlash: "never",
  routes: {
    "/": "./src/pages/index.astro",
    "/about_us/": "./src/pages/about_us.astro",
  },
  server: {
    port: 3050,
  },
  integrations: [tailwind()],
  jsxFactory: "h",
});
