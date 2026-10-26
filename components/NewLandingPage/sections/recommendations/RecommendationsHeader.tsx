import React from 'react';
import Reveal from '../../shared/Reveal';
import { landingCopy } from '../../../../data/landing';

const { recommendations: copy } = landingCopy;

const RecommendationsHeader: React.FC = () => (
  <Reveal className="mb-12 text-center md:mb-16">
    <p className="text-sm leading-relaxed text-[#1c1a17]/75 md:text-base">
      {copy.intro}
    </p>
    <p className="mt-8 text-sm font-medium text-[#1c1a17]/55 md:text-base">
      {copy.question}
    </p>
    <h2 className="mt-3 font-display text-3xl font-black text-[#1c1a17] md:text-5xl">
      {copy.title}
    </h2>
    <p className="mt-2 text-base text-[#1c1a17]/60 md:text-xl">{copy.subtitle}</p>
  </Reveal>
);

export default RecommendationsHeader;
