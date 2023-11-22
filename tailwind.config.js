/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: "#484848",
        orange: "#F85430",
      },
      fontFamily: {
        sans: ["Inter", "Space Grotesk"],
      },
    },
  },
  plugins: [],
};