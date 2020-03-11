var express = require('express')
var router = express.Router()
var phoneModels = require('../models/Phones')

router.get('/getprice/', function (req, res, next) {
  console.log('Getting price')
  let model = 'iPhone 11'
  // let mo = model.replace(' ', '/s')
  phoneModels.find(
    { brand: req.query.brand, model: { $eq: req.query.model } },
    function (err, service) {
      if (err) res.send(err)
      else res.send(service)
    }
  )
})

module.exports = router
