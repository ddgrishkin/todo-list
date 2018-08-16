const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/app/utils'),
      containers: path.resolve(__dirname, 'src/app/containers'),
      components: path.resolve(__dirname, 'src/app/components'),
      'components-ui': path.resolve(__dirname, 'src/app/components-ui')
    }
  }
}
