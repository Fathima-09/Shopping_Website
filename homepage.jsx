import React from 'react';
import './homepage.css';
import {useNavigate } from 'react-router-dom';
import './homepage.css';
import { useRef } from 'react';

const Homepage = () => {

  const navigate = useNavigate();
  const featuredRef = useRef(null);
  const handleClick=()=>{
   navigate('/products');
  };
  const scrollToFeatured = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div>
     
      {/* Box Section */}
      <section className="box">
        <div className="box-content">
          <h1 className="box-title">EASE INTO YOUR BEST FINDS</h1>
          <p className="box-subtitle">Shop the Hottest Trends and Best Deals, All in one Spot.</p>
          <button className="shop-button" onClick={handleClick}>Explore Now</button>
        </div>
      </section>

      {/* Fashion Trends */}
      <section className="categories">
        <h2> Fashion Trends</h2>
        <div className="category-grid">
          <div className="category-card" onMouseEnter={scrollToFeatured}>Dresses</div>
          <div className="category-card" onMouseEnter={scrollToFeatured}>Casual Wear</div>
          <div className="category-card" onMouseEnter={scrollToFeatured}>Evening Wear</div>
          <div className="category-card" onMouseEnter={scrollToFeatured}>Formal Wear</div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products" ref={featuredRef}>
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://img.faballey.com/images/Product/ILK00828Z/4.jpg" alt="Product" />
            <h3>Party Wear</h3>
            <p> Starts from $100</p>
            <button className="add-to-cart" onClick={handleClick}>View More</button>
          </div>
          <div className="product-card">
            <img src="https://img.faballey.com/images/Product/DRS04462Z/6.jpg" alt="Product" />
            <h3>Casual Wear</h3>
            <p> Starts from $300</p>
            <button className="add-to-cart" onClick={handleClick}>View More</button>
          </div>
          <div className="product-card">
            <img src="https://img.faballey.com/images/Product/DRS05264Z/4.jpg" alt="Product" />
            <h3>Formal Wear</h3>
            <p> Starts from $200</p>
            <button className="add-to-cart" onClick={handleClick}>View More</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Visit our page for the latest updates and offers!</p>
        
      </section>
    </div>
  );
};

export default Homepage;