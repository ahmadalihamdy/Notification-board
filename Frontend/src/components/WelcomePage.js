// src/components/WelcomePage.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navigation from './Navigation';
import './WelcomePage.css';
import image1 from './Assets/CUA1.jpg';
import image2 from './Assets/CUA2.jpg';
import image3 from './Assets/CUA3.jpg';
import image4 from './Assets/CUA4.jpg';
import image5 from './Assets/CUA5.jpg';
import image6 from './Assets/CUA6.jpg';
import image7 from './Assets/CUA7.jpg';
import image8 from './Assets/CUA8.jpg';
import image9 from './Assets/CUA9.jpg';
import image10 from './Assets/CUA10.jpg';


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
    <><Navigation />
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
        <div>
          <img src={image7} alt="Slide 7" />
        </div>
        <div>
          <img src={image8} alt="Slide 8" />
        </div>
        <div>
          <img src={image9} alt="Slide 9" />
        </div>
        <div>
          <img src={image10} alt="Slide 10" />
        </div>
      </Slider>
    </div>
    </>
  );
};

export default WelcomePage;