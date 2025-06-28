const Coupon = require('../models/Coupon');

exports.createCoupon = async (req, res) => {
  const coupon = await Coupon.create(req.body);
  res.json(coupon);
};

exports.getAllCoupons = async (req, res) => {
  const coupons = await Coupon.find();
  res.json(coupons);
};

exports.applyCoupon = async (req, res) => {
  const { code } = req.body;
  const coupon = await Coupon.findOne({ code, is_active: true });
  if (!coupon || new Date() > coupon.expiry_date)
    return res.status(400).json({ msg: 'Invalid or expired coupon' });
  res.json(coupon);
};
