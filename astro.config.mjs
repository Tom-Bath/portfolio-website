// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

export default defineConfig({
  site: "https://Tom-Bath.github.io",
  base: "/portfolio-website",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
})