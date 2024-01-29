const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/cosmopolitan_university', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// User model
const User = mongoose.model('User', {
    name: String,
    email: String,
    username: String,
    password: String,
  });

// API endpoint to get all users
  app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Simulate user authentication (replace this with actual authentication logic)
  const user = await User.findOne({ username });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful' });
});

app.post('/api/users', async (req, res) => {
    const { id, name, email, username, password } = req.body;
  
    try {
      if (id) {
        // Update existing user
        await User.findByIdAndUpdate(id, { name, email, username, password });
      } else {
        // Add new user
        const newUser = new User({ name, email, username, password });
        await newUser.save();
      }
      res.json({ message: 'User saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // API endpoint to delete a user
  app.delete('/api/users/:id', async (req, res) => {
    const userId = req.params.id;
  
    try {
      await User.findByIdAndDelete(userId);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  app.post('/api/logout', (req, res) => {   
    res.json({ message: 'Logout successful' });
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});