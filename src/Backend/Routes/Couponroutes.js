const express = require('express');
const { protect } = require('../Middleware/Auth');
const {
  createCoupon,
  getAllCoupons,
  applyCoupon,
} = require('../Controller/Couponcontroller');
const router = express.Router();

router.post('/', protect, createCoupon);
router.get('/', getAllCoupons);
router.post('/apply', protect, applyCoupon);

module.exports = router;
