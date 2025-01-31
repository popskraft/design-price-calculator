/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./static/**/*.{html,js}",
    "./netlify/functions/**/*.{html,js}",
    "./server.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
