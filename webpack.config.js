const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  NODE_ENV: process.env,
};

const PRODUCTION = config.NODE_ENV === 'production';
const DEVELOPMENT = config.NODE_ENV === 'development';

module.exports = {
  devtool: '#cheap-module-source-map',
  entry: {
    index: ['./src/react-scifi.js']
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'react-scifi.js',
    sourceMapFilename: 'react-scifi.map',
    library: 'ReactScifi',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-motion': 'react-motion',
    'prop-types': 'prop-types',
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
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
        include: /node_modules/,
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'stylus-loader' },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
};
