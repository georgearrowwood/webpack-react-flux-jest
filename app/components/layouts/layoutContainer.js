import React, { Component } from 'react';

import pageStore from '../../stores/page';

import MainLayout from './main';

let Layout;

export default class LayoutContainer extends Component {

  constructor(){
    super();
    this.state = pageStore.getState();
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    switch(this.props.route.layout) {
      case 'main':
        Layout = MainLayout;
        break;
    }
  }

  _onChange() {
    this.setState(pageStore.getState());
  }

  componentDidMount() {
    pageStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    pageStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <Layout
        isLoading={this.state.isLoading} children={this.props.children}
      />
    )
  }
}
