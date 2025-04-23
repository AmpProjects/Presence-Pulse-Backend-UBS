const mongoose = require('mongoose');

const signInSchema = new mongoose.Schema({
  staffID: {
    type: String,
    // required: true
  },
  name: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});


const SignIn = mongoose.model('SignIn', signInSchema);
module.exports = SignIn;