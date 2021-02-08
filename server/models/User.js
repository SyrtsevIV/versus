const mongoose = require('mongoose');

mongoose.pluralize(null);

const User = mongoose.model('users', {
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
  stats: { type: mongoose.ObjectId, ref: 'stats' },
  googleId: String,
});
module.exports = User;
