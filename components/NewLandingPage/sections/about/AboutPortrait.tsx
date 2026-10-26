import React from 'react';
import { motion } from 'framer-motion';
import { landingCopy } from '../../../../data/landing';

const AboutPortrait: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 36, scale: 0.96, rotate: 2 }}
    whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
    whileHover={{ y: -8 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="relative w-full max-w-[320px] shrink-0 sm:max-w-[360px] md:max-w-[380px]"
  >
    <div aria-hidden="true" className="absolute -inset-5 rounded-[2.5rem] bg-[#a9781f]/15 blur-2xl" />
    <div className="relative rounded-[2rem] border border-white/80 bg-white/65 p-3 shadow-[0_30px_80px_rgba(28,26,23,0.22)] backdrop-blur-sm">
      <div className="overflow-hidden rounded-[1.4rem] bg-[#e8e1d8]">
        <motion.img
          src="/assets/elisheva.png"
          alt={landingCopy.about.imageAlt}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-[420px] w-full object-cover object-[center_32%] sm:h-[480px] md:h-[540px]"
        />
      </div>
    </div>
  </motion.div>
);

export default AboutPortrait;
