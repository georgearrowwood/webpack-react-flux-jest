import { EventEmitter } from 'events';
import dispatcher from '../../modules/dispatcher';
import productConstants from './constants';

class ProductsStore extends EventEmitter {
  constructor() {
    super();
    this.products = [];
    this.dispatchToken = dispatcher.register(this.dispatcherCallback.bind(this));
  }

  getList() {
    return this.products;
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

  dispatcherCallback(action) {
    switch (action.actionType) {
      case productConstants.PRODUCTS_LIST_DATA_RECEIVED:
        this.products = action.products;
        this.emit('change');
        break;
      default:
        break;
    }
    return true;
  }
}

export default new ProductsStore();
