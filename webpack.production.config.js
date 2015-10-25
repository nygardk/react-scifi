var webpack = require('webpack');
var path = require('path');

var config = require('./webpack.config');

module.exports = Object.assign(config, {
  devtool: false,

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      }
    }),
  ]
});
