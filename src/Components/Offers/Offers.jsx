import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';
import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Massive </h1>
        <h1>Discounts </h1>
        <p>Explore Our Outlet Section for Big Savings!</p>
        <Link to='/outlet'>
          <button>Check Now</button>
        </Link>
      </div>
      <div className='offers-right'>
        <img src={exclusive_image} alt='' />
      </div>
    </div>
  );
};

export default Offers;
