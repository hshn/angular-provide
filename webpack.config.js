const webpack = require('webpack');
const path = require('path');

module.exports = {
  debug: false,
  devtool: 'source-map',
  entry: 'index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'angular-provide.js',
    sourceMapFilename: 'angular-provide.js.map'
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: path.resolve(__dirname, 'src'),
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' }
    ]
  },
  preLoaders: [
    { test: /\.js$/, loader: 'source-map-loader' }
  ],
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8 : true },
      compress: { screw_ie8: true },
      comments: false
    })
  ]
};
