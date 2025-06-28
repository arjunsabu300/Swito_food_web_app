const express = require('express');
const { protect } = require('../Middleware/Auth');
const {
  placeOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
} = require('../Controller/Ordercontroller');
const router = express.Router();

router.post('/', protect, placeOrder);
router.get('/', protect, getUserOrders);
router.get('/:id', protect, getOrderById);
router.put('/:id/status', protect, updateOrderStatus);

module.exports = router;
