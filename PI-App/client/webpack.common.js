const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry:{ index:'./src/index.tsx',
  another: './src/another-module.jsx',},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname + 'dist')
  },
  optimization: {
    splitChunks: {
         chunks: 'all',
        },
       },
resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
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
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ["file-loader"]
      },
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