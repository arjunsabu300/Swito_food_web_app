const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    discount_percent: { type: Number, required: true },
    max_discount: { type: Number, required: true },
    min_order_value: { type: Number, required: true },
    expiry_date: { type: Date, required: true },
    is_active: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now }

});

const Coupons = mongoose.model('Coupon',CouponSchema);

module.exports = Coupons;