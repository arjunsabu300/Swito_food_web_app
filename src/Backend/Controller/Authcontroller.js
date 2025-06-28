const User = require('../Models/Users');
const {generateToken} = require('../Utils/token');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { name, phone, password } = req.body;
  console.log(req.body);
  const exists = await User.findOne({ phone });
  if (exists) return res.status(400).json({ msg: 'User exists' });
  const user = await User.create({ name, phone, password });
  res.json({ token: generateToken(user), user });
};

exports.login = async (req, res) => {
  const { phone, password } = req.body;
  const user = await User.findOne({ phone });
  if (!user || !(await user.comparePassword(password)))
    return res.status(400).json({ msg: 'Invalid credentials' });
  res.json({ token: generateToken(user), user });
};

exports.getMe = (req, res) => {
  res.json({ user: req.user });
};
