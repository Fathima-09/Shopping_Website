import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({cartItems}) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
    <nav className='navbar'>
      <div className='logo'>ShopEase</div>
      <ul className='nav-links'>
        <li><Link to="/homePage">Home</Link></li>
        <li><Link to="/products">Sale</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/ucart">Cart({totalItems})</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;