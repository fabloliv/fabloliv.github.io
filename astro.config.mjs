import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://fabloliv.github.io",
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: "prism",
  },
});
