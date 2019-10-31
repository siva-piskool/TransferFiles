const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname + 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      { 
        test: /\.(pdf|png|jpg|jpeg)$/, 
        loader: 'file-loader' 
      }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}