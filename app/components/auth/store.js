import { EventEmitter } from 'events';
import dispatcher from '../../modules/dispatcher';
import constants from './constants';

class AuthStore extends EventEmitter {
  constructor() {
    super();
    this.auth = {
      authenticated: false,
      errorMessage: '',
    };
    this.dispatchToken = dispatcher.register(this.dispatcherCallback.bind(this));
  }

  getAuth() {
    return this.auth;
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

  dispatcherCallback(action) {
    switch (action.actionType) {
      case constants.AUTHENTICATED:
        this.auth.authenticated = true;
        this.auth.errorMessage = '';
        this.emit('change');
        break;
      case constants.UNAUTHENTICATED:
        this.auth.authenticated = false;
        this.auth.errorMessage = '';
        this.emit('change');
        break;
      case constants.AUTHENTICATION_ERROR:
        this.auth.authenticated = false;
        this.auth.errorMessage = action.payload;
        this.emit('change');
        break;
      default:
        break;
    }
    return true;
  }
}

export default new AuthStore();
