// @ts-check
// Frameworks
import svelte from "@astrojs/svelte"
import { defineConfig } from "astro/config"

// Styling
import tailwindcss from "@tailwindcss/vite"

// Astro Packages
import icon from "astro-icon"
import playformCompress from "@playform/compress"

export default defineConfig({
  integrations: [svelte(), icon(), playformCompress()],
  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: "local",
        name: "ORV Window Font",
        cssVariable: "--font-orv_window-config",
        fallbacks: ["sans-serif"],
        variants: [
          {
            weight: "normal",
            style: "normal",
            src: ["./src/assets/fonts/Conduit-ITC-Std-Font.otf"],
          },
        ],
      },
    ],
  },
})
