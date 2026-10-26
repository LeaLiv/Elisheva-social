import React from 'react';
import CircleHeader from './CircleHeader';
import CircleOrbit from './CircleOrbit';
import CircleList from './CircleList';
import { useOrbit } from '../../hooks/useOrbit';

const CircleSection: React.FC = () => {
  const orbit = useOrbit();

  return (
    <section id="system" className="relative overflow-hidden border-b border-black/10 bg-[#e8e1d8] px-6 py-24 md:px-16 md:py-32">
      <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:radial-gradient(#8f8172_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      <div className="relative mx-auto max-w-6xl">
        <CircleHeader />
        <CircleOrbit orbit={orbit} />
        <CircleList />
      </div>
    </section>
  );
};

export default CircleSection;
