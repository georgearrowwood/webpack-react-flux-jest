const webpack = require('webpack');

var config = require('./webpack');
var port = process.env.HOT_LOAD_PORT || 8888;

config.entry = [
  'webpack-dev-server/client?http://localhost:' + port,
  'webpack/hot/dev-server',
  "./entry.js",
],

config.devServer = {
  hot: true,
  inline: true,
  progress: true,
  open: true
}

config.plugins = [
  config.plugins[0],
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development')
    }
  }),
  new webpack.HotModuleReplacementPlugin()
]

module.exports = config;
