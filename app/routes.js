import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './_app'
import Home from './_home'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="app" component={App} />
    <Route path="home" component={Home} />

  </Router>
)
//
// import React from 'react'
// import { Route, IndexRoute } from 'react-router'
// import App from './App'
// // import About from './About'
// // import Repos from './Repos'
// // import Repo from './Repo'
// import Home from './Home'
//
// module.exports = (
//   <Route path="/" component={App}>
//     <IndexRoute component={Home}/>
//     <Route path="/home" component={Home}/>
//     <Route path="/app" component={App}/>
//   </Route>
// )
