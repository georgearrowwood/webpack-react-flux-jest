import webpack from 'webpack';
import path from 'path';


const config = {
  context: path.resolve(__dirname, '../../app'),
  entry: [
    "./client.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, '../../dist'),
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      // { test: /\.css$/, loader: "style!css" }
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};

export default config;
