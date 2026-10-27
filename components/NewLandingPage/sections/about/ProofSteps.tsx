import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { landingCopy } from '../../../../data/landing';

const { proof } = landingCopy;

const ProofSteps: React.FC = () => (
  <div className="mt-10 text-center">
    <p className="flex flex-wrap items-center justify-center gap-2 text-base font-display font-bold text-[#1c1a17]/75 sm:gap-4 sm:text-xl md:text-2xl">
      <span>{proof.steps[0]}</span>
      <ArrowLeft size={18} className="text-[#a9781f]" />
      <span>{proof.steps[1]}</span>
      <ArrowLeft size={18} className="text-[#a9781f]" />
      <span>{proof.steps[2]}</span>
    </p>
    <p className="mt-2 text-sm font-light text-[#1c1a17]/55 sm:text-base">
      {proof.note}
    </p>
  </div>
);

export default ProofSteps;
