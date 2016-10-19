import webpack from 'webpack';
import path from 'path';


import config from './webpack.client.js';

var host = "http://localhost:8888"


config.entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?' + host,
  'webpack/hot/only-dev-server',
  "./client-dev.js",
],

config.devServer = {
  hot: true,
  path: path.join(__dirname, '../../dist'),
  filename: 'bundle.js',
  publicPath: host + "/dist/",
};

config.output.publicPath = host + "/dist/";

config.plugins = [
  new webpack.HotModuleReplacementPlugin()
];

export default config;
