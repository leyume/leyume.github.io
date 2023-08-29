// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives } from "unocss";

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      brand: {
        dark: "#0F0D13",
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        brand: "Poppins",
      },
    }),
  ],
  transformers: [transformerDirectives()],
});
