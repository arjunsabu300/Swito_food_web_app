const express = require('express');
const { protect } = require('../Middleware/Auth');
const {
  addMenuItem,
  getMenuByRestaurant,
  updateMenuItem,
  deleteMenuItem,
} = require('../Controller/Menucontroller');
const router = express.Router();

router.post('/', protect, addMenuItem);
router.get('/restaurant/:restaurantId', getMenuByRestaurant);
router.put('/:id', protect, updateMenuItem);
router.delete('/:id', protect, deleteMenuItem);

module.exports = router;
