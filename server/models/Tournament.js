const mongoose = require('mongoose');

const Tournament = mongoose.model('Tournament', {
  type:  {
    type: String,
    default: 'Сингл'
  },
  title: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
    default: new Date(),
  },
  description: String,
  place: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
    default: 'future',
  },
  creator: { type: mongoose.ObjectId, ref: 'User' },
  participants: [{ type: mongoose.ObjectId, ref: 'User' }],
  bracket: { type: mongoose.ObjectId, ref: 'Bracket' },
});

module.exports = Tournament;
