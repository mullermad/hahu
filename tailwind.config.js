/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./vueform.config.ts", // or where `vueform.config.js` is located. Change `.js` to `.ts` if required.
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.vue",
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.js",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        secondary: "rgb(68, 79, 96)", // Custom color for text-secondary
        "scrollbar-thumb": "green", // Custom scrollbar thumb color
        "scrollbar-track": "#009688", // Custom scrollbar track color
        primary: "#009688",
        primary4: "#B3E0DB",
        selection: "#009688",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      textOpacity: {
        100: "1", // Setting opacity to 1 (100%)
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@vueform/vueform/tailwind"),
    require("@tailwindcss/typography"),
  ],
};
