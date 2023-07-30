import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Perfect Getaway</h1>
        <p>Find the best hotels at the best prices!</p>
        <div className="search-form">
          <input type="text" placeholder="Enter a location" />
          <input type="date" />
          <input type="date" />
          <button className="search-btn">Search Hotels</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
