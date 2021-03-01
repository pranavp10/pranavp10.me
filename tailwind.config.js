module.exports = {
  purge: ['./src/pages/**/*.js', './src/components/**/*.js', './src/utils/getTint.js'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: 'class',
  variants: {
    typography: ['dark'],
  },
  plugins: [],
};
