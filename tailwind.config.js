/* eslint-disable global-require */
module.exports = {
  purge: ['./src/pages/**/*.js', './src/components/**/*.js', './src/utils/getTint.js'],
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: 'class',
  theme: {},
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
