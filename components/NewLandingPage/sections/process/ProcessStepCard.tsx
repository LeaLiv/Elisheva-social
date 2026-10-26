import React from 'react';
import Reveal from '../../shared/Reveal';
import type { ProcessStep } from '../../../../types/landing';

interface ProcessStepCardProps {
  step: ProcessStep;
  index: number;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step, index }) => (
  <Reveal delay={index * 0.08} className="h-full">
    <article className="flex h-full flex-col border-t border-[#1c1a17]/70 px-1 py-6 text-right md:px-4 md:py-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-4xl leading-none text-[#46382f] md:text-5xl">{step.n}</span>
          <span aria-hidden="true" className="h-8 w-px bg-[#1c1a17]/70" />
          <h3 className="text-base font-bold leading-snug md:text-lg">{step.title}</h3>
        </div>
        <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center md:h-[76px] md:w-[76px]">
          <img
            src={step.image}
            alt={step.imageAlt}
            className="h-full w-full rounded-full object-cover shadow-[0_12px_28px_rgba(28,26,23,0.18)]"
            loading="lazy"
          />
          <step.Icon aria-hidden="true" className="absolute -top-2 -left-2 h-7 w-7 stroke-[1.5] text-[#9bc3de] drop-shadow-sm md:h-8 md:w-8" />
        </div>
      </div>
      <p className="text-sm leading-relaxed text-[#1c1a17]/80 md:text-base">{step.desc}</p>
    </article>
  </Reveal>
);

export default ProcessStepCard;
