import React from 'react';
import Reveal from '../../shared/Reveal';
import { landingCopy } from '../../../../data/landing';

const { hero } = landingCopy;

const HeroContent: React.FC = () => (
  <div className="mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 md:min-h-screen md:px-16">
    <div className="ml-auto mr-0 w-full max-w-xl text-right md:max-w-2xl">
      <Reveal>
        <span className="text-[#a9781f] text-lg font-bold tracking-[0.18em] uppercase md:text-2xl">{hero.eyebrow}</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-6 mb-8 font-display text-4xl font-black leading-[1.15] md:text-6xl lg:text-7xl">
          {hero.title}
        </h1>
      </Reveal>
      <Reveal delay={0.2} className="space-y-4 text-lg leading-relaxed text-[#1c1a17]/80 md:text-xl">
        {hero.strongLines.map((line) => (
          <p key={line} className="font-bold">{line}</p>
        ))}
        <p className="pt-3">{hero.capability}</p>
        <p>{hero.question}</p>
        <p className="text-[#a9781f] font-bold">{hero.closing}</p>
      </Reveal>
    </div>
  </div>
);

export default HeroContent;
