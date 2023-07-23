const mongoose = require('../../config/database')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

const User = mongoose.model('User', UserSchema)
module.exports = User