var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    
  },
  role : {
    type : String,
    required : true
  },
  isAuthenticatedWithGoogle : {
    type : String
  }
});
var User = mongoose.model('User', UserSchema);
module.exports = User;