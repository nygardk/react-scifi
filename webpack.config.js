const webpack = require('webpack');
const path = require('path');

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
    publicPath: 'build/',
    path: path.resolve(__dirname, 'build'),
    filename: 'react-scifi.js',
    sourceMapFilename: 'react-scifi.map',
    library: 'ReactScifi',
    libraryTarget: 'umd'
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
    ],
  },
  plugins: [],
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
};
