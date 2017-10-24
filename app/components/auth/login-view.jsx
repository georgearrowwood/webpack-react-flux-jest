import React from 'react';
import PropTypes from 'prop-types';

const showErrorMessage = (errorMessage) => {
  if (errorMessage) {
    return (
      <div className="info-red">
        {errorMessage}
      </div>
    );
  }
  return '';
};

const LoginFormView = ({
  errorMessage, handleSubmit, handleInputChange, login, password,
}) => (
  <div className="form">
    <h2>Login</h2>
    {showErrorMessage(errorMessage)}
    <input
      type="text"
      name="login"
      onChange={handleInputChange}
      value={login}
    />
    <input
      name="password"
      type="password"
      onChange={handleInputChange}
      value={password}
    />
    <button onClick={handleSubmit}>
      Log In
    </button>
  </div>
);

LoginFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  login: PropTypes.string,
  password: PropTypes.string,
};

LoginFormView.defaultProps = {
  errorMessage: '',
  login: '',
  password: '',
};

export default LoginFormView;
