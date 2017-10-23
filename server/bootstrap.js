import path from 'path';
import Express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import logger from './modules/logger';
import appRoutes from './routes/app';
import productRoutes from './routes/products';
import authRoutes from './routes/auth';

const server = Express();

server
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true,
  }))
  .engine('.hbs', exphbs({
    extname: '.hbs',
  }))
  .use(cookieParser())
  .set('view engine', '.hbs')
  .set('views', 'server/views/')
  .use('/assets', Express.static(path.join(process.cwd(), '/dist')))
  .use('/', productRoutes)
  .use('/', authRoutes)
  .use('/', appRoutes)
  .use((req, res) => {
    res.send(404);
  })
  // error handler
  .use((err, req, res) => {
    logger.info(err);
    res.send(500);
  });

export default server;
