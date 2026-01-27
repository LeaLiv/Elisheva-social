import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  content: {
    subtitle?: string;
    title: React.ReactNode;
    description: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Parallax Feel */}
      <div className="absolute inset-0 z-0">
         <img
          src="/assets/1.png"
          alt="Interior Design Construction Site"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-transparent to-stone-50/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {content.subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-lg md:text-xl font-medium text-blue-600 mb-4 tracking-[0.2em] uppercase">
              {content.subtitle}
            </h2>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-stone-900 leading-tight mb-6"
        >
          {content.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-stone-600 font-light mb-10 max-w-4xl leading-relaxed"
        >
          {content.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-blue-500 transition-colors duration-300 shadow-xl"
          >
            {content.primaryBtn}
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white text-stone-900 border border-stone-200 font-bold rounded-full hover:bg-stone-100 transition-colors duration-300 shadow-md"
          >
            {content.secondaryBtn}
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;