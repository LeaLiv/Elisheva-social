import React from 'react';
import AboutIntro from './AboutIntro';
import ProofSection from './ProofSection';
import BridgeCallout from './BridgeCallout';

const AboutSection: React.FC = () => (
  <section id="about" className="relative overflow-hidden border-b border-black/10 px-6 py-20 md:px-16 md:py-28">
    <div aria-hidden="true" className="absolute inset-0 hidden bg-[url('/assets/aboutBG.png')] bg-cover bg-center md:block" />
    <div aria-hidden="true" className="absolute inset-0 hidden bg-white/45 md:block" />
    <div className="relative mx-auto w-full max-w-6xl">
      <AboutIntro />
      <ProofSection />
      <BridgeCallout />
    </div>
  </section>
);

export default AboutSection;
