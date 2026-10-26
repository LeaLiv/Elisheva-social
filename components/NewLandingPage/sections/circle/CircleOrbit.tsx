import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import Lines from '../../shared/Lines';
import OrbitItem from './OrbitItem';
import { circleItems, landingCopy } from '../../../../data/landing';

interface CircleOrbitProps {
  orbit: MotionValue<number>;
}

// Desktop layout: items orbit around a centered title.
const CircleOrbit: React.FC<CircleOrbitProps> = ({ orbit }) => (
  <div className="relative mx-auto mt-10 hidden aspect-square w-full max-w-[480px] md:block md:max-w-[640px]">
    <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#faf7f2]/90 p-4 text-center shadow-xl backdrop-blur-sm md:h-48 md:w-48">
      <p className="font-display text-lg font-bold leading-tight md:text-2xl"><Lines lines={landingCopy.circle.titleLines} /></p>
    </div>

    <div className="absolute inset-[14%]">
      <div aria-hidden="true" className="absolute inset-0 rounded-full border border-dashed border-[#1c1a17]/25" />
      <motion.div className="absolute inset-0" style={{ rotate: orbit }}>
        {circleItems.map((item, index) => (
          <OrbitItem key={item.image} item={item} angle={(360 / circleItems.length) * index} orbit={orbit} />
        ))}
      </motion.div>
    </div>
  </div>
);

export default CircleOrbit;
