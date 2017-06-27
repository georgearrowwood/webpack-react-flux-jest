import React from 'react'
import {render} from 'react-dom'
import {Router, match, browserHistory} from 'react-router';

const routes = require ('./routes').default;

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
