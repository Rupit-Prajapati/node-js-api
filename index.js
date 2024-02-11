const mongoose = require('mongoose');
const User = require('./schema')
// Connection URI (replace 'your_connection_string' with your actual connection string)
const uri = 'mongodb+srv://rupit2330:rupit2330@cluster0.djnopui.mongodb.net/?retryWrites=true&w=majority';
const express = require('express');
const app = express();
// Connect to MongoDB Atlas
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(error => console.error('Error connecting to MongoDB Atlas:', error));

// Create a new user instance
// const newUser = new User({
//   name: 'John Doe',
//   email: 'john@example.com',
//   age: 30
// });

// // Save the new user to the database
// newUser.save()
//   .then(() => console.log('User saved successfully'))
//   .catch(error => console.error('Error saving user:', error));

User.find().then((data) => console.log('data', data)).catch(error => console.error('Error'));
app.get('/', (req, res) => {
  res.send("database")
});


app.listen(5000);