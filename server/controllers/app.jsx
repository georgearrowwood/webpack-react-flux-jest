import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import config from '../modules/config';
import Routes from '../../app/routes';
import { auth } from '../../app/components/auth/actions';

const appController = {
  init: async (req, res) => {
    const { userToken } = req.cookies;
    if (userToken) auth();

    const context = {};
    const pageBody = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>);

    res.render('index', {
      pageBody,
      title: config.title,
      scriptUrl: config.scriptUrl,
      styleUrl: config.styleUrl,
    });
  },
};

export default appController;
