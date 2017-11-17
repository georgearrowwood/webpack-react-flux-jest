const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: path.resolve(__dirname, '../server'),
  entry: [
    'babel-regenerator-runtime',
    './index',
  ],

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  externals: [nodeExternals({
    whitelist: [
      'bootstrap/dist/css/bootstrap.css',
      'babel-regenerator-runtime',
    ],
  })],

  target: 'node',

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(css|scss)$/, loader: 'null-loader' },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        PORT: 8081,
        ENV: JSON.stringify('server'),
        BABEL_ENV: JSON.stringify('node'),
        API_URL: JSON.stringify('http://localhost:8081'),
      },
    }),
  ],
};
