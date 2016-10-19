
import webpack from 'webpack';
import webpackConfig from './config/webpack.client.js';

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err) console.log(err);
});
