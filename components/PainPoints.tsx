import React from 'react';
import { motion } from 'framer-motion';
import { Clock, EyeOff, Video } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <Clock size={40} aria-hidden="true" />,
      title: "אין לך זמן לצלם?",
      desc: "תוך כדי עבודה, פוסטים מעוצבים מדי לא באמת מייצגים אותך."
    },
    {
      icon: <EyeOff size={40} aria-hidden="true" />,
      title: "לא רואים מה את נותנת!",
      desc: "את משקיעה את הנשמה, אבל הערך המטורף שלך נשאר סוד."
    },
    {
      icon: <Video size={40} aria-hidden="true" />,
      title: "לא יודעת לשחק מול מצלמה?",
      desc: "איך להפוך את העשייה היומיומית למשהו שמוכר - בלי להרגיש מוזר."
    }
  ];

  return (
    <section id="pain-points" className="py-24 bg-white relative" aria-labelledby="pain-points-title">
      <div className="container mx-auto px-6">
        
        {/* Reality Check Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20 space-y-6"
        >
          <h2 id="pain-points-title" className="text-3xl md:text-5xl font-display font-black text-stone-900 leading-tight">
            בואי נודה על האמת: <br />
            <span className="text-gold-600">היום, זה תעודת הזהות שלך.</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
            לפני שלקוח מרים אלייך טלפון, הוא קודם כל בודק אותך באינסטגרם. 
            אם הפיד שלך לא מעודכן, או לא משדר את רמת המקצועיות שאת נותנת בשטח – מבחינת הלקוח הפוטנציאלי, זה לא קרה.
            <br /><br />
            הנוכחות הדיגיטלית שלך היא לא "בונוס", היא הכלי הכי משמעותי לסגירת עסקאות ולביסוס אוטוריטה.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-stone-800">את מבינה שאת חייבת להיות שם, אבל למי יש זמן לזה?!</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-stone-50 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 group"
            >
              <div className="mb-6 text-stone-400 group-hover:text-gold-500 transition-colors duration-300">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-3">{point.title}</h3>
              <p className="text-stone-600 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;