import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Layout, Layers, HelpCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <Clock size={40} aria-hidden="true" />,
      text: "אין לכם זמן לצלם?"
    },
    {
      icon: <Layout size={40} aria-hidden="true" />,
      text: "פוסטים מעוצבים מדי לא מייצגים את מי שאתם?"
    },
    {
      icon: <Layers size={40} aria-hidden="true" />,
      text: "לא רואים את התהליך והערך המטורף שעובר מפרויקט תכנון ועד גמר?"

    },
    {
      icon: <HelpCircle size={40} aria-hidden="true" />,
      text: "ואיך הופכים את הכל לתוכן שמוכר בלי להרגיש מוזר?"
    }
  ];

  return (
    <section id="pain-points" className="py-24 bg-white relative" aria-labelledby="pain-points-title">
       {/* Background with Parallax Feel */}
      <div className="absolute inset-0 z-0">
         <img
          src="/assets/pain-points.png"
          alt="Interior Design Construction Site"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-transparent to-stone-50/90" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Reality Check Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20 space-y-6"
        >
          <h2 id="pain-points-title" className="text-3xl md:text-5xl font-display font-black text-stone-900 leading-tight">
            בואו נודה על האמת
          </h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
            האינסטגרם הוא חלון הראווה שלכם,
            <br className="hidden md:block" />
            ובלי נוכחות אותנטית שמבליטה את הייחודיות שלכם -
            <br className="hidden md:block" />
            הלקוחות האידיאליים פשוט לא יראו אתכם.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-blue-600">אתם מבינים שאתם חייבים להיות שם, אבל איך?!</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-stone-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group flex flex-col items-center text-center h-full"
            >
              <div className="mb-6 text-stone-400 group-hover:text-blue-500 transition-colors duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 leading-snug">{point.text}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;