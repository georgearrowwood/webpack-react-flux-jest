jest.dontMock('./../app/stores/products');
jest.dontMock('../app/constants/products');

describe('TodoStore', function() {

  let productConstants = require('../app/constants/products');
  let dispatcher;
  let productStore;
  let callback;

  var actionProductsDataReceived = {
    actionType: productConstants.PRODUCTS_LIST_DATA_RECEIVED
  };

  beforeEach(function() {
    dispatcher = require('../app/utils/dispatcher').default;
    productStore = require('../app/stores/products').default;
    callback = dispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no products items', function() {
    var all = TodoStore.getAll();
    expect(all).toEqual({});
  });

});
