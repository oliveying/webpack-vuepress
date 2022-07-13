const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
module.exports = {
  entry: {
    main: './src/index.js',
    sub: './src/index.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: [
            //   ['@babel/preset-env', { targets: "defaults" }]
            // ]
            // 按需引入
            "presets": [["@babel/preset-env", {
              "corejs": 2,
              "useBuiltIns": "usage"
            }]]          
          }  
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]'
          }
        },

      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],

      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }, 'sass-loader', 'postcss-loader'],

      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    static: './dist',
    open: true,
    port: 4200,
    hot: true,
    // hotOnly: true // 模块热更新启动失败时，不重新刷新浏览器
  }
}