var mongoose = require('mongoose')
const Schema = mongoose.Schema

var ProductsSchema = new Schema({
  brand: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  version: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  }
})
var ProductsServices = mongoose.model('Products', ProductsSchema)
module.exports = ProductsServices
