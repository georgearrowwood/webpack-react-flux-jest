import dispatcher from '../utils/dispatcher';
import productConstants from '../constants/products';
import productsApi from '../api/products';

export default {
  /**
   * @param  {string} text
   */
  create: function(title) {
    dispatcher.dispatch({
      actionType: productConstants.PRODUCTS_CREATE,
      product: {
        title: title
      }
    });
  },

  fetchList: function() {
    productsApi.getList()
      .then(result => {
        dispatcher.dispatch({
          actionType: productConstants.PRODUCTS_LIST_DATA_RECEIVED,
          products: result.data.products
        });
      })
  },

  /**
   * @param  {integer} id
   */
  remove: function(id) {
    dispatcher.dispatch({
      actionType: productConstants.PRODUCTS_REMOVE,
      id: id
    });
  }

};
