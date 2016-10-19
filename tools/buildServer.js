
import webpack from 'webpack';
import webpackConfig from './config/webpack.server.js';

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err) console.log(err);
});
