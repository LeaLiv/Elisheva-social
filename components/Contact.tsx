import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, ArrowLeft } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-100 relative overflow-hidden" aria-labelledby="contact-title">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-gold-400/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[0%] left-[0%] w-[30%] h-[30%] bg-stone-300/30 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Text Side */}
          <div className="w-full md:w-2/5 bg-stone-900 text-white p-12 flex flex-col justify-between">
            <div>
              <h2 id="contact-title" className="text-3xl md:text-4xl font-bold mb-6">בואי נבנה לך נוכחות שאי אפשר להתעלם ממנה</h2>
              <p className="text-stone-300 mb-12 text-lg">
                וננהל אותה עבורך. שיחת התאמה קצרה לפרויקט הבא שלך - אני כאן כדי לגרום לזה לקרות.
              </p>
            </div>
            
            <div className="space-y-6">
              <a href="tel:0502092507" className="flex items-center gap-4 text-lg hover:text-gold-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-lg p-2">
                <div className="bg-stone-800 p-3 rounded-full"><Phone size={20} aria-hidden="true" /></div>
                <span aria-label="Call 050-2092507">050-2092507</span>
              </a>
              <a href="mailto:elishelev5@gmail.com" className="flex items-center gap-4 text-lg hover:text-gold-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-lg p-2">
                <div className="bg-stone-800 p-3 rounded-full"><Mail size={20} aria-hidden="true" /></div>
                <span aria-label="Email elishelev5@gmail.com">elishelev5@gmail.com</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-lg hover:text-gold-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-lg p-2">
                <div className="bg-stone-800 p-3 rounded-full"><Instagram size={20} aria-hidden="true" /></div>
                <span>@elisheva_lev</span>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-3/5 p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">שם מלא</label>
                  <input id="name" type="text" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all" placeholder="ישראל ישראלי" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">טלפון</label>
                  <input id="phone" type="tel" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all" placeholder="050-0000000" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">אימייל</label>
                <input id="email" type="email" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all" placeholder="your@email.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">קצת על העסק שלך</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all" placeholder="אני מעצבת פנים שמתמחה ב..."></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-stone-900 text-white font-bold text-lg rounded-lg shadow-xl hover:bg-gold-500 transition-colors flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-gold-400"
              >
                <span>שלחי הודעה</span>
                <ArrowLeft className="transform group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;