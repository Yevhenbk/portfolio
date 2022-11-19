/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        mono: ["Share Tech Mono", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
}