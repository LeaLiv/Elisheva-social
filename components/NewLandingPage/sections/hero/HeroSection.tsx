import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="relative isolate min-h-[720px] md:min-h-screen overflow-hidden border-b border-black/10"
  >
    <HeroBackground />
    <HeroContent />
  </section>
);

export default HeroSection;
