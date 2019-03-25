const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')

const clientConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
        {
        test: /\.css$/,
        //style-loader将css放在style标签里面
        //css-loader合并css代码
        //loader从右到左依次执行
        use:['style-loader', 
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1, //必须执行下面两个模块
            modules: true,
            localIdentName:'[name]_[local]_[hash:base64:5]'
          }
        }, 
        ]
      },
    ]
  }
}

module.exports = merge(config, clientConfig)