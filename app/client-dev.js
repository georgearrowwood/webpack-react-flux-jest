import { AppContainer } from 'react-hot-loader';
import React from 'react'
import {render} from 'react-dom'
import Router from 'react-router/lib/Router';
import match from 'react-router/lib/match';
import browserHistory from 'react-router/lib/browserHistory';

const routes = require ('./routes').default;

var container = document.getElementById('app')

render(
  <AppContainer>
    <Router history={browserHistory} routes={routes} />
  </AppContainer>, container)

if (module.hot) {
    module.hot.accept('./routes', () => {
      // key={Date.now()}
      render(<Router history={browserHistory} routes={require('./routes').default} />, container)
    });
}
