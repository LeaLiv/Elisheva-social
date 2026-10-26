import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import type { CircleItem } from '../../../../types/landing';

interface OrbitItemProps {
  item: CircleItem;
  angle: number;
  orbit: MotionValue<number>;
}

// Sits at a fixed angle on the ring; counter-rotates against the orbit so it stays upright.
const OrbitItem: React.FC<OrbitItemProps> = ({ item, angle, orbit }) => {
  const upright = useTransform(orbit, (r) => -(r + angle));
  return (
    <div className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
      <motion.div
        className="absolute left-1/2 top-0 flex w-28 flex-col items-center gap-2 text-center sm:w-36 md:w-44"
        style={{ x: '-50%', y: '-50%', rotate: upright }}
      >
        <img
          src={item.image}
          alt={item.label}
          className="h-16 w-16 rounded-full object-cover shadow-lg ring-4 ring-[#faf7f2]/80 sm:h-24 sm:w-24 md:h-32 md:w-32"
        />
        <span className="max-w-[130px] text-xs font-medium leading-tight text-[#1c1a17]/80 md:text-base">{item.label}</span>
      </motion.div>
    </div>
  );
};

export default OrbitItem;
