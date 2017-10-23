import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {

  context: path.resolve(__dirname, '../../app'),
  entry: [
    'babel-regenerator-runtime',
    './client.jsx',
  ],

  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }  
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      disable: false,
      filename: 'style.css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        ENV: JSON.stringify('browser'),
        config: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};

export default config;
