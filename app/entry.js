import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory} from 'react-router'

import style from './style.css'
// import Home from './components/Home.js';

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="app">App</Link>
        <Link to="home">Home</Link>
        App12
      </div>
    );
  }
});


let Home = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="app">App</Link>
        <Link to="home">Home</Link>
        Hoome
      </div>
    );
  }
});

let routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="react-webpack/dist" component={App}/>
    <Route path="app" component={App}/>
    <Route path="home" component={Home}/>
       {/*<Route path="users" component={Users}>
      //   <Route path="/user/:userId" component={User}/>
      // </Route>
    //<Route path="*" component={NoMatch}/> </Route> */}

  </Router>
);

render(routes, document.getElementById('react'))
