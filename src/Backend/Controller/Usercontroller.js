const User = require('../Models/Users');

exports.getProfile = (req, res) => res.json(req.user);

exports.updateProfile = async (req, res) => {
  const { name, phone } = req.body;
  const user = await User.findById(req.user._id);
  if (!user) return res.status(404).json({ msg: 'User not found' });
  user.name = name || user.name;
  user.phone = phone || user.phone;
  await user.save();
  res.json(user);
};

exports.getCart = (req, res) => {
  res.json(req.user.cart || []);
};

exports.addToCart = async (req, res) => {
  const { itemId, name, quantity, price } = req.body;
  const user = await User.findById(req.user._id);
  const exist = user.cart.find(item => item.itemId === itemId);
  if (exist) exist.quantity += quantity;
  else user.cart.push({ itemId, name, quantity, price });
  await user.save();
  res.json(user.cart);
};

exports.updateCartItem = async (req, res) => {
  const { itemId, quantity } = req.body;
  const user = await User.findById(req.user._id);
  user.cart = user.cart.map(item =>
    item.itemId === itemId ? { ...item._doc, quantity } : item
  );
  await user.save();
  res.json(user.cart);
};

exports.removeCartItem = async (req, res) => {
  const user = await User.findById(req.user._id);
  user.cart = user.cart.filter(item => item.itemId !== req.params.itemId);
  await user.save();
  res.json(user.cart);
};

exports.clearCart = async (req, res) => {
  const user = await User.findById(req.user._id);
  user.cart = [];
  await user.save();
  res.json([]);
};
