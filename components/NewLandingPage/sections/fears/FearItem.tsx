import React from 'react';
import Reveal from '../../shared/Reveal';

interface FearItemProps {
  text: string;
  index: number;
}

const FearItem: React.FC<FearItemProps> = ({ text, index }) => (
  <Reveal delay={index * 0.1} className="border-t border-black/10 pt-6">
    <p className="text-lg md:text-xl leading-relaxed text-[#1c1a17]/85 font-light">{text}</p>
  </Reveal>
);

export default FearItem;
