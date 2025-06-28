const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const User = require('../Models/Users');
const Coupon = require('../models/Coupon');

exports.placeOrder = async (req, res) => {
  const user = await User.findById(req.user._id);
  const { restaurant_id, delivery_address, coupon_code } = req.body;
  let total = user.cart.reduce((sum, i) => sum + i.quantity * i.price, 0);
  let discount = 0;
  let coupon = null;
  if (coupon_code) {
    coupon = await Coupon.findOne({ code: coupon_code, is_active: true });
    if (coupon && total >= coupon.min_order_value && new Date() < coupon.expiry_date) {
      discount = Math.min((coupon.discount_percent / 100) * total, coupon.max_discount);
    }
  }
  const final_amount = total - discount;
  const order = await Order.create({
    user_id: req.user._id,
    restaurant_id,
    coupon_id: coupon?._id,
    total, discount, final_amount,
    delivery_address
  });
  const items = user.cart.map(i => ({
    order_id: order._id,
    item_name: i.name,
    quantity: i.quantity,
    unit_price: i.price
  }));
  await OrderItem.insertMany(items);
  user.cart = [];
  await user.save();
  res.json({ order, items });
};

exports.getUserOrders = async (req, res) => {
  const orders = await Order.find({ user_id: req.user._id });
  res.json(orders);
};

exports.getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order || !order.user_id.equals(req.user._id))
    return res.status(403).json({ msg: 'Forbidden' });
  const items = await OrderItem.find({ order_id: order._id });
  res.json({ order, items });
};

exports.updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ msg: 'Not found' });
  order.status = req.body.status;
  await order.save();
  res.json(order);
};
