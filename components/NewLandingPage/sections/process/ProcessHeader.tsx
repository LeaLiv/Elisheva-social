import React from 'react';
import Reveal from '../../shared/Reveal';
import { landingCopy } from '../../../../data/landing';

const { process } = landingCopy;

const ProcessHeader: React.FC = () => (
  <Reveal className="mb-12 text-center md:mb-16">
    <p className="mb-3 text-xs font-bold tracking-[0.24em] text-[#a9781f]">{process.eyebrow}</p>
    <h2 className="font-display text-3xl font-black text-[#1c1a17] md:text-5xl">
      <span className="relative inline-block">
        {process.title}
        <span aria-hidden="true" className="absolute -bottom-2 left-0 right-0 h-2 -rotate-1 rounded-full bg-[#9bc3de]/55" />
      </span>
    </h2>
  </Reveal>
);

export default ProcessHeader;
