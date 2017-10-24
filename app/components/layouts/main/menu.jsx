import { NavLink } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

import Auth from '../../auth/auth';

const Menu = ({ auth }) => (
  <nav>
    <NavLink exact to="/" > home </NavLink>
    <NavLink to="/about"> about </NavLink>
    {auth.authenticated &&
      <NavLink to="/products"> products </NavLink>
    }
    {!auth.authenticated &&
      <NavLink to="/login"> Login </NavLink>
    }
    {auth.authenticated &&  
      <NavLink to="/logout"> Logout </NavLink>
    }
  </nav>
);

Menu.propTypes = {
  auth: PropTypes.shape().isRequired,
};

export default Auth(Menu);
