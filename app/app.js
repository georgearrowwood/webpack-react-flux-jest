import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

export default class Index extends Component {
  render () {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    )
  }
}
