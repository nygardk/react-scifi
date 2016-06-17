var path = require('path');

var webpackConfig = {
  devtool: 'inline-source-map',
  resolve: {
    root: [
      path.resolve('./test'),
      path.resolve('./src/js'),
      path.resolve('./src')
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
      {test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/},
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.styl$/, loader: 'style!css!stylus'}
    ]
  },
  stats: {
    colors: true,
  },
  eslint: {
    configFile: '.eslintrc'
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/react-tools/src/test/phantomjs-shims.js',
      'src/**/__tests__/*-test.js'
    ],
    preprocessors: {
      'src/**/__tests__/*-test.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: {
        chunkModules: false,
        colors: true,
      },
      noInfo: true
    },
    reporters: ['dots'],
    port: 9878,
    colors: true,
    logLevel: config.LOG_INFO,
    // autoWatch: true,
    // singleRun: false,
    browsers: ['PhantomJS']
  });
};
