import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface Highlight {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HighlightsVideoProps {
  title?: string;
  subtitle?: string;
  videoUrl?: string;
  highlights?: Highlight[];
}

const HighlightsVideo: React.FC<HighlightsVideoProps> = ({
  title = "תיעוד הפרויקט שלכם",
  subtitle = "ראו את הטרנספורמציה מתחילה ועד סיום",
  videoUrl = "/assets/videos/sample.mp4",
  highlights = []
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Default highlights if none provided
  const defaultHighlights: Highlight[] = [
    {
      id: 1,
      title: "תיעוד אמין",
      description: "כל שלב של התהליך מתועד בצורה אמיתית וללא סינון",
      icon: "📹"
    },
    {
      id: 2,
      title: "חיבור לקהל",
      description: "תוכן שיוצר קשר אמיתי עם הלקוחות הפוטנציאליים שלכם",
      icon: "💫"
    },
    {
      id: 3,
      title: "הבחנה בשוק",
      description: "הראו את מה שמייחה אתכם מהיתר בתהליך העיצוב",
      icon: "⭐"
    },
    {
      id: 4,
      title: "בונה אמון",
      description: "שקיפות מלאה בכל שלב משפרת את ההתייחסות לשירותים שלכם",
      icon: "🤝"
    }
  ];

  const displayHighlights = highlights.length > 0 ? highlights : defaultHighlights;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-stone-50 to-stone-100 py-12 md:py-20 px-4 md:px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="mb-12 md:mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full bg-black rounded-lg md:rounded-2xl overflow-hidden shadow-2xl aspect-video md:aspect-video">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onEnded={() => setIsPlaying(false)}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 hover:bg-white p-4 md:p-5 rounded-full transition-colors"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause size={24} className="text-stone-900" />
                ) : (
                  <Play size={24} className="text-stone-900 ml-1" />
                )}
              </motion.button>

              <motion.button
                onClick={toggleMute}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 hover:bg-white p-4 md:p-5 rounded-full transition-colors"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX size={24} className="text-stone-900" />
                ) : (
                  <Volume2 size={24} className="text-stone-900" />
                )}
              </motion.button>
            </div>

            {/* Play Button for Mobile */}
            {!isPlaying && (
              <motion.button
                onClick={togglePlay}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="bg-white/90 group-hover:bg-white p-4 md:p-6 rounded-full transition-all shadow-lg">
                  <Play size={32} className="text-stone-900 ml-2 md:ml-3" fill="currentColor" />
                </div>
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayHighlights.map((highlight) => (
            <motion.div
              key={highlight.id}
              variants={itemVariants}
              className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200 hover:border-blue-400"
            >
              {/* Icon */}
              <div className="text-4xl md:text-5xl mb-4">
                {typeof highlight.icon === 'string' ? highlight.icon : highlight.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-3">
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-stone-600 text-lg md:text-xl mb-6">
            רוצים להפוך את הפרויקט שלכם לתוכן מרהיב?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-full text-base md:text-lg transition-all shadow-lg"
          >
            בואו נדבר תכלס
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightsVideo;
