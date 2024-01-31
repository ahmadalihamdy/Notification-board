import React, { useState } from 'react';
import NoticeBoard from './components/Noticeboard';
import LoginSignup from './components/LoginSignup/Login';
import NoticeForm from './components/NoticeForm';
import Users from './components/Users';
import Logout from './components/Logout';
import WelcomePage from './components/WelcomePage';
import { PrismaClient } from '@prisma/client'
import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

const prisma = new PrismaClient()
const App = () => {
  const [ notices, setNotices] = useState([]);
  const handleAddNotice = (newNotice) => {
    setNotices((prevNotices) => [...prevNotices, newNotice]);
  };
  return (
    <BrowserRouter>
      <Routes>
      <Route
        exact
        path='/'
        element={<NoticeBoard notices={notices} />}
      />
        <Route exact path='/WelcomePage' element={<WelcomePage />}/>
        <Route exact path='/login' element={<LoginSignup />}/> 
        <Route
          exact
          path='/NoticeForm'
          element={<NoticeForm onAddNotice={handleAddNotice} />}
        />
        <Route exact path='/Users' element={<Users />}/>
        <Route exact path='/logout' element={<Logout />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;