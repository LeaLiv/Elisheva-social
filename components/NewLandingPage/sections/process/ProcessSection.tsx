import React from 'react';
import ProcessHeader from './ProcessHeader';
import ProcessStepCard from './ProcessStepCard';
import { processSteps } from '../../../../data/landing';

const ProcessSection: React.FC = () => (
  <section id="process" className="relative isolate overflow-hidden border-b border-black/10 bg-[#f4f0eb] px-6 py-16 md:px-16 md:py-20">
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[url('/assets/backProcess.png')] bg-cover bg-center" />
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#f4f0eb]/80" />
    <div className="relative mx-auto max-w-5xl">
      <ProcessHeader />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {processSteps.map((step, i) => (
          <ProcessStepCard key={step.n} step={step} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
