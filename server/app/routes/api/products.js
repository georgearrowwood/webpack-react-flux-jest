import express from 'express'
let router = express.Router()

let _products = [
  {id: 1, title: 'aa'},
  {id: 2, title: 'bb'}
]

function newId () {
  return Math.floor(Math.random() * (1000000 - 10000) + 10000)
}

router.get('/api/products', (req, res, next) => {
  setTimeout(() => {
    res.send({products: _products})
  }, 700)
})

router.post('/api/products', (req, res, next) => {
  if (req.body.product && req.body.product.title) {
    _products.push({id: newId(), title: req.body.product.title})
    res.send({success: true})
  } else {
    res.send({success: false})
  }
})

router.delete('/api/products/:id', (req, res, next) => {
  console.log('r', req.params.id)
  _products = _products.filter(item => item.id !== parseInt(req.params.id))
  console.log('rr', _products)
  res.send({success: true})
})

module.exports = router
