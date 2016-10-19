import webpack from 'webpack';
import path from 'path';


import config from './webpack.client.js';
var port = process.env.HOT_LOAD_PORT || 8888;

// config.devtool = 'eval';

config.entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:' + port,
  'webpack/hot/only-dev-server',
  "./client.js",
],

config.devServer = {
  colors: true,
  hot: true,
  path: path.join(__dirname, '../../dist'),
  filename: 'bundle.js',
  progress: true,
  publicPath: "http://localhost:"+port+"/dist/",

}

config.output.publicPath = "http://localhost:"+port+"/dist/"

config.plugins = [
  config.plugins[0],
  new webpack.HotModuleReplacementPlugin()
]

export default config;
