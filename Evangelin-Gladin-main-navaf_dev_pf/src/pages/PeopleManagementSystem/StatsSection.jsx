import React from 'react';

const StatsSection = () => {
  return (
    <div className="w-full py-12 bg-white/5 backdrop-blur-sm mt-10">
      <div className="flex justify-around items-center w-full max-w-6xl mx-auto text-center">
        
        <div className="stat-item">
          <h2 className="text-5xl font-bold text-[#fb7bac] mb-2">70+</h2>
          <p className="text-xl text-white uppercase tracking-widest">Brands Served</p>
        </div>
        
        <div className="stat-item">
          <h2 className="text-5xl font-bold text-[#fb7bac] mb-2">500+</h2>
          <p className="text-xl text-white uppercase tracking-widest">People Managed</p>
        </div>
        
        <div className="stat-item">
          <h2 className="text-5xl font-bold text-[#fb7bac] mb-2">4+</h2>
          <p className="text-xl text-white uppercase tracking-widest">Countries</p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;