import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import Auth from './auth';

export default (AuthedComponent) => {
  class RequireAuth extends Component {
    componentWillMount() {
      if (this.props.auth.authenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      return <AuthedComponent {...this.props} />;
    }
  }

  RequireAuth.propTypes = {
    auth: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired,
  };

  return Auth(withRouter(RequireAuth));
};
