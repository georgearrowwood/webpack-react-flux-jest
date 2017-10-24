import { EventEmitter } from 'events';
import dispatcher from '../../modules/dispatcher';
import pageConstants from './constants';

class PageStore extends EventEmitter {
  constructor() {
    super();
    this.data = {
      isLoading: false,
    };
    this.dispatchToken = dispatcher.register(this.dispatcherCallback.bind(this));
  }

  getState() {
    return this.data;
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

  dispatcherCallback(action) {
    switch (action.actionType) {
      case pageConstants.LOADING_STARTED:
        this.data.isLoading = true;
        this.emit('change');
        break;
      case pageConstants.LOADING_COMPLETED:
        this.data.isLoading = false;
        this.emit('change');
        break;
      default:
        break;
    }
    return true;
  }
}

export default new PageStore();
