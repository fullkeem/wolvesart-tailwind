/** @type {import('tailwindcss').Config} */
import { range } from "lodash";

const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) => {
  return range(start, end).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});
};

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      spacing: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      inset: {
        ...pxToRemFunc(0, 1000),
      },
      fontSize: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      lineHeight: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      screens: {
        mobile: "360px",
        tablet: "768px",
        desktop: "1280px",
      },
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
