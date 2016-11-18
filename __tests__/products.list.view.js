import React from 'react';
import ProductsList from '../app/components/products/list';
import renderer from 'react-test-renderer';

let mockProductsList = [
  {id: 1, title: "test product 1"},
  {id: 2, title: "test product 2"},
]

test('Render products list', () => {
  const component = renderer.create(
    <ProductsList products={mockProductsList}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
