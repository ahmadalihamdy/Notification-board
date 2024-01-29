import React from 'react';
import WelcomePage from './components/WelcomePage';
import LoginSignup from './components/LoginSignup/Login';
import NoticeBoard from './components/Noticeboard';
import NoticeForm from './components/NoticeForm';
// import Navigation from './components/Navigation';
import Users from './components/Users';
import Logout from './components/Logout';
import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
// import axios from 'axios';
// import { MongoClient } from 'mongo';


const App = () => {
  // const [notices, setNotices] = useState([]);

  // const addNotice = (notice) => {
  //   setNotices([...notices, notice]);
  // };
// const mongoClient = new MongoClient(
  
// )
  return (
   
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<WelcomePage />}/>
        <Route exact path='/login' element={<LoginSignup />}/> 
        <Route exact path='/NoticeForm' element={<NoticeForm />}/>
        <Route exact path='/NoticeBoard' element={<NoticeBoard />}/> 
        <Route exact path='/Users' element={<Users />}/>
        <Route exact path='/logout' element={<Logout />}/>


      </Routes>
    </BrowserRouter>
  );
};

export default App;