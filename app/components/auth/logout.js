import { Component } from 'react';
import { withRouter } from 'react-router';
import { logoutUser } from './actions';

class LogOut extends Component {
  componentWillMount() {
    logoutUser(this.props.history);
  }
  render() {
    return null;
  }
}

export default withRouter(LogOut);
