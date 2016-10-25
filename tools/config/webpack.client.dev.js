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

config.module = {
  loaders: [
    {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
    {test: /\.css$/, loader: "style-loader!css-loader"}
  ],
},

config.devServer = {
  hot: true,
  path: path.join(__dirname, '../../dist'),
  filename: 'bundle.js',
  publicPath: host + "/dist/",
};

config.output.publicPath = host + "/dist/";

config.plugins = [
  config.plugins[0],
  new webpack.HotModuleReplacementPlugin()
];

export default config;
