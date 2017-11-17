const webpack = require('webpack');
const path = require('path');

const host = '0.0.0.0';
const port = '8888';

module.exports = {
  devServer: {
    hot: true,
    filename: 'bundle.js',
    port,
    host,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  target: 'web',
  context: path.resolve(__dirname, '../app'),
  entry: [
    'babel-regenerator-runtime',
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    './client',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: `http://${host}:${port}/dist/`,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watchOptions: { poll: true },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
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
        NODE_ENV: JSON.stringify('development'),
        config: JSON.stringify('development'),
        ENV: JSON.stringify('browser'),
        API_URL: JSON.stringify('http://localhost:8080'),
      },
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
