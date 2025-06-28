const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

const Restaurant = mongoose.model('restaurant', restaurantSchema);
module.exports = Restaurant;