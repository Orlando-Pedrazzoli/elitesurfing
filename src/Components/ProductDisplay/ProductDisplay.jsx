import React, { useState, useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import tesa_img from '../Assets/tesa-logo.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = props => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = imageUrl => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`productdisplay ${isModalOpen ? 'productdisplay-modal' : ''}`}
    >
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img
            src={product.imageDetail1}
            alt=''
            onClick={() => openModal(product.imageDetail1)}
          />
          <img
            src={product.imageDetail2}
            alt=''
            onClick={() => openModal(product.imageDetail2)}
          />
          <img
            src={product.imageDetail3}
            alt=''
            onClick={() => openModal(product.imageDetail3)}
          />
        </div>
        <div className='productdisplay-img'>
          <img
            className='productdisplay-main-img'
            src={product.image}
            alt=''
            onClick={() => openModal(product.image)}
          />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-stars'>
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-new'>
            €{product.new_price.toFixed(2)}
          </div>
          <div className='productdisplay-right-price-old'>
            €{product.old_price.toFixed(2)}
          </div>
        </div>
        <div className='productdisplay-right-description'>
          Focusing on comfort, support and increased grip, ELITE SURFING
          Traction keeps your foot connected to the board so you can push hard
          against your fins for maximum speed and drive.
        </div>
        <div className='productdisplay-right-size'>
          <h1>
            Premium Adhesive <img src={tesa_img} alt='' />
          </h1>
          <ul>
            <li>
              High adhesion and very good bonding strength, even to low surface
              energy materials
            </li>
            <li>
              Immediate functionality of the laminated bond due to excellent
              initial tack
            </li>
            <li>
              Light and aging-resistant acrylic adhesive for long-term
              applications
            </li>
            <li>Very good plasticizer resistance</li>
            <li>
              Good conformability for good adhesion even on rougher surfaces due
              to the PVC backing
            </li>
          </ul>
        </div>

        <div className='productdisplay-right-buttons'>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <a href={`https://wa.me/351912164220/?text=Product: ${product.name}`}>
            <button>BUY NOW</button>
          </a>
        </div>
      </div>
      {isModalOpen && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-content'>
            <img src={modalImageUrl} alt='Modal' />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
