import axios from 'axios';

export default {

  get: function(url) {
    return axios.get(url);
  }
  
};
