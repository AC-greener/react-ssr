const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  target: 'node',
  mode: 'development',
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_moudules/,
        options: {
          presets: ['@babel/react'],
        }
      }
    ]
  }
}