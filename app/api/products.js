import request from './request';
import dispatcher from '../dispatcher';

export default {

  getList: function() {
    return request.get('http://localhost:8080/api/products')
      .then(result => {
        dispatcher.dispatch({
          action: 'product-data-received',
          products: result.data.products
        });
      })
  }

}
