const express = require('express');
const { protect } = require('../Middleware/Auth');
const {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
} = require('../Controller/Restaurantcontroller');
const router = express.Router();

router.post('/', protect, createRestaurant);
router.get('/', getAllRestaurants);
router.get('/:id', getRestaurantById);
router.put('/:id', protect, updateRestaurant);
router.delete('/:id', protect, deleteRestaurant);

module.exports = router;
