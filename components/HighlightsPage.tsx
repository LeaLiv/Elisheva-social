import React from 'react';
import { motion } from 'framer-motion';
import CloudinaryVideoPlayer from './CloudinaryVideoPlayer'; // הייבוא החדש

const HighlightsPage: React.FC = () => {

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-start px-4 md:px-6 py-12 md:py-16">
      <motion.div
        className="w-full max-w-6xl mb-12 md:mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
          סרטונים
        </h1>
      </motion.div>

      <motion.div
        className="w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 gap-6 md:gap-8 justify-items-center">
          <CloudinaryVideoPlayer
  // הוידאו המקורי שלך - באיכות מקסימלית וללא כיווץ
  videoUrl="https://res.cloudinary.com/dlyno2hzj/video/upload/special_aetkae.mp4"
  // נתיב לתמונה יפה של הציפורניים ששמרת בתיקיית public/images
  posterUrl="https://res.cloudinary.com/dlyno2hzj/video/upload/special_aetkae.jpg" 
/>
        </div>
      </motion.div>
    </div>
  );
};

export default HighlightsPage;