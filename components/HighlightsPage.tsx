import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  url: string;
}

const HighlightsPage: React.FC = () => {
  const videos: Video[] = [
    { id: 1, title: "סרטון 1", url: "/assets/videos/special.mov" },
  ];

  const [playingId, setPlayingId] = useState<number | null>(null);
  const [mutedId, setMutedId] = useState<Set<number>>(new Set());
  const videoRefs = React.useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const togglePlay = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      if (playingId === id) {
        video.pause();
        setPlayingId(null);
      } else {
        // Pause all other videos
        Object.values(videoRefs.current).forEach(v => {
          if (v) v.pause();
        });
        video.play();
        setPlayingId(id);
      }
    }
  };

  const toggleMute = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      const newMuted = new Set(mutedId);
      if (newMuted.has(id)) {
        newMuted.delete(id);
      } else {
        newMuted.add(id);
      }
      video.muted = newMuted.has(id);
      setMutedId(newMuted);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-start px-4 md:px-6 py-12 md:py-16">
      {/* Title Section */}
      <motion.div
        className="w-full max-w-6xl mb-12 md:mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
          סרטונים
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          הסרטונים הנ"ל הם רק לדוגמא!!!
        </p>
      </motion.div>

      {/* Videos Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className="w-full max-w-sm mx-auto aspect-[9/16]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="relative w-full h-full bg-black rounded-lg md:rounded-2xl overflow-hidden shadow-2xl">
              <video
                ref={(el) => {
                  if (el) videoRefs.current[video.id] = el;
                }}
                className="w-full h-full object-cover"
                onEnded={() => setPlayingId(null)}
              >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <motion.button
                  onClick={() => togglePlay(video.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/90 hover:bg-white p-4 md:p-5 rounded-full transition-colors"
                  aria-label={playingId === video.id ? "Pause video" : "Play video"}
                >
                  {playingId === video.id ? (
                    <Pause size={24} className="text-black" />
                  ) : (
                    <Play size={24} className="text-black ml-1" />
                  )}
                </motion.button>

                <motion.button
                  onClick={() => toggleMute(video.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/90 hover:bg-white p-4 md:p-5 rounded-full transition-colors"
                  aria-label={mutedId.has(video.id) ? "Unmute video" : "Mute video"}
                >
                  {mutedId.has(video.id) ? (
                    <VolumeX size={24} className="text-black" />
                  ) : (
                    <Volume2 size={24} className="text-black" />
                  )}
                </motion.button>
              </div>

              {/* Play Button for Mobile */}
              {playingId !== video.id && (
                <motion.button
                  onClick={() => togglePlay(video.id)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="bg-white/90 group-hover:bg-white p-4 md:p-6 rounded-full transition-all shadow-lg">
                    <Play size={32} className="text-black ml-2 md:ml-3" fill="currentColor" />
                  </div>
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HighlightsPage;
