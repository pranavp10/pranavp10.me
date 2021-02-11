const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/pages/**/*.js', './src/components/**/*.js', './src/utils/ColorTint.js'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {
      backgroundColor: ['disabled', 'hover', 'focus', 'active'],
      textColor: ['disabled', 'hover', 'focus'],
      borderColor: ['disabled', 'hover', 'focus'],
      cursor: ['disabled', 'hover', 'focus'],
    },
  },
  plugins: [],
};
