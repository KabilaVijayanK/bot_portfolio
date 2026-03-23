import React from 'react';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="heading">About <span>Us</span></h2>
        <h3>We are working with people since 2021</h3>
        <p>
          Bot Digital Solutions Private Limited is a clarity-driven HR and performance automation company helping organisations build structured, disciplined, and growth-ready operations.
          <br /><br />
          Our holistic approach connects people, processes, and technology. Our solutions include HRMS automation, performance dashboards, KRA/KPI structuring, and audit workflows.
        </p>

        <div className="ceo-profile" style={{ marginTop: '4rem', padding: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '2rem' }}>
          <h3>CEO Profile: <span>Evangelin Gladin</span></h3>
          <p style={{ fontStyle: 'italic', margin: '1rem 0' }}>
            "My mission is simple: help businesses grow consistently with structure and confidence."
          </p>
          <p><strong>Vision:</strong> To bring clarity that drives growth.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;