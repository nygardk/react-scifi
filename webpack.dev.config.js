var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve('./src'),
  entry: {
    main: [
      'babel-core/polyfill',
      'index'
    ]
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    root: [
      path.resolve('./src/js'),
      path.resolve('./src')
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /vendor/],
        loader: 'eslint'
      }
    ],
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel?comments=false'], exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.styl$/, loader: 'style!css!stylus'},
      { test: /\.(eot|otf|woff2?|ttf|svg|png)[\?]?.*$/, loader: 'file-loader' }
    ]
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
