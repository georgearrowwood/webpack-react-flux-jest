import React from 'react';
import PropTypes from 'prop-types';

import Menu from './menu';

require('./style.scss');

const Layout = ({ children, isLoading }) => (
  <div>
    <Menu />
    {isLoading &&
      <span> Loading... </span>
    }
    {children}
  </div>
);

Layout.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.shape().isRequired,
};

Layout.defaultProps = {
  isLoading: false,
};

export default Layout;

