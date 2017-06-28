import React, { Component } from 'react'

import PropTypes from 'prop-types'

class AddProductForm extends Component {
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

AddProductForm.propTypes = {
  handleTitleChange: PropTypes.function,
  titleValue: PropTypes.array,
  addHandle: PropTypes.array
}

export default AddProductForm
