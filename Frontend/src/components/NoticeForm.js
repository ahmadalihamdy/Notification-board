import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
// eslint-disable-next-line no-unused-vars
import Alert from '@mui/material/Alert'; // Ignoring the warning for unused variable
import './NoticeForm.css';
import Navigation from './Navigation';

const NoticeForm = ({ onAddNotice }) => {
  const [newNotice, setNewNotice] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleTextChange = (e) => {
    setNewNotice(e.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  // eslint-disable-next-line no-unused-vars
  const handleVideoChange = (e) => {
    setSelectedVideo(e.target.files[0]);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNotice({
      text: newNotice,
      image: selectedImage,
      video: selectedVideo,
    });
    setNewNotice('');
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  return (
    <>
      <Navigation />
      <div className="notice-form">
        <img
          src="./Assets/cosmopolitan.png"
          alt="Cosmopolitan University Abuja Logo"
          className="logo"
        />
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
            <InputLabel htmlFor="image-input">Choose Image</InputLabel>
            <Input
              id="image-input"
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleImageChange}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="video-input">Choose Video</InputLabel>
            <Input
              id="video-input"
              type="file"
              accept=".mp4, .avi, .mkv"
              onChange={handleVideoChange}
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