require('./menu_style.css');

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'

export default class Menu extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/home">Home2</Link>
        <Link to="/products">Products</Link>
      </div>
    )
  }
}
