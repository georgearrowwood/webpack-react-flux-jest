import logger from './modules/logger';

import server from './bootstrap';

const port = process.env.PORT;

server.listen(port, () => {
  logger.info(`Server is listening at ${port}`);
});
