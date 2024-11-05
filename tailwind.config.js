/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/index.vue",
    "./server/api/index.ts",
    "./assets/css/main.css",
    "./assets/css/font.css",
    "./assets/fonts/Dosis-VariableFont_wght.woff2"

  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Dosis', 'sans-serif'], // Zkontroluj, zda je název fontu přesně stejný
      },
  },
  plugins: [],
  }
}
