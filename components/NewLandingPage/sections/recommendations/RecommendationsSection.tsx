import React from 'react';
import RecommendationsHeader from './RecommendationsHeader';
import TestimonialsGrid from './TestimonialsGrid';
import RecommendationVideos from './RecommendationVideos';

const RecommendationsSection: React.FC = () => (
  <section id="recommendations" className="relative isolate overflow-hidden border-b border-black/10 bg-[#f4f0eb] px-6 py-20 md:px-16 md:py-28">
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[url('/assets/recoBack.png')] bg-cover bg-center" />
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#f4f0eb]/75" />
    <div className="relative mx-auto max-w-7xl">
      <RecommendationsHeader />
      <TestimonialsGrid />
      <RecommendationVideos />
    </div>
  </section>
);

export default RecommendationsSection;
