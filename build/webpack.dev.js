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
    // 如果要转发运行在https上，使用
    // secure: false,
    proxy: {
      '/react': {
        target: 'http://www.dell-lee.com',
        // 同源策略，存在跨域
        changeOrigin: true,
        // pathRewrite: {
        //   // 发送请求时，请求路径重写,将/api/xxx -->/xxx(去掉/api)
        //   '^/api': ''
        // }
      }
    },
    // 代理多个路径到同一个target下
    // proxy: [{
    //   context: ['/vue/api', '/react/api'],
    //   target: 'http://www.dell-lee.com'
    // }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = merge(commonConfig, devConfig);