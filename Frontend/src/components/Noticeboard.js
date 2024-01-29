import React, { useState } from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import './NoticeBoard.css';
import Navigation from './Navigation';

const NoticeBoard = ({ notices, onAddNotice }) => {
  const [newNotice, setNewNotice] = useState({ text: '', image: '', video: '' });

  const handleAddNotice = () => {
    // Validate if any of the fields are empty before adding a notice
    if (newNotice.text || newNotice.image || newNotice.video) {
      onAddNotice(newNotice);
      // Clear the form after adding the notice
      setNewNotice({ text: '', image: '', video: '' });
    }
  };

  return (
    <><Navigation />
      <div className="notice-board">
        <h2>NOTICE BOARD</h2>
        <ListGroup>
          {notices.map((notice, index) => (
            <ListGroup.Item key={index}>
              <p>{notice.text}</p>
              {notice.image && <Image src={notice.image} alt="Selected" fluid />}
              {notice.video && <video src={notice.video} controls />}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="add-notice-form">
          <h3>Add Notice</h3>
          <input
            type="text"
            placeholder="Text"
            value={newNotice.text}
            onChange={(e) => setNewNotice({ ...newNotice, text: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newNotice.image}
            onChange={(e) => setNewNotice({ ...newNotice, image: e.target.value })}
          />
          <input
            type="text"
            placeholder="Video URL"
            value={newNotice.video}
            onChange={(e) => setNewNotice({ ...newNotice, video: e.target.value })}
          />
          <button onClick={handleAddNotice}>Add Notice</button>
        </div>
      </div>
    </>
  );
};

export default NoticeBoard;