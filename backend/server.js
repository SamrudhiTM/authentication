const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// const session = require('express-session');
const cors = require('cors');
require('dotenv').config();
require('./config/passport');

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
// app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/auth', require('./routes/auth'));

app.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
