// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: replace this with your final domain when you have it
  site: "https://vigarartattoo.pages.dev",

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
