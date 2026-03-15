// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

export default defineConfig({
  site: "https://Tom-Bath.github.io",
  base: "/portfolio-website",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
})