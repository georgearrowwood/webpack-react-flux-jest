require('./style.css');

import React, { Component } from 'react';

import Menu from '../../main-menu';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Menu/>
        {this.props.isLoading &&
          <span> Loading... </span>
        }
        {this.props.children}
      </div>
    )
  }
}
