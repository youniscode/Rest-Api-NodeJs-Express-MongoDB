// Requiring Mongoose
const mongoose = require('mongoose')

// Creating Schema
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    required: true
  },
  subscribDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

// Export The Schema
module.exports = mongoose.model('Subscriber', subscriberSchema)