import React from 'react';

import ProductsList from '../products/list';
import AddProduct from '../products/add';

export default () => (
  <div>
    Products Page:
    <div>
      <ProductsList />
      <AddProduct />
    </div>
  </div>
);
