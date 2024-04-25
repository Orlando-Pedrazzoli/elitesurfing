import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  // Function to generate the message text with cart items
  const generateMessageText = () => {
    let message = "Hi, I'd like to purchase the following items:\n";
    all_product.forEach(product => {
      if (cartItems[product.id] > 0) {
        message += `${product.name} - Quantity: ${
          cartItems[product.id]
        } - Price: €${(product.new_price * cartItems[product.id]).toFixed(
          2
        )}\n`;
      }
    });
    message += `Subtotal: €${getTotalCartAmount().toFixed(2)}`;
    return encodeURIComponent(message);
  };

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map(e => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className='cartitems-format cartitems-format-main'>
                <img src={e.image} alt='' className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>€{e.new_price.toFixed(2)}</p>
                <button className='cartitems-quantity'>
                  {cartItems[e.id]}
                </button>
                <p>€{e.new_price.toFixed(2) * cartItems[e.id]}</p>
                <img
                  className='cartitems-remove-icon'
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=''
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h1>cart Totals</h1>
          <div>
            <div className='cartitems-total-item'>
              <p>Subtotal</p>
              <p>€{getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>€{getTotalCartAmount().toFixed(2)}</h3>
            </div>
          </div>
          <a href={`https://wa.me/351912164220/?text=${generateMessageText()}`}>
            <button>PROCEED TO CHECKOUT</button>
          </a>
        </div>
        <div className='cartitems-promocode'>
          <p>If you have a promo code, Enter it here</p>
          <div className='cartitems-promobox'>
            <input type='text' placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
