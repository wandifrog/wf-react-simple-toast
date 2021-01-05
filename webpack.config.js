module.exports = {
  plugins: [
    // '@babel/plugin-proposal-optional-chaining'
  ],
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
