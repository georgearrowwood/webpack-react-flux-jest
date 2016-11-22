import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

var host = "http://localhost:8888"

const config = {
  context: path.resolve(__dirname, '../../app'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?' + host,
    'webpack/hot/only-dev-server',
    "./client-dev.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, '../../dist'),
    publicPath: host + "/dist/"
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ],
  },
  devServer: {
    hot: true,
    path: path.join(__dirname, '../../dist'),
    filename: 'bundle.js',
    publicPath: host + "/dist/",
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'config': JSON.stringify('development'),
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

export default config;
