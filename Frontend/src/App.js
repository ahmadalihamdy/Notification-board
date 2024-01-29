import React from 'react';
import NoticeBoard from './components/Noticeboard';
import LoginSignup from './components/LoginSignup/Login';
import NoticeForm from './components/NoticeForm';
import Users from './components/Users';
import Logout from './components/Logout';
import WelcomePage from './components/WelcomePage';

import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
// import axios from 'axios';
// import { MongoClient } from 'mongo';


const App = () => {
// const mongoClient = new MongoClient(
  
// )
  return (
   
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<NoticeBoard />}/>
        <Route exact path='/WelcomePage' element={<WelcomePage />}/>
        <Route exact path='/login' element={<LoginSignup />}/> 
        <Route exact path='/NoticeForm' element={<NoticeForm />}/>
        <Route exact path='/Users' element={<Users />}/>
        <Route exact path='/logout' element={<Logout />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;