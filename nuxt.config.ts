import path from "path";
import Aura from "@primevue/themes/aura";

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
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/apollo",
    "@primevue/nuxt-module",
  ],
  plugins: ["@/plugins/floating-vue.client.js"],
  primevue: {
    autoImport: true,

    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: "system",
          cssLayer: {
            name: "primevue",
            order: "tailwind-base, primevue, tailwind-utilities",
          },
        },
      },
    },
  },
  colorMode: {
    preference: "system", // default to system preference
    fallback: "light", // fallback mode
    classSuffix: "",
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: import.meta.env.VITE_API,
      },
    },
  },

  googleFonts: {
    families: {
      Roboto: [400, 700],
    },
  },
});
