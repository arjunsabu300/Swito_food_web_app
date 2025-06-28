const User = require('../Models/Users');
const Address = require('../Models/Address');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    const address = await Address.find({ user_id: req.user._id });

    res.json({ user, address });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateProfile = async (req, res) => {
  const { name, phone, email, address_line, city, zip, is_default } = req.body;

  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    user.name = name || user.name;
    user.phone = phone || user.phone;
    user.email = email || user.email;
    await user.save();

    if (address_line && city && zip) {
      await Address.findOneAndUpdate(
        { user_id: req.user._id, is_default: true },
        { address_line, city, zip, is_default: true },
        { upsert: true, new: true }
      );
    }

    res.json({ msg: "Profile updated" });
  } catch (err) {
    res.status(500).json({ msg: "Update failed", error: err.message });
  }
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
