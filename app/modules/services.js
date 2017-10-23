import cookie from 'react-cookies';

import requestInstance from './request';
import config from './config';

export default (options) => {
  const params = {
    baseURL: config.apiUrl,
  };
  const userToken = cookie.load('userToken');
  if (userToken) {
    params.headers = {
      Authorization: userToken,
    };
  }
  if (options && options.token) {
    params.token = options.token;
  }
  return requestInstance(params);
};
