import React from 'react';
import { Button, Typography } from '@mui/material';
import Navigation from './Navigation'

const LogoutPage = () => {
  const handleLogout = async () => {
    try {
      // Call the server-side logout (replace with your server logout endpoint)
      const response = await fetch('http://localhost:5000/components/Logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Logout successful');
      } else {
        console.error('Logout failed');
      }

      // Remove the token from local storage (replace with your token storage method)
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
   <><Navigation/>
    <div>
      <Typography variant="h2">Logout Page</Typography>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
      <Typography variant="body1">You have been successfully logged out.</Typography>
    </div>
   </>
  );
};

export default LogoutPage;