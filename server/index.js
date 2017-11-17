import http from 'http';

import app from './bootstrap';
import logger from './modules/logger';

const port = process.env.PORT;

const server = http.createServer(app);
let currentApp = app;

server.listen(port, () => {
  logger.log(`Server is listening at ${port}`);
});

if (module.hot) {
  module.hot.accept('./bootstrap', () => {
    server.removeListener('request', currentApp);
    /* eslint-disable global-require */
    const newApp = require('./bootstrap').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
