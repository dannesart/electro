/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        kodchasan: ["Kodchasan", "sans-serif"],
      },
    },
  },
  plugins: [],
  safelist: [
    "safelisted",
    {
      pattern: /bg-(pink)-(100|200|300|400|500|600|700|800)/,
    },
    {
      pattern: /-translate-x-(1|2|3|4|5|6|10|15|20|25|30)/,
    },
  ],
};
