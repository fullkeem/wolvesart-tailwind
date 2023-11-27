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
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 100s linear infinite",
        marquee2: "marquee2 100s linear infinite",
      },
    },
  },
  plugins: [],
};
