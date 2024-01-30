
const express = require('express');
const app = express();
const usersRouter = require('./api/users');

// Use the users router
app.use('/api/users', usersRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
