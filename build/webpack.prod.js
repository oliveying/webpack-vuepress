const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

const prodConfig = {
  mode: 'production',
  // devtool: 'cheap-module-source-map',
  optimization: {
    usedExports: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
}
module.exports = merge(commonConfig, prodConfig);