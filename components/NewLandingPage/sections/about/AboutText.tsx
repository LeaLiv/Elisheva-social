import React from 'react';
import Reveal from '../../shared/Reveal';
import SectionNumber from '../../shared/SectionNumber';
import { landingCopy } from '../../../../data/landing';

const { about } = landingCopy;

const AboutText: React.FC = () => (
  <Reveal className="w-full max-w-3xl text-center md:flex-1">
    <SectionNumber n="04" label={about.sectionLabel} />
    <h2 className="mb-6 text-3xl font-display font-black md:text-5xl">{about.title}</h2>
    <p className="text-lg text-center font-light leading-relaxed text-[#1c1a17]/75">
      {about.body}
    </p>
  </Reveal>
);

export default AboutText;
