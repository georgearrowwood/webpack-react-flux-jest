import React from 'react';
import { shallow } from 'enzyme';

import productsStore from './store';
import productsActions from './actions';
import ProductsList from './list';

const mockProductsList = [
  { id: 1, title: 'test product 1' },
  { id: 2, title: 'test product 2' },
];

beforeAll(() => {
  jest.spyOn(productsActions, 'fetchList').mockImplementation(jest.fn);
});

describe('ProductsList Container', () => {
  it('Renders component and triggers action fetchList on did mount', () => {
    const wrapper = shallow(<ProductsList />);
    expect(wrapper).toMatchSnapshot();
    expect(Array.isArray(wrapper.prop('products'))).toEqual(true);
    expect(wrapper.prop('products').length).toEqual(0);
    expect(productsActions.fetchList.mock.calls.length).toEqual(1);
    productsActions.fetchList.mockReset();
  });

  it('Renders and triggers change manually, loading products from store', () => {
    jest.spyOn(productsStore, 'getList').mockImplementation(() => mockProductsList);
    const wrapper = shallow(<ProductsList />);
    expect(wrapper).toMatchSnapshot();
    expect(Array.isArray(wrapper.prop('products'))).toEqual(true);
    expect(wrapper.prop('products').length).toEqual(0);
    wrapper.instance().onChange();
    expect(productsStore.getList.mock.calls.length).toEqual(1);
    wrapper.update();
    expect(wrapper.prop('products').length).toEqual(2);
    productsStore.getList.mockRestore();
    productsActions.fetchList.mockReset();
  });
});

afterAll(() => {
  productsActions.fetchList.mockRestore();
});
