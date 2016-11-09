import React, { Component } from 'react';

import productsStore from '../../stores/products';
import ProductsList from './list';

export default class ProductsContainer extends Component {

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
    return <ProductsList products={this.state.products}/>
  }
};
