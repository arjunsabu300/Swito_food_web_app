const jwt = require('jsonwebtoken');
const User = require('../Models/Users');

exports.protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'Unauthorized' });
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(id).select('-password');
    next();
  } catch {
    res.status(401).json({ msg: 'Invalid token' });
  }
};
