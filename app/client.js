import { AppContainer } from 'react-hot-loader';
import React from 'react'
import {render} from 'react-dom'
import Router from 'react-router/lib/Router';
import match from 'react-router/lib/match';
import browserHistory from 'react-router/lib/browserHistory';

// var Router = require('react-router').Router;
// var Route = require('react-router').Route;
// var Link = require('react-router').Link;

const routes = require ('./routes').default;
// import Home from './home';
//
// // import style from './style.css'
// // import Home from './components/Home.js';
//
var container = document.getElementById('app')
//

render(<AppContainer>
<Router history={browserHistory} routes={routes} />
</AppContainer>, container)
//

if (module.hot) {

    module.hot.accept('./routes', () => {
      // const Rr = require('./routes').default
      render(<Router key={Date.now()} history={browserHistory} routes={require('./routes').default} />, container)
    });
}
