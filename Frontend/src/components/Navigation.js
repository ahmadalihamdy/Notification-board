// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
      <li>
          <Link to="/WelcomePage">Cosmopolitan University</Link>
        </li>
        <li>
          <Link to="/NoticeBoard">Home</Link>
        </li>
        <li>
          <Link to="/NoticeForm">Dashboard</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
    
  );

};

export default Navigation;