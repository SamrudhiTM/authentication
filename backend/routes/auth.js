const express = require('express');
const passport = require('passport');
const { createToken } = require('../utils/jwt');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs'); // Make sure to import bcrypt




// Manual Signup Route
router.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
      }
  
      const newUser = new User({ name, email, password, provider: 'local' });
      await newUser.save();
  
      console.log('✅ User saved', newUser);
  
      // Create JWT token and send it back once
      const token = createToken(newUser);
      return res.status(201).json({ token }); // ✅ Only send once
    } catch (err) {
      console.error("Error during signup:", err);
      return res.status(500).json({ message: 'Server error during signup' });
    }
  });
  
  
  // Manual Login Route
   // make sure this path is correct
   router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        console.log("❌ User not found");
        return res.status(404).json({ message: 'User not found' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("❌ Invalid credentials");
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      console.log("✅ Login successful");
  
      // create a token
      const token = createToken(user);
  
      // send token + user info
      res.json({
        token,
        user: {
          _id: user._id,
          email: user.email,
          name: user.name
        }
      });
    } catch (error) {
      console.error("❌ Login error:", error.message);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  
  
  
  
// Google OAuth
router.get(
  '/google',
  passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email'],
    prompt: 'select_account'
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    if (!req.user) return res.status(401).send('Authentication failed.');
    const token = createToken(req.user);
    res.redirect(`${process.env.FRONTEND_URL}/auth-success?token=${token}`);
  }
);

// Facebook OAuth
router.get(
  '/facebook',
  passport.authenticate('facebook', {
    session: false,
    scope: ['email']
  })
);

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { session: false }),
  (req, res) => {
    if (!req.user) return res.status(401).send('Authentication failed.');
    const token = createToken(req.user);
    res.redirect(`${process.env.FRONTEND_URL}/auth-success?token=${token}`);
  }
);

// Apple OAuth (Mock)
// router.get('/apple', passport.authenticate('apple', { session: false }));

// router.get(
//   '/apple/callback',
//   passport.authenticate('apple', { session: false }),
//   async(req, res) => {
//     if (!req.user) return res.status(401).send('Authentication failed.');
//     const token = createToken(req.user);
//     res.redirect(`http://localhost:3000/auth-success?token=${token}`);
//   }
// );

router.get('/apple', (req, res, next) => {
    console.log("Apple login route hit");
  
    passport.authenticate('apple', { session: false }, (err, user, info) => {
      if (err || !user) {
        console.log("Authentication failed:", err, user);
        return res.status(401).send('Mock Apple Authentication Failed');
      }
  
      // Success - redirect with token
      const token = require('../utils/jwt').createToken(user);
      return res.redirect(`http://localhost:3000/auth-success?token=${token}`);
    })(req, res, next);
  });
  

module.exports = router;
