const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const config = require('./webpack.base')

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
        {
        test: /\.css$/,
        //style-loader将css放在style标签里面
        //css-loader合并css代码
        //loader从右到左依次执行
        use:['isomorphic-style-loader', 
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
module.exports = merge(config, serverConfig)