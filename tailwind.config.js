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
        gray2: "#0F0F12",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
        migra: ["Migra"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      content: {
        starIcon: 'url("/images/icon/star-outline.svg")',
      },
    },
  },
  plugins: [],
};
