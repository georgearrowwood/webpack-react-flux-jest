var express = require('express');
var router = express.Router();

router.get('/api/products', function(req, res, next) {
  console.log('bekend list');
  res.send({products: [
    {id: 1, title: 'aa'},
    {id: 2, title: 'bb'},
  ]});
});

module.exports = router;
