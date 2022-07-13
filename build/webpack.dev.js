const webpack = require('webpack');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

const devConfig = {
  mode: 'development',
  // devtool: 'cheap-module-eval-source-map',
  devServer: {
    static: './dist',
    open: true,
    port: 4000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = merge(commonConfig, devConfig);