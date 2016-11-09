import React, { Component } from 'react';

import productsStore from '../../stores/products';

export default class Products extends Component {

  renderProduct(product) {
    return <li key={product.id}>{product.title}</li>;
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
