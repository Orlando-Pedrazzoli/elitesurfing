import React from 'react';
import './WhatsAppButton.css';
import whats_img from '../Assets/whatsapp1.gif';

const WhatsAppButton = () => {
  return (
    <div className='whatsapp-button'>
      <a href='https://wa.me/351912164220'>
        <img src={whats_img} alt='WhatsApp' />
      </a>
    </div>
  );
};

export default WhatsAppButton;
