const styleLoader = require('style-loader')
const cssLoader = require('css-loader')

module.exports = {
  module: {
    rule: [
      {
        test: /\.css$/,
        loader: 'styleLoader!cssLoader'
      }
    ]
  }
}
