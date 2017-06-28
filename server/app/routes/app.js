import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import config from '../config'
import App from '../../../app/app'

let router = express.Router()

router.get('*', (req, res) => {
  const context = {}
  const pageBody = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  res.render('index', {
    pageBody: pageBody,
    title: config.title,
    scriptUrl: config.scriptUrl,
    styleUrl: config.styleUrl
  })
})

module.exports = router
