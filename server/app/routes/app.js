import express from 'express';
let router = express.Router();

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import config from '../config';
import Routes from '../../../app/routes';

router.get('*', (req, res) => {

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

module.exports = router;
