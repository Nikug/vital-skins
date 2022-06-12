/* eslint-disable no-undef */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      width: {
        content: "800px",
      },
      maxWidth: {
        content: "800px",
      },
      colors: {
        bg: {
          DEFAULT: colors.gray["900"],
        },
        text: {
          light: colors.gray["100"],
          "light-hover": colors.gray["400"],
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
