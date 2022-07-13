const webpack = require('webpack');
const commonConfig = require('./webpack.common');
const {
  merge
} = require('webpack-merge');

const devConfig = {
  mode: 'development',
  // devtool: 'cheap-module-eval-source-map',
  devServer: {
    //启动gzip压缩
    compress: true,
    host: 'localhost',
    open: true,
    port: 4000,
    hot: true,
    proxy: {
      '/react': {
        target: 'http://www.dell-lee.com'
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = merge(commonConfig, devConfig);