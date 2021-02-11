const mongoose = require('mongoose');

// mongoose.pluralize(null);

const User = mongoose.model('User', {
  login: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    // unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    default: '/default-user.jpg',
  },
  stats: { type: mongoose.ObjectId, ref: 'Stats' },
  googleId: String,
  tournaments: [{ type: mongoose.ObjectId, ref: 'Tournament' }],
});

module.exports = User;
