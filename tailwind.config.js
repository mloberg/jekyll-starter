module.exports = {
  purge: [
    './**/*.html',
    './**/*.md',
    './_assets/**/*.js',
  ],
  darkMode: 'media', // or 'class' or false
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
