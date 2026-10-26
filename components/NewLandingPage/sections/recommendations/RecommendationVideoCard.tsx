import React from 'react';
import Reveal from '../../shared/Reveal';
import { landingCopy } from '../../../../data/landing';
import type { Recommendation } from '../../../../types/landing';

interface RecommendationVideoCardProps {
  recommendation: Recommendation;
  index: number;
}

const RecommendationVideoCard: React.FC<RecommendationVideoCardProps> = ({ recommendation, index }) => (
  <Reveal delay={index * 0.08} className="w-full max-w-[260px] min-w-0">
    <article className="overflow-hidden rounded-2xl bg-white/65 shadow-[0_8px_24px_rgba(28,26,23,0.1)]">
      <div className="aspect-[9/16]">
        <video
          src={recommendation.src}
          controls
          playsInline
          preload="metadata"
          aria-label={recommendation.label}
          className="h-full w-full object-cover"
        >
          {landingCopy.recommendations.videoFallback}
        </video>
      </div>
      <p className="px-4 py-3 text-right text-sm font-medium text-[#1c1a17]/75">{recommendation.label}</p>
    </article>
  </Reveal>
);

export default RecommendationVideoCard;
