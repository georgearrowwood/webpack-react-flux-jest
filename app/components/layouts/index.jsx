import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PageState from './page-state';
import MainLayout from './main';

class LayoutContainer extends Component {
  getLayoutByName() {
    switch (this.props.name) {
      case 'main':
      default:
        return MainLayout;
    }
  }

  render() {
    const Layout = this.getLayoutByName();
    return (
      <Layout
        isLoading={this.props.isLoading}
      >
        {this.props.children}
      </Layout>
    );
  }
}

LayoutContainer.propTypes = {
  children: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default PageState(LayoutContainer);
