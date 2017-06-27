import path from 'path'
import Express from 'express'
import exphbs  from 'express-handlebars'

const server = Express()

import bodyParser from 'body-parser';

server
  .use( bodyParser.json())       // to support JSON-encoded bodies
  .use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }))
  .engine('.hbs', exphbs({
    extname: '.hbs'
  }))
  .set('view engine', '.hbs')
  .set('views', 'server/app/views/')
  .use('/dist', Express.static(path.join(__dirname, '../dist')))
  // Api Routes
  .use('/', require('./routes/api/products'))
  // React app routes
  .use('/', require('./routes/app'))

export default server;
