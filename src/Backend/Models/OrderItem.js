const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  item_name: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit_price: { type: Number, required: true }
});

const Orderitems = mongoose.model('OrderItem', orderItemSchema);
module.exports = Orderitems;