import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';

import ProductsList from './list-view';


const mockProductsList = [
  { id: 1, title: 'test product 1' },
  { id: 2, title: 'test product 2' },
];

test('Render products list', () => {
  const wrapper = mount(<ProductsList
    products={mockProductsList}
    deleteProductHandler={() => {}}
  />);
  console.log('sn', wrapper);
  
  expect(wrapper).toMatchSnapshot();
  // expect(wrapper.prop('products')).arrayContaining(mockProductsList);
  // console.log('p', wrapper.prop('products'));
  
  // expect(wrapper.prop('product')).toMatchSnapshot();
});
