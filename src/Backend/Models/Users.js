const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, unique: true },
  created_at: { type: Date, default: Date.now }
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare
userSchema.methods.comparePassword = function (pwd) {
  return bcrypt.compare(pwd, this.password);
};



const User = mongoose.model('Users', userSchema);
module.exports = User;