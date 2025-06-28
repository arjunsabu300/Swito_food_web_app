const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  amount_paid: { type: Number, required: true },
  payment_method: { type: String, enum: ['card', 'wallet', 'cod', 'upi'], required: true },
  payment_status: { type: String, enum: ['paid', 'failed', 'pending'], default: 'pending' },
  transaction_id: { type: String },
  paid_at: { type: Date, default: Date.now }
});

const Payments = mongoose.model('Payment', paymentSchema);

module.exports = Payments;
