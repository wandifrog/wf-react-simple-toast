module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [
              'env',
              'react'
            ]
          }
        }
      }
    ]
  }
}
