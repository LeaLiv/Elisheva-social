import React from 'react';
import Reveal from '../../shared/Reveal';
import Lines from '../../shared/Lines';
import CtaButton from './CtaButton';
import { landingCopy } from '../../../../data/landing';

const { cta } = landingCopy;

const CtaSection: React.FC = () => (
  <section id="contact" className="px-6 md:px-16 py-32 text-center">
    <div className="max-w-3xl mx-auto">
      <Reveal>
        <p className="text-2xl md:text-4xl font-display font-black leading-relaxed">
          <Lines lines={cta.headlineLines} />
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="text-lg md:text-xl text-[#1c1a17]/60 mt-8 mb-10">{cta.question}</p>
      </Reveal>
      <Reveal delay={0.25}>
        <CtaButton />
      </Reveal>
    </div>
  </section>
);

export default CtaSection;
