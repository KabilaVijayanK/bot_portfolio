import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <h1 className="about-title">
          About <span className="gradient-text">Me</span>
        </h1>

        <p className="about-tagline">
          I'm Evangelin Gladin — founder, strategist & builder.
        </p>
      </div>

      {/* WRAPPER */}
      <div className="about-wrapper">

        {/* IMAGE */}
        <div className="about-img animated-border">
  <img 
    src="/images/Bot-new-logo.jpg" 
    alt="Bot Digital Logo"
    className="logo-animate"
  />
</div>

        {/* CONTENT */}
        <div className="about-content glass-card">

          <h3>
            From Dharavi to Digital —
            Building businesses from 
            <span className="gradient-text">  vision, systems & soul</span>
          </h3>

          <p>
            While our tech hub at Thidiyur is still under construction,
            our mission has already begun — training local talent, 
            creating digital jobs and helping businesses scale globally.
          </p>

          <p>
            I'm not waiting for perfection. I'm moving with purpose.
            From grassroots coaching to global consulting —  
            proving everyday that disciplined systems change lives.
          </p>

          <Link to="/contact" className="about-btn">
            Connect With Me →
          </Link>

        </div>
      </div>

    </section>
  );
};

export default About;
