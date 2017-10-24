import React from 'react';
import { hydrate } from 'react-dom';
import cookie from 'react-cookies';

import Index from './app';
import { auth } from './components/auth/actions';

const userToken = cookie.load('userToken');
if (userToken) auth();

hydrate(<Index />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./client', () => {
    const NextApp = require('./client').default
    render(
      React.createElement(NextApp),
      document.getElementById('root')
    )
  })
}
