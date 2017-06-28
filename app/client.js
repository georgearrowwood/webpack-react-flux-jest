import React, { Component } from 'react';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

export default class Index extends Component {
  render() {
    return(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );
  }
};
