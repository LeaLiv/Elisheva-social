import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit, Share2, TrendingUp, Check } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      title: "ראש שקט",
      desc: "אתם עובדים, אני דואגת לתיעוד. בלי לעצור את העבודה בשביל 'סלפי'. אני הופכת לצל ביום העבודה שלכם.",
      color: "bg-stone-100",
      num: "01"
    },
    {
      title: "חיבור ואמון",
      desc: "לקוחות קונים מאנשים. הם רואים אתכם, את המקצועיות שלכם, ומרגישים בטוחים יותר לשכור את שירותיכם.",
      color: "bg-white",
      num: "02"
    },
    {
      title: "הרווח שלכם",
      desc: "שקט תעשייתי ונוכחות עקבית. לא רק שיש לכם תוכן – יש מי שמנהלת אותו. האינסטגרם עובד בשבילכם 24/7.",
      color: "bg-stone-100",
      num: "03"
    }
  ];

  const features = [
    { 
      title: "אסטרטגיה ופיצוח מסרים",
      desc: "פגישת אפיון מדויקת להבנת הייחוד שלכם והסיפור שאנחנו הולכים לספר."
    },
    { 
      title: "יום צילום ותיעוד בשטח",
      desc: "אני מגיעה, מצלמת, מביימת ודואגת שהכל יראה מיליון דולר בזמן שאתם עובדים."
    },
    { 
      title: "עריכה מקצועית (Reels & TikTok)",
      desc: "הפיכת חומרי הגלם לסרטונים ויראליים, חדים ומעניינים שאי אפשר להתעלם מהם."
    },
    { 
      title: "ניהול אינסטגרם מלא (Full Management)",
      desc: "כאן אני לוקחת את המושכות. העלאת פוסטים וסטוריז, קופירייטינג שמניע לפעולה, ושמירה על דופק חי בעמוד. אתם מקבלים ראש שקט באמת."
    },
  ];

  return (
    <section id="process" className="py-24 bg-stone-50" aria-labelledby="process-title">
      <div className="container mx-auto px-6">
        
        {/* The "What does it give you" part */}
        <div className="mb-24">
          <motion.h2 
            id="process-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-stone-900 mb-16"
          >
            מה זה נותן לכם?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-stone-200">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`p-10 border-r border-l border-stone-200 ${step.color} relative overflow-hidden group hover:bg-stone-800 hover:text-white transition-colors duration-500`}
              >
                <span className="text-6xl font-black text-stone-200 absolute top-4 left-4 group-hover:text-stone-700 transition-colors duration-500" aria-hidden="true">{step.num}</span>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
                <p className="relative z-10 opacity-80 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The "Included" part */}
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100 transform skew-x-12 translate-x-20 hidden md:block" aria-hidden="true"></div>
          
          <div className="flex flex-col md:flex-row relative z-10 gap-12">
            <div className="w-full md:w-3/5 mb-10 md:mb-0">
               <h3 className="text-3xl md:text-4xl font-bold mb-8">מעטפת סושיאל מלאה למעצבים</h3>
               <p className="text-xl text-stone-600 mb-10 max-w-lg">
                 אנחנו לא רק מעלים תמונות. אנחנו בונים מותג. מיום הצילום ועד לניהול השוטף - אני הדאגה האחרונה שלכם בלו"ז.
               </p>
               
               <div className="space-y-6">
                 {features.map((f, i) => (
                   <div key={i} className="flex gap-4 bg-stone-50 p-6 rounded-xl border border-stone-100 transition-all hover:shadow-md">
                     <div className="mt-1 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                       <Check size={16} />
                     </div>
                     <div>
                       <h4 className="font-bold text-lg text-stone-900 mb-2">{f.title}</h4>
                       <p className="text-stone-600 text-base leading-relaxed">{f.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="w-full md:w-2/5 flex flex-col justify-center">
              <div className="relative sticky top-24">
                <div className="absolute inset-0 bg-blue-500 rounded-[2rem] -rotate-3 opacity-20" aria-hidden="true"></div>
                <img 
                  src="https://picsum.photos/500/700?random=3" 
                  alt="Full Social Media Management" 
                  className="rounded-[2rem] shadow-2xl relative z-10 w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;