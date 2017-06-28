import request from '../utils/request'

export default {
  getList: function () {
    return request.get('/api/products')
  },

  create: function (product) {
    return request.post('/api/products', {product: product})
  },

  delete: function (id) {
    return request.delete('/api/products/' + id)
  }
}
