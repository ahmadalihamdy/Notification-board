// src/components/WelcomePage.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import logo from './Assets/cosmopolitan.png';
import './WelcomePage.css';
import image1 from './Assets/CUA1.jpg';
import image2 from './Assets/CUA2.jpg';
import image3 from './Assets/CUA3.jpg';
import image4 from './Assets/CUA4.jpg';
import image5 from './Assets/CUA5.jpg';
import image6 from './Assets/CUA6.jpg';


const WelcomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
        <div>
          <img src={image4} alt="Slide 4" />
        </div>
        <div>
          <img src={image5} alt="Slide 5" />
        </div>
        <div>
          <img src={image6} alt="Slide 6" />
        </div>
      </Slider>
      {/* <img src={logo} alt="Cosmopolitan University Abuja Logo" className="logo" />
      <h1>Cosmopolitan University Abuja</h1>
      <button className="get-started-btn">Get Started</button> */}
    </div>
  );
};

export default WelcomePage;