const mongoose = require('mongoose');
const User = require("../models/User");
const Stats = require('../models/Stats');
const faker = require('faker');
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

// Seed users
async function seedUsers() {
  for (let i = 0; i < 30; i+=1) {
    User.create({
      login: randomName(),
      email: randomEmail(),
      password: randomPass(),
      avatar: randomImageUrl(),
    });
  }
}
// seedUsers();

// Seed stats
async function seedStats() {
  const users = await User.find();
  for (let i = 0; i <= users.length; i += 1) {
    Stats.create({
      sport: "tennis",
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
  }
}
// seedStats();

// Seed Tournaments


// Seed Brackets
