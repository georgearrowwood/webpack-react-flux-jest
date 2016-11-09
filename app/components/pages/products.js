import React, { Component } from 'react';

import ProductsList from '../products/listContainer';
import AddProductForm from '../products/addContainer';

export default class Home extends Component {
  render() {
    return(
      <div>
        Products Page:
        <div>
          <ProductsList/>
          <AddProductForm/>
        </div>
      </div>
    );
  }
};
