const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET || 'secret' // Ideally defined in .env

// Signup endpoint
router.post('/signup', async (req, res) => {
  const { email, username, password } = req.body
  if (!email || !username || !password) {
    return res
      .status(400)
      .json({ message: 'Please provide email, username, and password' })
  }

  try {
    // Check if the email is already in use
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' })
    }

    // Create new user and save to database
    const newUser = new User({ email, username, password })
    await newUser.save()

    // Create a JWT token (expires in 1 hour)
    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' })

    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        username: newUser.username,
      },
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error during signup' })
  }
})

// Login endpoint
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Please provide email and password' })
  }

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    // Create a JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' })
    res.json({
      token,
      user: { id: user._id, email: user.email, username: user.username },
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error during login' })
  }
})

module.exports = router
