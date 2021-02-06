const mongoose = require('mongoose');
const User = mongoose.model('User', {
  login: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    default: '🏓',
  },
  stats: { type: mongoose.ObjectId, ref: 'Stats' },
  googleId: String,
  avatar: String,
});
module.exports = User;

