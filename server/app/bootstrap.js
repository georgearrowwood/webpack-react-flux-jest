import path from 'path'
import Express from 'express'
import exphbs from 'express-handlebars'

import bodyParser from 'body-parser'

const server = Express()

server
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
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

export default server
