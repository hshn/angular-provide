const webpack = require('webpack');
const path = require('path');

const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: path.resolve(__dirname, '../src'),
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
    new ForkCheckerPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
  ]
};
