import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

let _products = []

function _add(item) {
  _products.push(item);
  console.log('aft add', _products);
}

function _remove(id){
  _products = _products.map(item => item.id !== id);
}

class ProductsStore extends EventEmitter {

  constructor(){
    super();
    this.dispatchToken = dispatcher.register(this.dispatcherCallback.bind(this))
    _products = [
      {
        id: 0,
        title: 'Item 1'
      },
      {
        id: 1,
        title: 'Item 2'
      }
    ];
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

    switch (action.action) {
      case 'product-add':
        console.log('huh');
        _add(action.product);
        this.emitChange();
        break;
      case 'product-remove':
        _remove(action.articleId);
        this.emitChange();
        break;
    }
    return true;
  }

};

export default new ProductsStore();
