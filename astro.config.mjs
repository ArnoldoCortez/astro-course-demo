import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://heartfelt-platypus-333417.netlify.app/",
  output: "server",
  adapter: netlify(),
});
