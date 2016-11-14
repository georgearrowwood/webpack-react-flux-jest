import axios from 'axios';
import config from './config';


export default {

  get: function(url) {
    return axios.get(config.apiServerUrl + url);
  },

  put: function(url, payload) {
    return axios.put(config.apiServerUrl + url, payload);
  },

  post: function(url, payload) {
    return axios.post(config.apiServerUrl + url, payload);
  },

  delete: function(url, payload) {
    return axios.delete(config.apiServerUrl + url, payload);
  }
};
