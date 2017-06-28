import React, { Component } from 'react'
import PropTypes from 'prop-types'

import pageStore from '../../stores/page'
import MainLayout from './main'

class LayoutContainer extends Component {
  constructor () {
    super()
    this.state = pageStore.getState()
    this._onChange = this._onChange.bind(this)
  }

  getLayoutByName (name) {
    switch (name) {
      case 'main':
      default:
        return MainLayout
    }
  }

  _onChange () {
    this.setState(pageStore.getState())
  }

  componentDidMount () {
    pageStore.addChangeListener(this._onChange)
  }

  componentWillUnmount () {
    pageStore.removeChangeListener(this._onChange)
  }

  render () {
    let Layout = this.getLayoutByName(this.props.name)
    return (
      <Layout
        isLoading={this.state.isLoading}
        children={this.props.children} />
    )
  }
}

LayoutContainer.propTypes = {
  children: PropTypes.array,
  name: PropTypes.string
}

export default LayoutContainer
