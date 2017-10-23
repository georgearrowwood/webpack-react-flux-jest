import webpack from 'webpack';
import path from 'path';
import fs from 'fs';

export default {

  context: path.resolve(__dirname, '../../server'),
  entry: [
    'babel-regenerator-runtime',
    './index',
  ],

  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'server.bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  target: 'node',
  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, '../../node_modules'))
    .concat(['react-dom/server', 'react/addons'])
    .reduce(ext => ext),

  node: {
    __filename: true,
    __dirname: true,
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        PORT: 8091,
        ENV: JSON.stringify('server'),
        BABEL_ENV: JSON.stringify('node'),
      },
    }),
  ],
};
