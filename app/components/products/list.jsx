import React, { Component } from 'react';

import ProductsListView from './list-view';
import productsStore from './store';
import productsActions from './actions';

export default class ProductsContainer extends Component {
  static deleteHandler(id) {
    productsActions.delete(id);
  }

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      products: productsStore.getList(),
    };
  }

  componentWillMount() {
    if (process.env.ENV === 'browser') productsActions.fetchList();
  }

  componentDidMount() {
    productsStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    productsStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      products: productsStore.getList(),
    });
  }

  render() {
    return (
      <ProductsListView
        products={this.state.products}
        deleteProductHandler={ProductsContainer.deleteHandler}
      />
    );
  }
}

