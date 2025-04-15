const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  googleId: String,
  facebookId: String,
  appleId: String,
  name: String,
  email: { type: String, required: true },
  password: { type: String },
  provider: String,
  avatar: String
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  });
  

module.exports = mongoose.model('User', userSchema);
