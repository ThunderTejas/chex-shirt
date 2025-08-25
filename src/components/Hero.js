// frontend/src/components/Hero.js

import React from 'react';
// REMOVE THIS LINE: import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <h1>Wear the checks , set the trend</h1>
        <p>Discover our curated collection of premium shirts, designed for modern comfort and timeless appeal.</p>
        <button className="ctaButton">SHOP NOW</button>
        <div className="sizes">
          <span>S</span>
          <span className="activeSize">M</span>
          <span>L</span>
        </div>
      </div>
      <div className="imageContainer"></div>
    </section> 
  );
};

export default Hero;