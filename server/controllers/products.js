
let products = [
  { id: 1, title: 'aa' },
  { id: 2, title: 'bb' },
];

function newId() {
  return Math.floor((Math.random() * (1000000 - 10000)) + 10000);
}

const productsController = {
  getList: (req, res) => {
    setTimeout(() => {
      res.send({ products });
    }, 700);
  },
  addOne: (req, res) => {
    if (req.body.product && req.body.product.title) {
      products.push({ id: newId(), title: req.body.product.title });
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  },
  delete: (req, res) => {
    products = products.filter(item => item.id !== parseInt(req.params.id, 10));
    res.send({ success: true });
  },
};

export default productsController;
