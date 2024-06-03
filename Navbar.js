import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li>
            Products
            <ul>
              <li><Link to="/product/SE03-Lite">SE03 Lite</Link></li>
              <li><Link to="/product/SE03">SE03</Link></li>
              <li><Link to="/product/SE03-Max">SE03 Max</Link></li>
              <li><Link to="/compare">Compare All</Link></li>
            </ul>
          </li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/pre-book">Pre-Book Now</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
