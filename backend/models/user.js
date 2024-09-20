// routes/authRoutes.js
const express = require('express');
const { getDb } = require('/home/laxita/Recipes/backend/database/db.js'); // Import the getDb function from db.js

const router = express.Router();

function setR(app){
// Signup route for registering a new user
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
console.log(req.body)
let userCollection
  try {
    // Check if user already exists
    const db = getDb();
    userCollection= db.collection('users');
    const document = await userCollection.findOne({ name: name });
    // const existingUser = await User.findOne({ email });
    if (document) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Create new user
    userCollection.insertOne({
        name: name,
        email: email,
        password: password
      });

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});
}

module.exports = setR;
