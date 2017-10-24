import dispatcher from '../../modules/dispatcher';
import productConstants from './constants';
import pageConstants from '../layouts/constants';
import services from './services';

export default {
  create(product) {
    dispatcher.dispatch({
      actionType: pageConstants.LOADING_STARTED,
    });
    if (product && product.title) {
      services().create(product)
        .then((result) => {
          if (result.data.success) {
            this.fetchList();
          }
        });
    }
  },

  fetchList() {
    dispatcher.dispatch({
      actionType: pageConstants.LOADING_STARTED,
    });
    services().getList()
      .then((result) => {
        dispatcher.dispatch({
          actionType: productConstants.PRODUCTS_LIST_DATA_RECEIVED,
          products: result.data.products,
        });
        dispatcher.dispatch({
          actionType: pageConstants.LOADING_COMPLETED,
        });
      });
  },

  delete(id) {
    dispatcher.dispatch({
      actionType: pageConstants.LOADING_STARTED,
    });
    if (Number.isInteger(id)) {
      services().delete(id)
        .then((result) => {
          if (result.data.success) {
            this.fetchList();
          }
        });
    }
  },
};
