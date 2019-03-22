module.exports = {
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_moudules/,
        options: {
          presets: [
            '@babel/react',
          ]
        }
      }
    ]
  }
  
}