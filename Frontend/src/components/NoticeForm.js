// NoticeForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import './NoticeForm.css'; // Import the CSS file
import Navigation from './Navigation'

const NoticeForm = ({ addNotice }) => {
  const [newNotice, setNewNotice] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTextChange = (e) => {
    setNewNotice(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNotice({ text: newNotice, image: selectedFile });
    setNewNotice('');
    setSelectedFile(null);
  };

  return (
   <><Navigation/>
    <div className="notice-form">
      <img src="./Assets/cosmopolitan.png" alt="Cosmopolitan University Abuja Logo" className="logo" />
      <h1>COSMOPOLITAN UNIVERSITY ABUJA</h1>
      <h2>Add Notice</h2>
      <Form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <TextField
            label="Enter notice"
            variant="outlined"
            value={newNotice}
            onChange={handleTextChange}
            margin="normal"
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="file-input">Choose File</InputLabel>
          <Input
            id="file-input"
            type="file"
            accept=".pdf, .doc, .docx, .jpg, .jpeg, .png" // Define accepted file types
            onChange={handleFileChange}
          />
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Add Notice
        </Button>
      </Form>
    </div>
   </>
  );
};

export default NoticeForm;