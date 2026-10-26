import React from 'react';
import Reveal from '../../shared/Reveal';
import { circleItems } from '../../../../data/landing';

// Mobile layout: items stacked vertically along a thin line.
const CircleList: React.FC = () => (
  <div className="mx-auto mt-10 max-w-sm md:hidden">
    <div className="relative">
      <div aria-hidden="true" className="absolute bottom-7 left-1/2 top-7 w-px -translate-x-1/2 bg-black/15" />
      {circleItems.map((item) => (
        <Reveal key={item.image} y={16} className="relative flex flex-col items-center gap-2 py-3 text-center">
          <img src={item.image} alt={item.label} className="z-10 h-36 w-36 flex-shrink-0 rounded-full border-4 border-[#e8e1d8] object-cover shadow-md" />
          <span className="text-base font-medium text-[#1c1a17]/85">{item.label}</span>
        </Reveal>
      ))}
    </div>
  </div>
);

export default CircleList;
