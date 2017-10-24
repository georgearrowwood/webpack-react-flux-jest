import React, { Component } from 'react';

import pageStore from './store';

export default (Page) => {
  class PageState extends Component {
    constructor() {
      super();
      this.state = pageStore.getState();
      this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
      pageStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
      pageStore.removeChangeListener(this.onChange);
    }

    onChange() {
      this.setState(pageStore.getState());
    }

    render() {
      return (
        <Page
          {...this.props}
          isLoading={this.state.isLoading}
        />
      );
    }
  }
  return PageState;
};
