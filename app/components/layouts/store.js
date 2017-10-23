import {EventEmitter} from 'events'

import dispatcher from '../../modules/dispatcher'
import pageConstants from './constants'

let _page = {
  isLoading: false
}

class PageStore extends EventEmitter {
  constructor () {
    super()
    this.dispatchToken = dispatcher.register(this.dispatcherCallback.bind(this))
  }

  getState () {
    return _page
  }

  emitChange () {
    this.emit('change')
  }

  // Add change listener
  addChangeListener (callback) {
    this.on('change', callback)
  }

  // Remove change listener
  removeChangeListener (callback) {
    this.removeListener('change', callback)
  }

  dispatcherCallback (action) {
    switch (action.actionType) {
      case pageConstants.PAGE_LOADING_STARTED:
        _page.isLoading = true
        this.emitChange()
        break
      case pageConstants.PAGE_LOADING_COMPLETED:
        _page.isLoading = false
        this.emitChange()
        break
    }
    return true
  }
}

export default new PageStore()
