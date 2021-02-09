const mongoose = require('mongoose');

// mongoose.pluralize(null);

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
    defaut: 'https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg',
  },
  stats: { type: mongoose.ObjectId, ref: 'stats' },
  googleId: String,
  tournaments: [{ type: mongoose.ObjectId, ref: 'Tournament' }],
});

module.exports = User;
