import React from 'react';

const HeroBackground: React.FC = () => (
  <div className="absolute inset-0 -z-20 bg-[#e8e3dd]">
    <img
      src="/assets/landing/backFirst.png"
      alt=""
      className="h-full w-full object-cover object-[58%_center] opacity-55 brightness-110 md:opacity-65 md:object-center"
    />
    <div className="absolute inset-0 bg-[#faf7f2]/20" />
    <div className="absolute inset-0 bg-gradient-to-l from-[#faf7f2]/95 via-[#faf7f2]/65 to-[#faf7f2]/20" />
  </div>
);

export default HeroBackground;
