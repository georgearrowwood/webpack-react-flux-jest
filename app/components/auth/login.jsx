import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { loginAction } from './actions';
import LoginFormView from './login-view';
import Auth from './auth';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
      errorMessage: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit() {
    console.log('subm');
    loginAction({
      login: this.state.login,
      password: this.state.password,
    }, this.props.history);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <LoginFormView
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
        login={this.state.login}
        password={this.state.password}
        errorMessage={this.state.errorMessage || this.props.auth.errorMessage}
      />
    );
  }
}

LoginForm.propTypes = {
  auth: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default Auth(withRouter(LoginForm));
