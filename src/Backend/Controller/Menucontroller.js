const MenuItem = require('../Models/Menuitems');
const Restaurant = require('../Models/restaurant');

exports.addMenuItem = async (req, res) => {
  const rest = await Restaurant.findById(req.body.restaurant_id);
  if (!rest || !rest.owner_id.equals(req.user._id))
    return res.status(403).json({ msg: 'Forbidden' });
  const item = await MenuItem.create(req.body);
  res.json(item);
};

exports.getMenuByRestaurant = async (req, res) => {
  const menu = await MenuItem.find({ restaurant_id: req.params.restaurantId });
  res.json(menu);
};

exports.updateMenuItem = async (req, res) => {
  const item = await MenuItem.findById(req.params.id);
  if (!item) return res.status(404).json({ msg: 'Not found' });
  const rest = await Restaurant.findById(item.restaurant_id);
  if (!rest.owner_id.equals(req.user._id))
    return res.status(403).json({ msg: 'Forbidden' });
  Object.assign(item, req.body);
  await item.save();
  res.json(item);
};

exports.deleteMenuItem = async (req, res) => {
  const item = await MenuItem.findById(req.params.id);
  if (!item) return res.status(404).json({ msg: 'Not found' });
  const rest = await Restaurant.findById(item.restaurant_id);
  if (!rest.owner_id.equals(req.user._id))
    return res.status(403).json({ msg: 'Forbidden' });
  await item.remove();
  res.json({ msg: 'Deleted' });
};
