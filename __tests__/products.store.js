jest.dontMock('./../app/stores/products');
jest.dontMock('./../app/constants/products');

import dispatcher from '../app/utils/dispatcher';
import productStore from '../app/stores/products';
import productConstants from '../app/constants/products';

describe('TodoStore', function() {

  let callback;

  var actionProductsDataReceived = {
    actionType: productConstants.PRODUCTS_LIST_DATA_RECEIVED
  };

  beforeEach(() => {
    callback = dispatcher._callbacks[Object.keys(dispatcher._callbacks)[0]];
  });

  it('registers a callback with the dispatcher', () => {
    expect(Object.keys(dispatcher._callbacks).length).toBe(1);
  });

  it('should initialize with no products items', () => {
    var list = productStore.getList();
    expect(list).toEqual([]);
  });

  it('get list with items - directly action call', () => {
    let action = Object.assign({}, actionProductsDataReceived);
    action.products = [
      {id: 1, title: 'test product'}
    ];
    callback(action);
    var list = productStore.getList();
    expect(list.length).toBe(1);
    expect(list[0].title).toEqual('test product');
  });

});
