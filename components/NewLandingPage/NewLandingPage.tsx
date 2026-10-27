import React from 'react';
import HomeAnchor from './shared/HomeAnchor';
import AmbientGlow from './shared/AmbientGlow';
import HeroSection from './sections/hero';
import ConnectionSection from './sections/connection';
import FearsSection from './sections/fears';
import AboutSection from './sections/about';
import CircleSection from './sections/circle';
import ProcessSection from './sections/process';
import RecommendationsSection from './sections/recommendations';
import ReelsSection from './sections/reels';
import PromiseSection from './sections/promise';
import CtaSection from './sections/cta';

const NewLandingPage: React.FC = () => (
  <div className="bg-[#faf7f2] text-[#1c1a17] font-sans" dir="rtl">
    <HomeAnchor />
    <AmbientGlow />

    <div className="relative z-10">
      <HeroSection />
      <ConnectionSection />
      <FearsSection />
      <AboutSection />
      <CircleSection />
      <ProcessSection />
      <RecommendationsSection />
      <ReelsSection />
      <PromiseSection />
      <CtaSection />
    </div>
  </div>
);

export default NewLandingPage;
