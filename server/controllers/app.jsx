import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import config from '../modules/config';
import App from '../../app/app';
import loadPreState from '../modules/load-pre-state';

const appController = {
  init: async (req, res) => {
    const { userToken } = req.cookies;
    const preState = await loadPreState(req.url, userToken);

    const context = {};
    const pageBody = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )

    res.render('index', {
      pageBody,
      title: config.title,
      scriptUrl: config.scriptUrl,
      styleUrl: config.styleUrl,
      preloadedState: JSON.stringify(preState),
    });
  },
};

export default appController;
