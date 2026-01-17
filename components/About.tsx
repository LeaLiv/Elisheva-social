import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-900 text-white overflow-hidden" aria-labelledby="about-title">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             {/* Decorative element */}
            <div aria-hidden="true" className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-800">
              <img 
                src="/assets/self-picture.jpg"
                alt="Elisheva Lev portrait working on site" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white text-stone-900 p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="font-bold text-lg">"הקהל שלכם רואה תוצאה. אני מתעדת את הדרך לשם."</p>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="about-title" className="text-blue-500 font-bold tracking-widest uppercase mb-6 text-xl">כאן אני נכנסת לתמונה</h2>
            
            <div className="space-y-6 text-lg text-stone-300 leading-relaxed font-light">
              <p className="text-xl font-medium text-white">
                אני אלישבע - יוצרת תוכן וסושיאל לענף העיצוב והבנייה, ובעיקר מעצבת שמגיעה לתעד את השטח.
              </p>
              
              <p>
                המומחיות שלי היא לקחת את מה שקורה אצלכם בתהליך,
                <br />
                בסטודיו או בשיחות עם הלקוחות,
                <br />
                ולתרגם את זה לשפה דיגיטלית חיה.
              </p>

              <p>
                כי כשאתם חושפים את התהליך, את האמת ואת האדם שמאחורי העיצוב - נוצר אמון.
              </p>

              <p className="text-xl font-bold text-white pt-4 border-t border-stone-700">
                אני כאן כדי לתת לכם את הבידול המדויק שלכם.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;