import React from 'react';
import RecommendationVideoCard from './RecommendationVideoCard';
import { recommendations } from '../../../../data/landing';

const RecommendationVideos: React.FC = () => (
  <div dir="rtl" className="mx-auto mt-8 grid max-w-6xl grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-4">
    {recommendations.map((recommendation, index) => (
      <RecommendationVideoCard key={recommendation.src} recommendation={recommendation} index={index} />
    ))}
  </div>
);

export default RecommendationVideos;
