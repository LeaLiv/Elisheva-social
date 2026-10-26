import React from 'react';
import { motion } from 'framer-motion';
import { landingCopy } from '../../../../data/landing';

interface ResultPhotoCardProps {
  imageNumber: number;
  index: number;
}

const TILTS = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', 'rotate-1', '-rotate-2', 'rotate-0'];

const ResultPhotoCard: React.FC<ResultPhotoCardProps> = ({ imageNumber, index }) => (
  <motion.div
    className={`mr-4 w-32 flex-shrink-0 rounded-xl border border-black/5 bg-white p-2 pb-3 shadow-md transition-transform duration-300 hover:!rotate-0 hover:scale-105 hover:shadow-xl sm:mr-5 sm:w-40 md:w-44 ${TILTS[index % TILTS.length]}`}
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3 + (index % 4) * 0.4, repeat: Infinity, ease: 'easeInOut', delay: (index % 5) * 0.25 }}
  >
    <div className="aspect-[9/16] rounded-xl overflow-hidden">
      <img
        src={`/assets/landing/${imageNumber}.png`}
        alt={landingCopy.proof.resultImageAlt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  </motion.div>
);

export default ResultPhotoCard;
