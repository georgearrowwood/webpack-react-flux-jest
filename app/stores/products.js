import {EventEmitter} from 'events';
import dispatcher from '../utils/dispatcher';
import productConstants from '../constants/products';

let _products = []

function _create(item) {
  _products.push(item);
  console.log('aft add', _products);
}

function _remove(id){
  _products = _products.map(item => item.id !== id);
}

// function _list_fetch(id){
//   productsApi.getList();
// }

class ProductsStore extends EventEmitter {

  constructor(){
    super();
    this.dispatchToken = dispatcher.register(this.dispatcherCallback.bind(this));
  }

  getList(){
    return _products;
  }

  emitChange(){
    console.log('e c');
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

    console.log('disp acts', action);

    switch(action.actionType) {

      case productConstants.PRODUCTS_CREATE:
        if (action.title !== '') {
          _create(title);
          this.emitChange();
        }
        break;

      case productConstants.PRODUCTS_LIST_DATA_RECEIVED:
        _products = action.products;
        this.emitChange();
        break;

      case productConstants.PRODUCTS_REMOVE:
        _remove(action.id);
        this.emitChange();
        break;
    }
    return true;
  }

};

export default new ProductsStore();
