// @ts-check
// Frameworks
import svelte from "@astrojs/svelte"
import { defineConfig } from "astro/config"

// Styling
import tailwindcss from "@tailwindcss/vite"

// Astro Packages
import icon from "astro-icon"
import playformCompress from "@playform/compress"

import cloudflare from "@astrojs/cloudflare"

export default defineConfig({
	integrations: [svelte(), icon(), playformCompress({ Logger: 2 })],

	vite: {
		plugins: [tailwindcss()],
		build: {
			minify: false,
		},
	},

	experimental: {
		fonts: [
			{
				provider: "local",
				name: "ORV Font",
				cssVariable: "--font-orvconfig",
				fallbacks: ["sans-serif"],
				variants: [
					{
						weight: "normal",
						style: "normal",
						src: ["./src/assets/fonts/Conduit-ITC-Std-Font.otf"],
					},
					// {
					//   weight: "normal",
					//   style: "normal",
					//   src: ["./src/assets/fonts/Delicious-SmallCaps.otf"],
					// },
					// // Bold variants
					// {
					//   weight: "bold",
					//   style: "normal",
					//   src: ["./src/assets/fonts/Delicious-Bold.otf"],
					// },
					// // Italic variants
					// {
					//   weight: "normal",
					//   style: "italic",
					//   src: ["./src/assets/fonts/Delicious-Italic.otf"],
					// },
					// {
					//   weight: "bold",
					//   style: "italic",
					//   src: ["./src/assets/fonts/Delicious-BoldItalic.otf"],
					// }
				],
			},
		],
	},

	adapter: cloudflare(),
})
