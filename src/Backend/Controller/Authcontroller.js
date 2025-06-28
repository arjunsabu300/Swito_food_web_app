const User = require('../Models/Users');
const {generateToken} = require('../Utils/token');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { name, phone, password,email } = req.body;
  console.log(req.body);
  const exists = await User.findOne({ phone });
  if (exists) return res.status(400).json({ msg: 'User exists' });
  const user = await User.create({ name, phone, password,email });
  res.json({ token: generateToken(user), user, msg: 'User created successfully' });
};

exports.login = async (req, res) => {
  const { phone, password } = req.body;
  const user = await User.findOne({ phone });
  if (!user || !(await user.comparePassword(password)))
    return res.status(400).json({ msg: 'Invalid credentials' });
  res.json({ token: generateToken(user), user , msg: 'Login successful' });
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ msg: "User logged out" });
};

exports.getMe = (req, res) => {
  res.json({ user: req.user });
};
