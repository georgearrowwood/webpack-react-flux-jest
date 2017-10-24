import React from 'react';

import PropTypes from 'prop-types';

const AddProduct = ({ handleTitleChange, titleValue, addHandle }) => (
  <div>
    Add Product:
    <div>
      <input type="text" onChange={handleTitleChange} value={titleValue} />
      <button onClick={addHandle}>
        Add
      </button>
    </div>
  </div>
);

AddProduct.propTypes = {
  handleTitleChange: PropTypes.func.isRequired,
  addHandle: PropTypes.func.isRequired,
  titleValue: PropTypes.string,
};

AddProduct.defaultProps = {
  titleValue: '',
};

export default AddProduct;
