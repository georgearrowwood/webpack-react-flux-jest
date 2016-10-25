import path from 'path';
import Express from 'express';

const server = Express();

server.set('view engine', 'ejs');

server.set('views', path.join(__dirname, '/views'));
server.use('/dist', Express.static(path.join(__dirname, '../dist')));

const config = require('../config/' + process.env.config).default;

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import Routes from '../app/routes';

server.get('*', (req, res) => {

  match({ routes: Routes, location: req.url }, (err, redirect, props) => {

    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props}/>)
      // res.send(renderPage(appHtml))
      res.render('html.ejs', {
        title: config.title,
        app: appHtml,
        scriptUrl: config.scriptUrl,
        styleUrl: config.styleUrl
      });
    } else {
      res.status(404).send('Not Found')
    }
  })
})


var port = process.env.PORT;
server.listen(port, () => {
  console.log('Server is listening at %s', port);
});
