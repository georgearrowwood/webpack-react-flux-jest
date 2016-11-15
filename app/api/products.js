import request from '../utils/request';

export default {

  getList: function() {
    return request.get('/api/products');
  },

  create: function(product) {
    console.log('ss', product);
    return request.post('/api/products', {product: product});
  },

  delete: function(id) {
    console.log('d', id);
    return request.delete('/api/products/' + id);
  }

}
