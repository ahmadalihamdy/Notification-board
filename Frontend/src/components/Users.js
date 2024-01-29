// UserPage.js
import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import Navigation from './Navigation'

// useEffect(() => {
//   // Fetch users from the backend when the component mounts
//   fetchUsers();
// }, []);

// const initialUsers = [
//   { id: 1, name: 'Ahmad Ali', email: 'ahhmadaliyou2000@gmail.com', Username: 'Hamdi', password: '1234' },
//   { id: 2, name: 'Hayat Tuge', email: 'hsmltuge@gmail.com', Username: 'Hayat', password: '1234' },
// ];

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

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
          Username,
          password,
        }),
      });

      if (response.ok) {
        console.log('User saved successfully');
        fetchUsers(); // Fetch updated user list
      } else {
        console.error('Error saving user');
      }
    } catch (error) {
      console.error('Error saving user:', error);
    }

    handleClose();
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('User deleted successfully');
        fetchUsers(); // Fetch updated user list
      } else {
        console.error('Error deleting user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
   <><Navigation/>
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
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell>
                  <Button color="primary" onClick={() => handleOpen(user)}>
                    Edit
                  </Button>
                  <Button color="secondary" onClick={() => handleDelete(user.id)}>
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
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="password"
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