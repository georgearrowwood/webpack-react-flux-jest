// import React from 'react'
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './app'
import Home from './home'
import Main from './main'

const routes =  {
  path: '',
  component: Main,
  childRoutes: [
    { path: '/', component: Home },
    { path: '/app', component: App},
    { path: '/home', component: Home}
  ]
};

export default routes;


// class Root extends Component {
//   render() {
//     return (
//     <div> aa1
//     <Router history={browserHistory}>
//       <Route path="/" component={Home}/>
//       <Route path="app" component={App} />
//       <Route path="home" component={Home} />
//     </Router>
//   </div>
//     )
//   }
// }
