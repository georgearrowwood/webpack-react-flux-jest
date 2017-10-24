import React, { Component } from 'react';

import authStore from './store';

export default (AuthedComponent) => {
  class RequireAuth extends Component {
    constructor() {
      super();
      this.onChange = this.onChange.bind(this);
      this.state = {
        auth: authStore.getAuth(),
      };
    }

    componentWillMount() {
      authStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
      authStore.removeChangeListener(this.onChange);
    }

    onChange() {
      this.setState({
        auth: authStore.getAuth(),
      });
    }

    render() {
      return <AuthedComponent auth={this.state.auth} />;
    }
  }

  return RequireAuth;
};
