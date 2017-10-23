import productServices from '../../app/components/products/services';

const getProductsState = async (token) => {
  let products = [];
  if (token) {
    const response = await productServices({ token }).getList();
    products = response.data && response.data.products ? response.data.products : [];
  }
  return {
    products: {
      items: products,
    },
  };
};

export default async (url, token) => {
  switch (url) {
    case '/products':
      return getProductsState(token);
    default:
      return {};
  }
};
