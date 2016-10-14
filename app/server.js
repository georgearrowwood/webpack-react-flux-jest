import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory} from 'react-router'

// var routes = require('./routes');


// import style from './style.css'
// import Home from './components/Home.js';

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="app">App</Link>
        <Link to="home">Home</Link>
        App123
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

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="react-webpack/dist" component={App}/>
    <Route path="app" component={App}/>
    <Route path="home" component={Home}/>
  </Router>
);


module.exports.render = (path, cb) => {

  var router = Router.create({
    routes: routes,
    location: path
  });

  var content = "";

  // Run the router, and render the result to string
  router.run(function (Handler, state) {
    content = React.renderToString(React.createElement(Handler, {routerState: state, deviceType: deviceType, environment: "server"}), null);
    console.log('rended');
    cb(content)
  });


  // render(routes, document.getElementById('react'))
}
