// eslint.config.js
import globals from "globals"
// # Astro
import astro from "eslint-plugin-astro"
import astroParser from "astro-eslint-parser"
// Svelte
import svelte from "eslint-plugin-svelte"
import svelteParser from "svelte-eslint-parser"

import eslintPrettier from "eslint-plugin-prettier/recommended"

import js from "@eslint/js"
import ts from "typescript-eslint"

import svelteConfig from "./svelte.config.js"

/** @type {import('typescript-eslint').Config} */
export default ts.config([
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  ...svelte.configs.recommended,
  ...astro.configs.recommended,
  eslintPrettier,
  {
    extends: [ts.configs.disableTypeChecked],
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
  {
    ignores: [
      "package-lock.json",
      ".gitignore",
      ".github",
      "**/.vscode",
      "**/.husky",
      "**/.astro",
      "**/public",
      "**/node_modules",
      "**/dist",
    ],
  },
  // Astro
  {
    files: ["**/*.astro", "*.astro"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
      parser: astroParser,
      parserOptions: {
        parser: ts.parser,
        extraFileExtensions: [".astro"],
      },
    },
  },
  // Svelte
  {
    files: ["**/*.svelte", "*.svelte"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
      parser: svelteParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        parser: ts.parser,
        extraFileExtensions: [".svelte"],

        // Svelte Config
        svelteConfig,
      },
    },
  },
])
