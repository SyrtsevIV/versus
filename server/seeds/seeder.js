/* eslint-disable no-await-in-loop */
const mongoose = require('mongoose');
const User = require('../models/User');
const Stats = require('../models/Stats');
const faker = require('faker');
const Tournament = require('../models/Tournament');
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

// seedTournament();

// Seed Brackets

const start = async () => {
  // await seedUsers(8);
  // await seedStats();
  // await seedTournament(12);
};

start();
