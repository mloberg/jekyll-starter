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
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/custom-forms"),
  ],
};
