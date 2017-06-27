import express from 'express';
let router = express.Router();

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import config from '../config'; 
// import Routes from '../../../app/routes';
import App from '../../../app/app';

import fs from 'fs'
const index = fs.readFileSync('./index.html', 'utf8')

router.get('*', (req, res) => {

  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {Location: context.url})
    res.end()
  } else {
    res.write(index.replace(
        /<div id="root"><\/div>/,
		`<div id="root">${html}</div>`
    ));
    res.end()
  }
})

module.exports = router;
