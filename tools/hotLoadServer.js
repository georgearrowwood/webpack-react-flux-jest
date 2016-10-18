/* @flow weak */

"use strict";

// This little dev server is basically a wrapped express server that
// 'hot loads' our javascript for super fast live reload in development
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev');

var port = process.env.HOT_LOAD_PORT || 8888;

// var cc = {hot: true,
// // path: path.join(__dirname, '../dist'),
// filename: 'bundle.js',
// publicPath: "http://localhost:8888/dist/"}


new WebpackDevServer(webpack(config), config.devServer)
  .listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Hot load server listening at localhost:' + port);
});
