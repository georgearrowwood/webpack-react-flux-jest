require('./style.css');

import React, { Component } from 'react';

import Menu from './menu';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Menu/>
        {this.props.children}
      </div>
    )
  }
}
