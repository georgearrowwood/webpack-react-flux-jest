import request from './request';

export default {

  getList: function() {
    return request.get('http://localhost:8080/api/products')
  }

}
