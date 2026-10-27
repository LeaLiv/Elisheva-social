import React from 'react';
import Reveal from '../../shared/Reveal';
import { landingCopy } from '../../../../data/landing';

const { reels } = landingCopy;

const ReelsHeader: React.FC = () => (
  <Reveal className="mb-12 text-center">
    <h2 className="font-display text-3xl font-black text-[#1c1a17] md:text-5xl">{reels.title}</h2>
    <p className="mt-3 text-base text-[#1c1a17]/60 md:text-xl">{reels.subtitle}</p>
  </Reveal>
);

export default ReelsHeader;
