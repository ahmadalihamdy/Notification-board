// src/components/WelcomePage.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './Assets/cosmopolitan.png';
import './WelcomePage.css';
import image1 from './Assets/CUA1.jpg';
import image2 from './Assets/CUA2.jpg';
import image3 from './Assets/CUA3.jpg';


const WelcomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="welcome-page">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" />
        </div>
      </Slider>
      <img src={logo} alt="Cosmopolitan University Abuja Logo" className="logo" />
      <h1>Cosmopolitan University Abuja</h1>
      <button className="get-started-btn">Get Started</button>
    </div>
  );
};

export default WelcomePage;