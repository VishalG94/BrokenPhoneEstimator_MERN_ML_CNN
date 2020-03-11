var mongoose = require('mongoose')
const Schema = mongoose.Schema

var PhonesSchema = new Schema({
  brand: {
    type: String,
    required: true,
    trim: true
  },
  model: {
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
var PhoneModels = mongoose.model('Phones', PhonesSchema)
module.exports = PhoneModels
