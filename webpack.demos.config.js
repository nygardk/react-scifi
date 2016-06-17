var webpack = require('webpack');
var path = require('path');

var ENV = process.env.NODE_ENV;

module.exports = {
  devtool: ENV === 'development' ? 'inline-source-map' : false,
  entry: {
    demo0: ['babel-core/polyfill', './demos/demo0/index.jsx'],
    demo1: ['babel-core/polyfill', './demos/demo1/index.jsx']
  },
  contentBase: './demos',
  output: {
    filename: '[name]/bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'demos')
  },
  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./src/components')
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /build/],
        loader: 'eslint'
      }
    ],
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.jsx?$/,
        loaders: ENV === 'development'
          ? ['react-hot', 'babel']
          : ['babel?comments=false'],
        exclude: /node_modules/
      },
      { test: /\.styl$/, loader: 'style!css!stylus'},
      { test: /\.(eot|otf|woff2?|ttf|svg|png)[\?]?.*$/, loader: 'file-loader' }
    ]
  },
  plugins: ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      }
    }),
  ] : [],
  eslint: {
    configFile: '.eslintrc',
    failOnWarning: false,
    failOnError: false
  }
};
