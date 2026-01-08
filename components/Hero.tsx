import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Parallax Feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Interior Design Construction Site"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-transparent to-stone-50/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-lg md:text-xl font-medium text-gold-600 mb-4 tracking-[0.2em] uppercase">
            תוכן, סושיאל וניהול לענף העיצוב
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-stone-900 leading-tight mb-6"
        >
          את עובדת קשה, יש לך <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-stone-600 to-stone-900">
            תוצאות מדהימות בשטח
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-stone-600 font-light mb-10 max-w-3xl leading-relaxed"
        >
          אבל אם את לא ברשת – את לא קיימת. הלקוחות שלך מחפשים אותך שם.
          <br />
          הגיע הזמן להפוך את העשייה היומיומית למותג מוביל ולנוכחות שאי אפשר להתעלם ממנה.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-gold-500 transition-colors duration-300 shadow-xl"
          >
            בואי נדבר תכלס
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white text-stone-900 border border-stone-200 font-bold rounded-full hover:bg-stone-100 transition-colors duration-300 shadow-md"
          >
            הכירי אותי
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