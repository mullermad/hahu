/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        secondary: "rgb(68, 79, 96)", // Custom color for text-secondary
        "scrollbar-thumb": "green", // Custom scrollbar thumb color
        "scrollbar-track": "#009688", // Custom scrollbar track color
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      textOpacity: {
        100: "1", // Setting opacity to 1 (100%)
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
