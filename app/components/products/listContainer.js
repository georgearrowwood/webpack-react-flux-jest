import React, { Component } from 'react';

import ProductsList from './list';
import productsStore from '../../stores/products';
import dispatcher from '../../dispatcher';

function getProductsList() {
  return {products: productsStore.getList()};
}

export default class ProductsContainer extends Component {

  constructor() {
    super();
    this._onChange = this._onChange.bind(this)
    this.state = getProductsList();
  }

  componentWillMount() {
    dispatcher.dispatch({
      action: 'product-list-fetch'
    });
  }

  _onChange() {
    this.setState(getProductsList());
  }

  componentDidMount() {
    productsStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    productsStore.removeChangeListener(this._onChange);
  }

  render() {
    return <ProductsList products={this.state.products}/>
  }
};
