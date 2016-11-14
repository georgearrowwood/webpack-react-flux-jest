import express from 'express';
let router = express.Router();

let _products = [
  {id: 1, title: 'aa'},
  {id: 2, title: 'bb'},
];

function newId() {
  return Math.floor(Math.random() * (1000000 - 10000) + 10000);
}

router.get('/api/products', function(req, res, next) {
  res.send({products: _products});
});

router.post('/api/products', function(req, res, next) {
  if (req.body.product && req.body.product.title) {
    _products.push({id: newId(), title: req.body.product.title});
    res.send({success: true});
  } else {
    res.send({success: false});
  }
});

module.exports = router;
