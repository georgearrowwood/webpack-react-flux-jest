import servicesInstance from '../../modules/services';

export default () => {
  const instance = servicesInstance();
  return {
    login: data => instance.post('/api/login', data),
  };
};
