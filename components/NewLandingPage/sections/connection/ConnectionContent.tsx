import React from 'react';
import Reveal from '../../shared/Reveal';
import ConnectionQuote from './ConnectionQuote';
import { landingCopy } from '../../../../data/landing';

const { connection } = landingCopy;

const ConnectionContent: React.FC = () => (
  <div className="mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-20 md:px-16">
    <Reveal className="ml-auto mr-0 w-full max-w-xl text-right md:max-w-2xl">
      <h2 className="mb-6 text-3xl font-display font-black leading-tight md:text-5xl">
        {connection.title}
      </h2>
      <p className="mb-8 text-xl leading-relaxed text-[#1c1a17]/80 md:text-2xl">
        {connection.lead}
      </p>

      <div className="space-y-4 text-lg leading-relaxed text-[#1c1a17]/80 md:text-xl">
        <p className="font-bold">{connection.strongLine}</p>
        {connection.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <ConnectionQuote />
    </Reveal>
  </div>
);

export default ConnectionContent;
