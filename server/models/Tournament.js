const mongoose = require('mongoose');

const Tournament = mongoose.model('Tournament', {
  title: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  description: String,
  place: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  creator: { type: mongoose.ObjectId, ref: 'User' },
  participants: [{ type: mongoose.ObjectId, ref: 'User' }],
});

module.exports = Tournament;
