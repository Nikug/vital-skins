/* eslint-disable no-undef */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: colors.gray["900"],
        },
        text: {
          light: colors.gray["100"],
          dark: colors.gray["300"],
        },
        line: {
          DEFAULT: colors.gray["600"],
        },
      },
    },
  },
  plugins: [],
};
