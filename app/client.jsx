import React from 'react';
import { hydrate } from 'react-dom';
import cookie from 'react-cookies';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { auth } from './components/auth/actions';

const userToken = cookie.load('userToken');
if (userToken) auth();

/* eslint-env browser */
hydrate(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./client', () => {
    /* eslint-disable global-require */
    const NextApp = require('./routes').default;
    hydrate(
      <BrowserRouter><NextApp /></BrowserRouter>,
      document.getElementById('root'),
    );
  });
}
