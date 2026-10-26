import React from 'react';
import { landingCopy } from '../../../../data/landing';

const { proof } = landingCopy;

const ProofHeader: React.FC = () => (
  <div className="text-center">
    <p className="mb-3 text-xs font-bold tracking-[0.24em] text-[#a9781f]">{proof.eyebrow}</p>
    <h3 id="proof-title" className="text-2xl font-display font-black leading-snug text-[#1c1a17] md:text-4xl">
      {proof.title}
    </h3>
    <p className="mt-3 text-base font-light text-[#1c1a17]/60 md:text-xl">
      {proof.subtitle}
    </p>
  </div>
);

export default ProofHeader;
