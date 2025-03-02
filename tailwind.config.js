/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './resources/**/*.{edge,js,ts,jsx,tsx}',
  ],
  plugins: [require("tailwindcss-animate")],
}
