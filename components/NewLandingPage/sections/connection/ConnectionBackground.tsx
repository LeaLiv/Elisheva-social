import React from 'react';

const ConnectionBackground: React.FC = () => (
  <div className="absolute inset-0 -z-20 bg-[#e8e3dd]">
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[url('/assets/landing/backSecondMobile.png')] bg-cover bg-center bg-no-repeat md:hidden"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 hidden bg-[url('/assets/landing/backSecond.png')] bg-cover bg-left bg-no-repeat md:block"
    />
    <div className="absolute inset-0 bg-gradient-to-l from-[#faf7f2]/95 via-[#faf7f2]/75 to-[#faf7f2]/20" />
  </div>
);

export default ConnectionBackground;
