module.exports = ({ file }) => ({
  parser: file.extname === '.sss' ? 'sugarss' : false,
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'postcss-nested': {},
    cssnano: {}
  }
})
