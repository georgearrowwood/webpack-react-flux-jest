import dispatcher from '../utils/dispatcher'
import productConstants from '../constants/products'
import pageConstants from '../constants/page'
import productsApi from '../api/products'

export default {
  /**
   * @param  {string} text
   */
  create: function (product) {
    dispatcher.dispatch({
      actionType: pageConstants.PAGE_LOADING_STARTED
    })
    if (product && product.title) {
      productsApi.create(product)
        .then(result => {
          if (result.data.success) {
            this.fetchList()
          }
        })
    }
  },

  fetchList: function () {
    dispatcher.dispatch({
      actionType: pageConstants.PAGE_LOADING_STARTED
    })
    productsApi.getList()
      .then(result => {
        dispatcher.dispatch({
          actionType: productConstants.PRODUCTS_LIST_DATA_RECEIVED,
          products: result.data.products
        })
        dispatcher.dispatch({
          actionType: pageConstants.PAGE_LOADING_COMPLETED
        })
      })
  },

  /**
   * @param  {integer} id
   */
  delete: function (id) {
    dispatcher.dispatch({
      actionType: pageConstants.PAGE_LOADING_STARTED
    })
    if (Number.isInteger(id)) {
      productsApi.delete(id)
        .then(result => {
          if (result.data.success) {
            this.fetchList()
          }
        })
    }
  }
}
