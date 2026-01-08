import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

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
                src="https://picsum.photos/600/800?random=2" 
                alt="Elisheva Lev portrait working on site" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white text-stone-900 p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="font-bold text-lg">"הקהל שלך רואה תוצאה. אני מתעדת את הדרך לשם."</p>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-2">כאן אני נכנסת לתמונה</h2>
            <h3 id="about-title" className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              אני אלישבע. <br/>
              <span className="text-stone-400">יוצרת תוכן וסושיאל לענף העיצוב.</span>
            </h3>
            
            <p className="text-lg text-stone-300 mb-8 leading-relaxed">
              בעיקר מעצבת פנים שמגיעה מהשטח. אני יודעת בדיוק מה זה אומר להיות באתר בנייה ב-7 בבוקר, להתמודד עם ספקים ולדאוג שהכל יצא מושלם.
              <br/><br/>
              את צריכה שותפה שמבינה את ההשקעה מאחורי כל החלטה, ויודעת בדיוק מה הקהל שלך צריך לראות כדי לבטוח בך.
            </p>

            <ul className="space-y-4">
              {[
                "שותפה שמגיעה מהשטח ומבינה עיצוב",
                "תוכן אותנטי שלא מרגיש כמו פרסומת",
                "מיקוד בבניית אמון מול הלקוח הבא שלך"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={24} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;