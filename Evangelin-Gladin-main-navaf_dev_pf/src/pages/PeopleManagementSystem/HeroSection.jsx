import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="home hero-section" id="home">
      
      {/* Background Effects */}
      <div className="hero-bg-grid"></div>
      <div className="hero-glow"></div>

      <div className="home-content centered-hero">
        
        <div className="est-badge">Est. 2021</div>
        
        <h1>
          HR Performance <br />
          <span className="gradient-text">Management</span>
        </h1>
        
        <p>
          Build structured, disciplined, and growth-ready operations. We connect people, processes, and technology into one seamless system.
        </p>
        
        <div className="hero-btns">
          <Link to="/contact" className="btn">Get Started</Link>
          <a href="#pricing" className="btn1" style={{ marginLeft: '20px' }}>View Pricing</a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;