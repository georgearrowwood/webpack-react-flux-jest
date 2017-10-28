import React from 'react';
import ProductAdd from '../app/components/products/add';
import renderer from 'react-test-renderer';

test('Render product add form', () => {
  const component = renderer.create(
    <ProductAdd/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
