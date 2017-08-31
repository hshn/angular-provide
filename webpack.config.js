const path = require('path');

const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    modules: [
      "node_modules",
        path.resolve(__dirname, '.')
    ],
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'source-maps-loader',
      enforce: 'pre'
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        configFile: 'tsconfig.spec.json'
      }
    }]
  },
  plugins: [
    new LoaderOptionsPlugin({
      debug: true
    })
  ]
};
