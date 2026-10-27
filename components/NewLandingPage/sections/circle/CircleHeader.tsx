import React from 'react';
import Reveal from '../../shared/Reveal';
import Lines from '../../shared/Lines';
import { landingCopy } from '../../../../data/landing';

const { circle } = landingCopy;

const CircleHeader: React.FC = () => (
  <Reveal className="mb-12 text-center md:mb-0">
    <span className="text-xs font-bold tracking-[0.28em] text-[#a9781f] uppercase">{circle.eyebrow}</span>
    <h2 className="mx-auto mt-5 max-w-md text-3xl font-display font-black leading-tight md:text-5xl">
      <Lines lines={circle.titleLines} />
    </h2>
  </Reveal>
);

export default CircleHeader;
