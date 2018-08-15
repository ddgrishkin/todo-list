module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-modules'),
    require('autoprefixer')
  ]
}
