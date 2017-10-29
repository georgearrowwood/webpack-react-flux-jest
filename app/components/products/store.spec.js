import dispatcher from '../../modules/dispatcher';
import productStore from './store';
import productConstants from './constants';

const actionProductsDataReceived = {
  actionType: productConstants.PRODUCTS_LIST_DATA_RECEIVED,
};

describe('Products Store', () => {
  it('should initialize with no products items', () => {
    const list = productStore.getList();
    expect(list).toEqual([]);
  });

  it('get list with items - directly action call', () => {
    const action = Object.assign({}, actionProductsDataReceived);
    action.products = [
      { id: 1, title: 'test product' },
    ];
    dispatcher.dispatch(action);
    const list = productStore.getList();
    expect(list.length).toBe(1);
    expect(list[0].title).toEqual('test product');
  });
});
