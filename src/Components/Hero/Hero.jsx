import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  const youtubeLink = 'https://www.youtube.com/shorts/Z6_vlF8IyCc';

  const handleExploreClick = () => {
    window.open(youtubeLink, '_blank');
  };

  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>SURFERS ONLY</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>Trust Our</p>
          </div>
          <p>Traction Pads for</p>
          <p>Your Next Ride!</p>
        </div>
        <div className='hero-latest-btn'>
          <div onClick={handleExploreClick}>Watch</div>
          <img onClick={handleExploreClick} src={arrow_icon} alt='' />
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero_image} alt='' />
      </div>
    </div>
  );
};

export default Hero;
