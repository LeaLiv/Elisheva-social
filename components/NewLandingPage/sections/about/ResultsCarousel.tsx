import React from 'react';
import { motion } from 'framer-motion';
import ResultPhotoCard from './ResultPhotoCard';

interface ResultsCarouselProps {
  items: number[];
}

// An auto-scrolling marquee of scattered photos that float gently and straighten on hover (pauses on hover).
const ResultsCarousel: React.FC<ResultsCarouselProps> = ({ items }) => {
  const loop = [...items, ...items];
  return (
    <div dir="ltr" className="group overflow-hidden py-4">
      <motion.div
        className="flex w-max group-hover:[animation-play-state:paused]"
        style={{ animation: `results-marquee ${items.length * 4}s linear infinite` }}
      >
        {loop.map((n, i) => (
          <ResultPhotoCard key={`${n}-${i}`} imageNumber={n} index={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default ResultsCarousel;
