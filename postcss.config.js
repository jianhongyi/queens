module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 4,
      propList: ['*'],
      selectorBlockList: [],
      minPixelValue: 8,
      mediaQuery: false
    }
  }
}
