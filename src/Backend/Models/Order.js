const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
    restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'restaurant', required: true },
    coupon_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' },
    status: { type: String, enum: ['pending', 'confirmed', 'delivered', 'cancelled'], default: 'pending' },
    delivery_address: { type: String, required: true },
    total: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    final_amount: { type: Number, required: true },
    created_at: { type: Date, default: Date.now }
});

const Orders = mongoose.model('Order',OrderSchema);
module.exports = Orders;