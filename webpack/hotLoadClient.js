import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import config from './config/webpack.client.dev';

const port = process.env.HOT_LOAD_PORT || 8898;

new WebpackDevServer(webpack(config.config), config.devServer)
  .listen(port, '0.0.0.0', (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Hot load server listening at localhost: ${port}`);
  });
