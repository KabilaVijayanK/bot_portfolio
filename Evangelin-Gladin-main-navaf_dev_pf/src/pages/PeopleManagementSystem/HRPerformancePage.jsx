import React from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import AboutSection from './AboutSection';
import WhatIsHR from './WhatIsHR';
import WhyImportant from './WhyImportant';
import PricingSection from './PricingSection';
import ClientsSection from './ClientSection';
import CEOProfile from './CEOProfile/CEOProfile';


const HRPerformancePage = () => {
  return (
    <div className="hr-page-wrapper">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CEOProfile/>
      <WhatIsHR />
      <WhyImportant />
      <PricingSection />
      <ClientsSection />
    </div>
  );
};

export default HRPerformancePage;