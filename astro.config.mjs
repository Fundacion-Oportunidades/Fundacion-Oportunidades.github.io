import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
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
  integrations: [tailwind(), preact({ hooks: true })],
  jsxFactory: "h",
  output: "server",
  adapter: vercel(),
});
