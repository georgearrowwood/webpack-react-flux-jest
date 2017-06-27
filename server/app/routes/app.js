import express from 'express';
let router = express.Router();

import React from 'react'
// import { matchRoutes } from 'react-router-config'

import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import config from '../config'

import App from '../../../app/app'
// import routes from '../../../app/routes'

router.get('*', (req, res) => {

  const context = {}
  console.log(1,req.url);

  // const branch = matchRoutes(routes, req.url)
  // console.log(branch);

  const pageBody = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  )

  res.render('index', {
    pageBody: pageBody,
    title: config.title,
    scriptUrl: config.scriptUrl,
    styleUrl: config.styleUrl
  })
})

module.exports = router;
