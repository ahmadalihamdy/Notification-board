// UserPage.js
import React, { useState, useEffect, useCallback } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import Navigation from './Navigation';

const UserPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ahmad Ali', email: 'ahhmadaliyou2000@gmail.com', username: 'Hamdi', password: '12345' }
  ]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users');
      if (response.ok) {
        const data = await response.json();
        setUsers([users[0], ...data]);
      } else {
        console.error('Error fetching users:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }, [users]);

  useEffect(() => {
    // Fetch other users from the backend when the component mounts
    fetchUsers();
  }, [fetchUsers]);

  const handleOpen = (user) => {
    setSelectedUser(user);
    setName(user.name || '');
    setEmail(user.email || '');
    setUsername(user.username || '');
    setPassword(user.password || '');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser({});
    setName('');
    setEmail('');
    setUsername('');
    setPassword('');
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedUser.id,
          name,
          email,
          username,
          password,
        }),
      });

      if (response.ok) {
        console.log('User saved successfully');
        fetchUsers();
      } else {
        console.error('Error saving user');
      }
    } catch (error) {
      console.error('Error saving user:', error);
    }

    handleClose();
  };

  const handleDelete = async (id) => {
    // Prevent deleting the admin user
    if (id === 1) {
      console.log('Cannot delete admin user');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('User deleted successfully');
        fetchUsers();
      } else {
        console.error('Error deleting user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <Navigation />
      <div>
        <h1>User Page</h1>
        <Button variant="contained" color="primary" onClick={() => handleOpen({})}>
          Add User
        </Button>
        <TableContainer component={Paper} style={{ marginTop: '16px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>NAME</TableCell>
                <TableCell>EMAIL</TableCell>
                <TableCell>USERNAME</TableCell>
                <TableCell>PASSWORD</TableCell>
                <TableCell>ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>
                    <Button color="primary" onClick={() => handleOpen(user)}>
                      Edit
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() => handleDelete(user.id)}
                      disabled={user.id === 1}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{selectedUser.id ? 'Edit User' : 'Add User'}</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default UserPage;
