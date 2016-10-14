const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


const config = {
  context: path.resolve(__dirname, '../app'),
  entry: [
    "./entry.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style!css" }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
module.exports = config;
