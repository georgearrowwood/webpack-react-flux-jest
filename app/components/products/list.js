import React, { Component } from 'react';

import AddProductForm from './add';
import productsStore from '../../stores/products';

export default class Products extends Component {

  constructor() {
    super();
    this.state = {
      products: productsStore.getList()
    }
    this._onChange = this._onChange.bind(this)
  }

  _onChange() {
    this.setState({products: productsStore.getList()});
  }

  componentWillMount() {
    productsStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    productsStore.removeChangeListener(this._onChange);
  }

  render() {

    let productsHtml = this.state.products.map((product) => {
      return <li key={product.id}>
        {product.title}
      </li>;
    });

    return (
      <div>
        Products:
        <ul>
          {productsHtml}
        </ul>
        <AddProductForm/>
      </div>
    );
  }
};
