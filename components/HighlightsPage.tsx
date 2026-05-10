import React from 'react';
import { motion } from 'framer-motion';
import CloudinaryVideoPlayer from './CloudinaryVideoPlayer'; // הייבוא החדש

const HighlightsPage: React.FC = () => {
  const videos = [
    {
      videoUrl: "https://res.cloudinary.com/dlyno2hzj/video/upload/special_aetkae.mp4",
      posterUrl: "assets/first.jpeg"
    },
  {
      videoUrl: "https://res.cloudinary.com/dlyno2hzj/video/upload/v1778431795/copy_8D5DA5AE-4DA5-4990-84E4-460C5A2ED6D9_vqebpr.mov",
      posterUrl: "assets/second.jpeg"
  },
  {
      videoUrl: "https://res.cloudinary.com/dlyno2hzj/video/upload/v1778433852/copy_DE450E0D-8FA8-4464-BE34-4A70A7516A05_compressed_zzslhg.mp4",
      posterUrl: "assets/special.jpeg"
  }
  ];

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-start px-4 md:px-6 py-12 md:py-16">
      <motion.div
        className="w-full max-w-6xl mb-12 md:mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 leading-tight">
          המרחק זמני, האהבה שלנו לא.<br/>
קצת מהסיפור שלנו:
        </h2>
      </motion.div>

      <motion.div
        className="w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 gap-6 md:gap-8 justify-items-center">
          {videos.map((video, index) => (
            <CloudinaryVideoPlayer
              key={index}
              videoUrl={video.videoUrl}
              posterUrl={video.posterUrl}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HighlightsPage;