/* eslint-disable no-await-in-loop */
const mongoose = require('mongoose');
const User = require('../models/User');
const Stats = require('../models/Stats');
const faker = require('faker');
const Tournament = require('../models/Tournament');
const Match = require('../models/Match');
mongoose.connect('mongodb://localhost:27017/Versus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const randomName = () => faker.name.findName();
const randomEmail = () => faker.internet.email();
const randomPass = () => faker.internet.password();
const randomNumber = () => faker.random.number();
const randomImageUrl = () => faker.image.imageUrl();
const randomDesc = () => faker.name.jobDescriptor();
const randomAdress = () => faker.address.streetAddress();
const randomFutureDate = () => faker.date.future();

// Seed users
async function seedUsers(num) {
  for (let i = 0; i < num; i += 1) {
    User.create({
      login: randomName(),
      email: randomEmail(),
      password: randomPass(),
      avatar: randomImageUrl(),
    });
  }
}
// seedUsers(30);

// Seed stats
async function seedStats() {
  const users = await User.find();
  console.log(users.length);
  for (let i = 0; i < users.length; i += 1) {
    const stats = await Stats.create({
      sport: 'table tennis',
      user: users[i]._id,
      mmr: randomNumber(),
      rating: randomNumber(),
      won: randomNumber(),
      lost: randomNumber(),
      score: randomNumber(),
      missed: randomNumber(),
      gold: randomNumber(),
      silver: randomNumber(),
      bronze: randomNumber(),
    });
    const user = await User.findById(users[i]._id);
    user.stats = stats._id;
    await user.save();
  }
}
// seedStats();

// Seed Tournaments

async function seedTournament(num) {
  const users = await User.find();
  // Tournament.create({
  //   participants: users.slice(-num),
  // });
  for (let i = 0; i <= num; i += 1) {
    Tournament.create({
      title: randomName(),
      date: randomFutureDate(),
      description: randomDesc(),
      place: randomAdress(),
      creator: users[0],
      participants: users,
    });
  }
}

// Seed Mathes
async function seedMatches(num) {
  const users = await User.find();

  for (let i = 0; i < num; i += 1) {
    Match.create({
      player1: users[i].id,
      player2: users[i+1].id,
      score: {
        player1: Math.round(0 + Math.random() * (11 - 0)),
        player2: Math.round(0 + Math.random() * (11 - 0)),
      },
      tour: randomName(),
      duration: randomFutureDate(),
    });
  }
}


const start = async () => {
  // await seedUsers(10);
  // await seedStats(10);
  // await seedTournament(10);
  await seedMatches(20);
};

start();
