import React from 'react';

const WhatIsHR = () => {
  return (
    <section className="services">
      <h2 className="heading">What is <span>HR Monitoring?</span></h2>
      <div className="about-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
        <p>
          It is the process of tracking how well employees and teams are performing against the goals, expectations, and responsibilities given to them.
        </p>
      </div>

      <div className="services-container">
        <div className="services-box">
          <i className='bx bx-search-alt'></i>
          <h3>Clarity</h3>
          <p>Know exactly who is performing and who needs support in your team.</p>
        </div>
        <div className="services-box">
          <i className='bx bx-trending-down'></i>
          <h3>Productivity</h3>
          <p>Identify exactly where productivity is dropping before it becomes a loss.</p>
        </div>
        <div className="services-box">
          <i className='bx bx-target-lock'></i>
          <h3>Alignment</h3>
          <p>Ensure every single employee is aligned with corporate company goals.</p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHR;