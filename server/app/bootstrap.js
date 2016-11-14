import path from 'path';
import Express from 'express';

const server = Express();

import bodyParser from 'body-parser';
server.use( bodyParser.json() );       // to support JSON-encoded bodies
server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

server.set('view engine', 'ejs');

server.set('views', path.join(__dirname, '/views'));
server.use('/dist', Express.static(path.join(__dirname, '../dist')));

// Api Routes
server.use('/', require('./routes/api/products'));
// React app routes
server.use('/', require('./routes/app'));

export default server;
