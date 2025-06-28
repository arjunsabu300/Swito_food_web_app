const express = require('express');
const { protect } = require('../Middleware/Auth');
const {
  getProfile,
  updateProfile,
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart,
} = require('../Controller/Usercontroller');
const router = express.Router();

router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);

router.get('/cart', protect, getCart);
router.post('/cart', protect, addToCart);
router.put('/cart', protect, updateCartItem);
router.delete('/cart/:itemId', protect, removeCartItem);
router.delete('/cart', protect, clearCart);

module.exports = router;
