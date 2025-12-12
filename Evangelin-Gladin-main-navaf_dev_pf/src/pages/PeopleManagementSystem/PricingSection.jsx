/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const PricingSection = () => {
  return (
    <section className="portfolio" id="pricing">
      <h2 className="heading">Our <span>Pricing</span></h2>

      <div className="pricing-container">
        
        {/* Basic Plan */}
        <div className="services-box pricing-box">
          <h3>Basic</h3>
          <h2 className="price">₹80</h2>
          <p className="sub-price">per employee/month</p>
          
          <ul className="pricing-list">
            <li><i className='bx bxs-check-circle'></i> HR Dashboard</li>
            <li><i className='bx bxs-check-circle'></i> Attendance Mgmt</li>
            <li><i className='bx bxs-check-circle'></i> Leave Mgmt</li>
            <li><i className='bx bxs-check-circle'></i> Payroll Support</li>
          </ul>
          
          <a href="#" className="btn">Choose Basic</a>
        </div>

        {/* Standard Plan (Popular) */}
        <div className="services-box pricing-box popular">
          <div className="popular-badge">Most Popular</div>
          <h3>Standard</h3>
          <h2 className="price">₹140</h2>
          <p className="sub-price">per employee/month</p>
          
          <ul className="pricing-list">
            <li><i className='bx bxs-check-circle'></i> Everything in Basic</li>
            <li><i className='bx bxs-check-circle'></i> Performance Dashboard</li>
            <li><i className='bx bxs-check-circle'></i> Audit Reports</li>
            <li><i className='bx bxs-check-circle'></i> KRA/KPI Monitoring</li>
          </ul>
          
          <a href="#" className="btn">Choose Standard</a>
        </div>

        {/* Agency Plan */}
        <div className="services-box pricing-box">
          <h3>Agency</h3>
          <h2 className="price">Custom</h2>
          <p className="sub-price">As per need</p>
          
          <ul className="pricing-list">
            <li><i className='bx bxs-check-circle'></i> Job Restructuring</li>
            <li><i className='bx bxs-check-circle'></i> KRA/KPI Reworking</li>
            <li><i className='bx bxs-check-circle'></i> Training & Coaching</li>
            <li><i className='bx bxs-check-circle'></i> Complete Automation</li>
          </ul>
          
          <a href="#" className="btn">Contact Us</a>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;