import React, { Component } from 'react';

import ProductsList from './list';
import productsStore from '../../stores/products';
import productsActions from '../../actions/products';

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
    productsActions.fetchList();
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

  deleteProductHandler(e, id) {
    e.preventDefault();
    productsActions.delete(id);
  }

  render() {
    return (
      <ProductsList
        products={this.state.products}
        deleteProductHandler={this.deleteProductHandler}
      />
    )
  }
};
