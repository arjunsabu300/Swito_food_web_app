const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  address_line: String,
  city: String,
  zip: String,
  is_default: Boolean
});
const Address = mongoose.model('Address', addressSchema);
module.exports = Address;