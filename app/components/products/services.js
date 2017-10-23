import services from '../../modules/services'

export default {
  getList: function () {
    return services().get('/api/products')
  },

  create: function (product) {
    return services().post('/api/products', {product: product})
  },

  delete: function (id) {
    return services().delete('/api/products/' + id)
  }
}
