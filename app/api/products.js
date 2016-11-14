import request from '../utils/request';

export default {

  getList: function() {
    return request.get('/api/products');
  }

}
