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
    require("@tailwindcss/custom-forms"),
  ],
};
