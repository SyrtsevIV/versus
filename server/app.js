require('dotenv').config()
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const passport = require('passport')
const authRouter = require('./routes/auth')
const mongoose = require('mongoose')
const passportSetup = require('./config/passport')

const app = express();

const PORT = process.env.PORT ?? 3001;

mongoose.connect('mongodb://localhost:27017/Versus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
// Значения корс для приема фетчей с клиента.
app.use(cors({
  credentials: true,
  origin: process.env.REACT_APP_SERVER_URL,
}));

app.use(passport.initialize())
app.use(passport.session())

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter)

app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT);
});
