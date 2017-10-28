import React from 'react';
import PropTypes from 'prop-types';

const deleteHandler = (e, id, deleteProductHandler) => {
  e.preventDefault();
  deleteProductHandler(id);
};

const renderProduct = deleteProductHandler => product => (
  <li key={product.id}>
    <span>{product.id} - {product.title} :</span>
    <a
      href="/product/delete"
      onClick={e => deleteHandler(e, product.id, deleteProductHandler)}
    >
      X
    </a>
  </li>
);

const Products = ({ products, deleteProductHandler }) => (
  <div>
    List:
    <ul>
      {products.map(renderProduct(deleteProductHandler))}
    </ul>
  </div>
);

Products.propTypes = {
  deleteProductHandler: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Products;
