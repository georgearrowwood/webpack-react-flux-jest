var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = require ('./webpack.config.js');

config.module.loaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['react', 'es2015', 'react-hmre']
    }
  },
  {
    test: /\.css$/,
    loader: "style!css"
  }
];

config.devServer = {
  inline: true,
  progress: true,
  open: true
};

config.plugins = [
  new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development')
    }
  })
];

module.exports = config;
