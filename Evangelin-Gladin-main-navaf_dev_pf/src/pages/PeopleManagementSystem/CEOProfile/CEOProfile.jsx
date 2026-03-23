import React from 'react';
import './CEOProfile.css'; 

const CEOProfile = () => {
  return (
    <section className="about" id="ceo-profile">
      <div className="about-content" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="heading">CEO <span>Profile</span></h2>

        <div className="ceo-container">
          
          {/* Left Side: Image */}
          <div className="ceo-image-box">
            {/* Replace with actual image path */}
            <img 
              src="/images/ceoProfile.png" 
              alt="Evangelin Gladin" 
              className="ceo-img"
            />
          </div>

          {/* Right Side: Content */}
          <div className="ceo-text-box">
            <h3>Evangelin Gladin</h3>
            <span className="ceo-role">CEO of Bot Digital Solutions Private Limited</span>
            
            <div className="ceo-highlights">
                <p><i className='bx bxs-quote-alt-left'></i> <strong>Vision:</strong> To bring clarity that drives growth.</p>
                <p><i className='bx bxs-quote-alt-left'></i> <strong>Mission:</strong> To develop systems that simplify work.</p>
            </div>

            <p className="ceo-bio">
              Evan is a business growth strategist with a strong foundation in sales, marketing, and performance structuring. She helps organisations build clarity, discipline, and scalable systems. 
              <br /><br />
              Her holistic approach connects people, processes, and technology to create transparent, growth-ready operations. Driven by her core values of continuous growth and clarity, Evan empowers companies to strengthen HR, define KRA/KPI frameworks, and elevate overall performance.
              <br /><br />
              <span style={{ color: 'var(--main-color)', fontWeight: '600' }}>
                Her mission is simple: help businesses grow consistently with structure and confidence.
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CEOProfile;