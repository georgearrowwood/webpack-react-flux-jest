import React, { Component } from 'react'

import ProductsList from '../products/list'
import AddProduct from '../products/add'

export default class Home extends Component {
  render () {
    return (
      <div>
        Products Page:
        <div>
          <ProductsList />
          <AddProduct />
        </div>
      </div>
    )
  }
}
