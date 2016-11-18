import {EventEmitter} from 'events';
import dispatcher from '../utils/dispatcher';
import productConstants from '../constants/products';

let _products = []

class ProductsStore extends EventEmitter {

  constructor(){
    super();
    this.dispatchToken = dispatcher.register(this.dispatcherCallback.bind(this));
  }

  getList(){
    return _products;
  }

  emitChange(){
    this.emit('change');
  }

  // Add change listener
  addChangeListener(callback){
    this.on('change', callback);
  }

  // Remove change listener
  removeChangeListener(callback){
    this.removeListener('change', callback);
  }

  dispatcherCallback(action) {
    // console.log('disp acts', action);
    switch(action.actionType) {

      case productConstants.PRODUCTS_LIST_DATA_RECEIVED:
        _products = action.products;
        this.emitChange();
        break;

    }
    return true;
  }
};

export default new ProductsStore();
