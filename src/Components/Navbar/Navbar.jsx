import { useContext, useState, useRef } from 'react';
import '../../Components/Navbar/Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import nav_dropdown from '../Assets/nav_dropdown.png';
import user_img from '../Assets/user_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  // Function to toggle dropdown menu visibility
  const toggleMenu = () => {
    menuRef.current.classList.toggle('nav-menu-visible');
  };

  // Function to close menu when dropdown toggle is clicked
  const closeMenu = () => {
    if (menuRef.current.classList.contains('nav-menu-visible')) {
      toggleMenu();
    }
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link style={{ textDecoration: 'none' }} to='/' onClick={closeMenu}>
          <img src={logo} alt='' />
        </Link>
      </div>
      <img
        onClick={toggleMenu}
        className='nav-dropdown'
        src={nav_dropdown}
        alt=''
      />
      <ul ref={menuRef} className='nav-menu'>
        <li
          onClick={() => {
            setMenu('shop');
            closeMenu(); // Close menu after link click
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
            Home
          </Link>
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('fiji');
            closeMenu(); // Close menu after link click
          }}
        >
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to='/fiji'
            onClick={closeMenu}
          >
            Deck Fiji
          </Link>
          {menu === 'fiji' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('j-bay');
            closeMenu(); // Close menu after link click
          }}
        >
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to='j-bay'
            onClick={closeMenu}
          >
            Deck J-Bay
          </Link>
          {menu === 'j-bay' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('hawaii');
            closeMenu(); // Close menu after link click
          }}
        >
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to='/hawaii'
            onClick={closeMenu}
          >
            Deck Hawaii
          </Link>
          {menu === 'hawaii' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('outlet');
            closeMenu(); // Close menu after link click
          }}
        >
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to='/outlet'
            onClick={closeMenu}
          >
            Outlet
          </Link>
          {menu === 'outlet' ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login' onClick={closeMenu}>
          <img src={user_img} alt='' />
        </Link>
        <Link to='/cart' onClick={closeMenu}>
          <img src={cart_icon} alt='' />
        </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
