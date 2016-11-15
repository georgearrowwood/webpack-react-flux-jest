import dispatcher from '../utils/dispatcher';
import productConstants from '../constants/products';
import productsApi from '../api/products';

export default {
  /**
   * @param  {string} text
   */
  create: function(product) {
    if (product && product.title) {
      productsApi.create(product)
        .then(result => {
          if (result.data.success) {
            this.fetchList();
          }
        })
    }
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
  delete: function(id) {
    console.log('d1', id);
    if (Number.isInteger(id)) {
      productsApi.delete(id)
        .then(result => {
          if (result.data.success) {
            this.fetchList();
          }
        })
    }
  }

};
