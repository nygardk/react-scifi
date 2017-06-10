const webpack = require('webpack');
const path = require('path');

const config = {
  NODE_ENV: process.env,
};

const PRODUCTION = config.NODE_ENV === 'production';
const DEVELOPMENT = config.NODE_ENV === 'development';

module.exports = {
  devtool: DEVELOPMENT ? 'inline-source-map' : false,
  entry: {
    demo0: [
      DEVELOPMENT && 'webpack-dev-server/client?http://localhost:8080',
      DEVELOPMENT && 'webpack/hot/only-dev-server',
      DEVELOPMENT && 'react-hot-loader/patch',
      'babel-polyfill',
      './demos/demo0/index.jsx',
    ].filter(v => !!v),
  },
  output: {
    filename: '[name]/bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'demos')
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./src/components'),
      'node_modules',
    ],
    extensions: ['.json', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        use: PRODUCTION ? 'eslint-loader' : 'eslint-loader?{emitWarning: true}',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
        include: /node_modules/,
      },
      {
        test: /\.styl$/,
        loader: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'stylus-loader' },
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(eot|otf|woff2?|ttf|svg|png)[\?]?.*$/,
        loader: 'file-loader',
      },
    ],
  },
};
