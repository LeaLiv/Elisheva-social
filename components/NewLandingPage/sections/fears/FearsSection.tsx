import React from 'react';
import SectionNumber from '../../shared/SectionNumber';
import FearItem from './FearItem';
import FearsClosing from './FearsClosing';
import { fears, landingCopy } from '../../../../data/landing';

const FearsSection: React.FC = () => (
  <section id="pain-points" className="px-6 md:px-16 py-28 border-b border-black/10">
    <div className="max-w-6xl mx-auto">
      <SectionNumber n="02" label={landingCopy.fears.sectionLabel} />
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
        {fears.map((fear, i) => (
          <FearItem key={i} text={fear} index={i} />
        ))}
      </div>
      <FearsClosing />
    </div>
  </section>
);

export default FearsSection;
