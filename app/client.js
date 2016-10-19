import React from 'react'
import {render} from 'react-dom'
import Router from 'react-router/lib/Router';
import match from 'react-router/lib/match';
import browserHistory from 'react-router/lib/browserHistory';

const routes = require ('./routes').default;

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
