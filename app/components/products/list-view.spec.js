import React from 'react';
import ProductsList from './list-view';
// import renderer from 'react-test-renderer';
// import Enzyme, { shallow, render, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() });

let mockProductsList = [
  {id: 1, title: "test product 1"},
  {id: 2, title: "test product 2"},
]

test('Render products list', () => {
  const wrapper = mount(
    <ProductsList products={mockProductsList} deleteProductHandler={()=>{}}/>
  );
  // let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});
