// NoticeBoard.js
import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import './NoticeBoard.css';
import Navigation from './Navigation';

const NoticeBoard = ({ notices }) => {
  return (
    <>
      <Navigation />
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
      </div>
    </>
  );
};

export default NoticeBoard;