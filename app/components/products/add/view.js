import React, { Component } from 'react'

import PropTypes from 'prop-types'

class AddProduct extends Component {
  render () {
    return (
      <div>
        Add Product:
        <div>
          <input type='text' onChange={this.props.handleTitleChange} value={this.props.titleValue} />
          <button onClick={this.props.addHandle}>
            Add
          </button>
        </div>
      </div>
    )
  }
}

AddProduct.propTypes = {
  handleTitleChange: PropTypes.func,
  titleValue: PropTypes.string,
  addHandle: PropTypes.func
}

export default AddProduct
