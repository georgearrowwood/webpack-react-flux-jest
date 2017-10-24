import { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { logoutUser } from './actions';

class LogOut extends Component {
  componentWillMount() {
    logoutUser(this.props.history);
  }
  render() {
    return null;
  }
}

LogOut.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(LogOut);
