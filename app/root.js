import React, { Component } from 'react';
import browserHistory from 'react-router/lib/browserHistory';
import Router from 'react-router/lib/Router';

const routes = require ('./routes').default;

export default (
  <Router history={browserHistory} routes={routes} />
)
