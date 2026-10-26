import React from 'react';
import Reveal from '../../shared/Reveal';
import { landingCopy } from '../../../../data/landing';

const { promise } = landingCopy;

const PromiseSection: React.FC = () => (
  <section id="promise" className="px-6 md:px-16 py-32 border-b border-black/10 text-center">
    <div className="max-w-4xl mx-auto">
      <Reveal>
        <p className="text-xl md:text-2xl text-[#1c1a17]/50 mb-4">{promise.notGoal}</p>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="text-2xl md:text-4xl font-display font-bold leading-relaxed mb-10">
          {promise.goal}
        </p>
      </Reveal>
      <Reveal delay={0.3} className="flex flex-wrap justify-center gap-x-3 gap-y-4 text-xl md:text-2xl font-display">
        {promise.lines.map((line) => (
          <span key={line} className="text-[#a9781f]">
            {line}
          </span>
        ))}
      </Reveal>
    </div>
  </section>
);

export default PromiseSection;
