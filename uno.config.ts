import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";
import transformerCompileClass from "@unocss/transformer-compile-class";
import presetTagify from "@unocss/preset-tagify";

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      brand: {
        orange: "#F90",
        red: "#ee0000",
        violet: "#5b21b6",
        dark: "#0F0D13",
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTagify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        brandx: "Poppins",
        brand: [
          {
            name: "Poppins",
            weights: ["100", "300", "400", "500", "600", "700", "900"],
            italic: true,
          },
        ],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerCompileClass()],
});
