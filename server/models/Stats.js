const mongoose = require('mongoose');

const Stats = mongoose.model('Stats', {
  sport: {
    type: String,
    require: true,
  },
  user: { type: mongoose.ObjectId, ref: 'User' },
});

module.exports = Stats;
