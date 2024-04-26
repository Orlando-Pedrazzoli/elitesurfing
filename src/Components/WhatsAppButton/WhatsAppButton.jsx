import React from 'react';
import './WhatsAppButton.css';
import whats_img from '../Assets/icons8-whatsapp-94.png';

const WhatsAppButton = () => {
  return (
    <div className='whatsapp-button'>
      <a href='https://wa.me/351912164220/?text=Hi%2C%20I%20have%20a%20question%20about%20your%20products.'>
        <img src={whats_img} alt='WhatsApp' />
      </a>
    </div>
  );
};

export default WhatsAppButton;
