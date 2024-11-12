// https://nuxt.com/docs/api/configuration/nuxt-config

import path from "path";

const __dirname = path.resolve();
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  alias: {
    "@": path.resolve(__dirname, "./"),
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["@/assets/css/main.css"],
  modules: ["@nuxt/fonts", "@nuxtjs/google-fonts", "@nuxt/icon"],
  googleFonts: {
    families: {
      Roboto: [400, 700],
    },
  },
});