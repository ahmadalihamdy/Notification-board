import React from 'react';
import { Container, Typography, TextField, Button, Paper, Grid, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import './Login.css';
const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar style={{ backgroundColor: '#f50057' }}>
          <PersonIcon />
        </Avatar>
        <Typography variant="h5" style={{ margin: '16px 0' }}>
          Cosmopolitan University Abuja
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Username" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" type="password" variant="outlined" fullWidth />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" fullWidth style={{ margin: '16px 0' }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;