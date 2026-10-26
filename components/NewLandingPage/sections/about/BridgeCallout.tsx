import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Reveal from '../../shared/Reveal';
import { landingCopy } from '../../../../data/landing';

const { bridge } = landingCopy;

const BridgeCallout: React.FC = () => (
  <Reveal className="mx-auto mt-16 max-w-3xl text-center md:mt-20">
    <p className="mb-4 text-lg font-light text-[#1c1a17]/55 md:text-xl">{bridge.intro}</p>
    <p className="text-2xl font-display font-bold leading-relaxed text-[#a9781f] md:text-4xl">
      {bridge.headline}
    </p>
    <p className="mt-5 text-lg font-light leading-relaxed text-[#1c1a17]/75 md:text-2xl">
      {bridge.bodyBefore} <span className="font-medium text-[#1c1a17]">{bridge.bodyHighlight}</span>
    </p>
    <p className="mt-5 text-base font-light text-[#1c1a17]/55 md:text-lg">{bridge.outro}</p>
    <motion.a
      href="#system"
      aria-label={bridge.linkAriaLabel}
      className="mt-6 inline-flex flex-col items-center gap-1 text-[#a9781f]"
    >
      <span className="text-sm font-medium">{bridge.linkLabel}</span>
      <motion.span
        aria-hidden="true"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={28} strokeWidth={1.5} />
      </motion.span>
    </motion.a>
  </Reveal>
);

export default BridgeCallout;
