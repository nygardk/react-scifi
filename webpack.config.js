var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'sourcemap',
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
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.styl$/, loader: 'style!css!stylus'}
    ]
  },
  plugins: [],
  eslint: {
    configFile: '.eslintrc',
    failOnWarning: true,
    failOnError: true
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
};
