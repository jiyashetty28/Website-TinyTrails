const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import mongoose
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/Login', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define the User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema); // Create a User model

// Serve the HTML form at the root route ('/')
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Register.html')); // Serve the HTML file
});

// POST route to handle form submission
app.post('/submit', async (req, res) => {
  const { name, email, password} = req.body;

  const contactForm = new User({ // Create a new User instance
      name,
      email,
      password,
  });

  try {
    await contactForm.save(); // Save the user to MongoDB
    res.send('Form data submitted and stored in MongoDB successfully!');
  } catch (error) {
    res.status(500).send('Error storing data in MongoDB');
  }
});

// Start the server
app.listen(3008, () => {
  console.log('Server is running on http://localhost:3008');
});
