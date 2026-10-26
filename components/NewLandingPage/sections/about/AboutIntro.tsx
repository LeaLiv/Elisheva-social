import React from 'react';
import AboutText from './AboutText';
import AboutPortrait from './AboutPortrait';

const AboutIntro: React.FC = () => (
  <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
    <AboutText />
    <AboutPortrait />
  </div>
);

export default AboutIntro;
