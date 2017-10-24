import services from '../../modules/services';

export default (options) => {
  const instance = services(options);
  return {
    getList: () => instance.get('/api/products'),
    create: product => instance.post('/api/products', { product }),
    delete: id => instance.delete(`/api/products/${id}`),
  };
};
