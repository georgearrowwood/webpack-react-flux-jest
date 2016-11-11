import React, { Component } from 'react';

import ProductsList from './list';
import productsStore from '../../stores/products';
import productsServices from '../../services/products';
import dispatcher from '../../dispatcher';

console.log(productsServices);

function getProductsState(){
  return {products: productsServices.getList()};
}

export default class ProductsContainer extends Component {

  // constructor() {
  //   super();
  //   this._onChange = this._onChange.bind(this)
  // }

  componentWillMount() {
    dispatcher.dispatch({
      action: 'product-list'
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
