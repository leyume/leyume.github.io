import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import react from "@astrojs/react";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      // injectReset: true
    }),
    react(),
    compress(),
  ],
});
