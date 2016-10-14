var React = require('react');
var render = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var routes = require('./routes');

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



render(routes, document.getElementById('react'))
