import axios from 'axios';

export default (options) => {
  if (!options) throw new Error('no parameters given for request instance creation');
  if (!options.baseURL) throw new Error('no base url given for request instance creation');
  const params = {
    baseURL: options.baseURL,
    headers: {},
  };
  if (options.headers) {
    params.headers = { ...options.headers };
  }
  if (options.token) {
    params.headers.Authorization = options.token;
  }
  if (options.timeout) params.timeout = options.timeout;
  return axios.create(params);
};
