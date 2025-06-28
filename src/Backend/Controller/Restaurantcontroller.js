const Restaurant = require('../Models/restaurant');

exports.createRestaurant = async (req, res) => {
  const { name, location, contact } = req.body;
  const rest = await Restaurant.create({
    name, location, contact, owner_id: req.user._id
  });
  res.json(rest);
};

exports.getAllRestaurants = async (req, res) => {
  const list = await Restaurant.find();
  res.json(list);
};

exports.getRestaurantById = async (req, res) => {
  const rest = await Restaurant.findById(req.params.id);
  if (!rest) return res.status(404).json({ msg: 'Not found' });
  res.json(rest);
};

exports.updateRestaurant = async (req, res) => {
  const rest = await Restaurant.findById(req.params.id);
  if (!rest || !rest.owner_id.equals(req.user._id))
    return res.status(403).json({ msg: 'Forbidden' });
  Object.assign(rest, req.body);
  await rest.save();
  res.json(rest);
};

exports.deleteRestaurant = async (req, res) => {
  const rest = await Restaurant.findById(req.params.id);
  if (!rest || !rest.owner_id.equals(req.user._id))
    return res.status(403).json({ msg: 'Forbidden' });
  await rest.remove();
  res.json({ msg: 'Deleted' });
};
