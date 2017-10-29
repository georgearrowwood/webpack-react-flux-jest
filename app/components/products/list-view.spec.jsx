import React from 'react';
import { mount } from 'enzyme';

import ProductsList from './list-view';

const mockProductsList = [
  { id: 1, title: 'test product 1' },
  { id: 2, title: 'test product 2' },
];

let wrapper;
const deleteClickHandlerMock = jest.fn();

beforeAll(() => {
  wrapper = mount(<ProductsList
    products={mockProductsList}
    deleteProductHandler={deleteClickHandlerMock}
  />);
});

describe('ProductsList View', () => {
  it('Renders products component with properties', () => {
    expect(wrapper).toMatchSnapshot();
    expect(Array.isArray(wrapper.prop('products'))).toEqual(true);
    expect(wrapper.prop('products').length).toEqual(2);
    expect(typeof wrapper.prop('deleteProductHandler')).toEqual('function');
  });

  it('Renders products list items and its titles', () => {
    expect(wrapper.find('ul').find('li').length).toEqual(2);
    const firstProduct = wrapper.find('ul').find('li').at(0);
    expect(firstProduct.find('span').text()).toEqual(`${mockProductsList[0].id} - ${mockProductsList[0].title} :`);
  });

  it('Rendered products delete buttons rendered and work', () => {
    const firstProduct = wrapper.find('ul').find('li').at(0);
    expect(firstProduct.find('a').text()).toEqual('X');
    firstProduct.find('a').simulate('click');
    expect(deleteClickHandlerMock.mock.calls.length).toBe(1);
    expect(deleteClickHandlerMock.mock.calls[0][0]).toBe(1);
    const secondProduct = wrapper.find('ul').find('li').at(1);
    secondProduct.find('a').simulate('click');
    expect(deleteClickHandlerMock.mock.calls[1][0]).toBe(2);
  });
});
