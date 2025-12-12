import React from 'react';

const WhyImportant = () => {
  return (
    <section className="services">
      <h2 className="heading">Why It’s <span>Important?</span></h2>
      <div className="services-container">
        <div className="services-box">
          <i className='bx bx-sync'></i>
          <h3>Consistent System</h3>
          <p>Establishes discipline in daily HR activities and tracks progress consistently.</p>
        </div>
        <div className="services-box">
          <i className='bx bx-up-arrow-circle'></i>
          <h3>Development</h3>
          <p>Regular performance reviews help employees identify improvement areas.</p>
        </div>
        <div className="services-box">
          <i className='bx bx-happy-heart-eyes'></i>
          <h3>Engagement</h3>
          <p>Clear expectations increase employee motivation and job satisfaction.</p>
        </div>
        <div className="services-box">
          <i className='bx bx-pie-chart-alt-2'></i>
          <h3>Resource Allocation</h3>
          <p>Use talent more effectively and address issues early.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyImportant;