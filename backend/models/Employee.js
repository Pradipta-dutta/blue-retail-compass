
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  alerts: [{
    alertId: String,
    message: String,
    timestamp: Date,
    status: {
      type: String,
      enum: ['pending', 'delivered'],
      default: 'pending'
    }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Employee', employeeSchema);
