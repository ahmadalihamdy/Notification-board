// server.js

const express = require('express');
const { PrismaClient } = require('../prisma/client'); // Adjust the path based on your project structure
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;

const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint to get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// API endpoint to add/update a user
app.post('/api/users', async (req, res) => {
  const { id, name, email, username, password } = req.body;

  try {
    if (id) {
      // Update existing user
      await prisma.user.update({
        where: { id: id },
        data: { name, email, username, password },
      });

      res.json({ message: 'User updated successfully' });
    } else {
      // Add new user
      await prisma.user.create({
        data: { name, email, username, password },
      });

      res.json({ message: 'User saved successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// API endpoint to delete a user
app.delete('/api/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id, 10);

  try {
    await prisma.user.delete({
      where: { id: userId },
    });

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Logout route
app.post('/api/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});