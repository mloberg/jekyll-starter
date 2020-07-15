module.exports = {
  purge: [
    "./**/*.html",
    "./**/*.md",
    "./_assets/**/*.js",
  ],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/custom-forms"),
  ],
};
