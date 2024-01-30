
const express = require('express');
const router = express.Router();

// Sample initial data
let users = [
  { id: 1, name: 'Ahmad Ali', email: 'ahhmadaliyou2000@gmail.com', username: 'Hamdi', password: '12345' }
];

// Middleware to parse JSON requests
router.use(express.json());

// Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// Get a specific user by ID
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Add a new user
router.post('/', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  res.json(newUser);
});

// Update a user by ID
router.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  users = users.map(user => (user.id === userId ? { ...user, ...updatedUser } : user));

  res.json(updatedUser);
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);

  res.json({ message: 'User deleted successfully' });
});

module.exports = router;