import React from 'react';
import Reveal from '../../shared/Reveal';
import { landingCopy } from '../../../../data/landing';

const { fears: copy } = landingCopy;

const FearsClosing: React.FC = () => (
  <Reveal delay={0.4} className="mt-16 text-center">
    <p className="text-[#1c1a17]/50 text-lg">{copy.notQuestion}</p>
    <p className="text-2xl md:text-3xl font-display font-bold mt-3">
      {copy.questionBefore} <span className="text-[#a9781f]">{copy.questionHighlight}</span> {copy.questionAfter}
    </p>
  </Reveal>
);

export default FearsClosing;
