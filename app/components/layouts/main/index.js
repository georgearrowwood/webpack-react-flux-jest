import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Menu from '../../main-menu'

require('./style.css')

class Layout extends Component {
  render () {
    return (
      <div>
        <Menu />
        {this.props.isLoading &&
          <span> Loading... </span>
        }
        {this.props.children}
      </div>
    )
  }
}

Layout.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.array
}

export default Layout
