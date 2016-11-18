jest.dontMock('./../app/stores/products');
jest.dontMock('./../app/constants/products');
jest.dontMock('./../app/actions/products');

describe('TodoStore', function() {

  let productConstants = require('../app/constants/products').default;
  let dispatcher;
  let productStore;
  let callback;
  let actions;

  var actionProductsDataReceived = {
    actionType: productConstants.PRODUCTS_LIST_DATA_RECEIVED
  };

  beforeEach(function() {
    dispatcher = require('../app/utils/dispatcher').default;
    productStore = require('../app/stores/products').default;
    // actions = require('../app/actions/products').default;
    callback = dispatcher._callbacks[Object.keys(dispatcher._callbacks)[0]];
  });

  it('registers a callback with the dispatcher', function() {
    expect(Object.keys(dispatcher._callbacks).length).toBe(1);
  });

  it('should initialize with no products items', function() {
    var list = productStore.getList();
    expect(list).toEqual([]);
  });

  it('get list with items - directly action call', function() {
    let action = Object.assign({}, actionProductsDataReceived);
    action.products = [
      {id: 1, title: 'test product'}
    ];
    callback(action);
    var list = productStore.getList();
    expect(list.length).toBe(1);
    expect(list[0].title).toEqual('test product');
  });


  // it('creates a to-do item', function() {
  //   callback(actionTodoCreate);
  //   var all = TodoStore.getAll();
  //   var keys = Object.keys(all);
  //   expect(keys.length).toBe(1);
  //   expect(all[keys[0]].text).toEqual('foo');
  // });

  // it('get list with items', function() {
  //
  //   actions.fetchList()
  //     .then(result => {
  //       var list = productStore.getList();
  //       expect(list).toEqual([]);
  //
  //     });
  //
  //
  // });



});
