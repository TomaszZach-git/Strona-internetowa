// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Adres docelowy strony — podmień po podpięciu domeny klienta.
const SITE_URL = "https://cieplomir-demo.vercel.app";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap({ filter: (page) => !page.includes("/404") })],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: "always" },
});
