import React, { Component } from 'react';

import productsStore from '../../stores/products';

export default class Products extends Component {

  constructor(){
    super();
    this.renderProduct = this.renderProduct.bind(this);
  }

  renderProduct(product) {
    console.log(this);
    return (
      <li key={product.id}>
        {product.id} - {product.title} :
        <a
          href="#"
          onClick={e => this.props.deleteProductHandler(e, product.id)}
        >X</a>
      </li>
    );
  };

  render() {
    return (
      <div>
        List:
        <ul>
          {this.props.products.map(this.renderProduct)}
        </ul>
      </div>
    );
  };

};
