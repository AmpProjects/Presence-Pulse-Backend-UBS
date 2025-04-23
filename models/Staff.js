const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  staffID: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true
  },
 
  department: {type: String },
  contact: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
});

// export default mongoose.model('Staff', staffSchema);
const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
