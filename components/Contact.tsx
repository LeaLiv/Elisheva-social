import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-100 relative overflow-hidden" aria-labelledby="contact-title">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-400/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[0%] left-[0%] w-[30%] h-[30%] bg-stone-300/30 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-stone-900 rounded-3xl shadow-2xl overflow-hidden p-12 md:p-16 text-center text-white">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="contact-title" className="text-3xl md:text-5xl font-bold mb-6">הגיע הזמן שהסושיאל שלכם יהיה מדויק כמו העיצובים שלכם
            </h2>
            <p className="text-stone-300 mb-12 text-lg md:text-xl max-w-2xl mx-auto">
              שיחת התאמה קצרה לפרויקט הבא שלכם - אני כאן כדי לגרום לזה לקרות.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="https://api.whatsapp.com/send?phone=972502092507&text=%D7%94%D7%99%D7%99+%D7%90%D7%9C%D7%99%D7%A9%D7%91%D7%A2,+%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A9%D7%9E%D7%95%D7%A2+%D7%A4%D7%A8%D7%98%D7%99%D7%9D+%D7%A2%D7%9C+%D7%9C%D7%99%D7%95%D7%95%D7%99+%D7%94%D7%A1%D7%95%D7%A9%D7%99%D7%90%D7%9C+%D7%A9%D7%9C%D7%9A+%D7%9C%D7%9E%D7%A2%D7%A6%D7%91%D7%99%D7%9D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 group min-w-[120px]"
            >
              <div className="bg-stone-800 p-6 rounded-full group-hover:bg-blue-500 transition-colors duration-300">
                <MessageCircle size={32} aria-hidden="true" />
              </div>
              <span className="text-lg font-medium group-hover:text-blue-400 transition-colors">WhatsApp</span>
            </a>
            <a href="tel:0502092507" className="flex flex-col items-center gap-4 group">
              <div className="bg-stone-800 p-6 rounded-full group-hover:bg-blue-500 transition-colors duration-300">
                <Phone size={32} aria-hidden="true" />
              </div>
              <span className="text-lg font-medium group-hover:text-blue-400 transition-colors" aria-label="Call 050-2092507">050-2092507</span>
            </a>

            <a href="mailto:social@elishevalev.co.il" className="flex flex-col items-center gap-4 group">
              <div className="bg-stone-800 p-6 rounded-full group-hover:bg-blue-500 transition-colors duration-300">
                <Mail size={32} aria-hidden="true" />
              </div>
              <span className="text-lg font-medium group-hover:text-blue-400 transition-colors" aria-label="Email social@elishevalev.co.il">social@elishevalev.co.il</span>
            </a>

            <a href="https://www.instagram.com/elisheva_lev_social" className="flex flex-col items-center gap-4 group">
              <div className="bg-stone-800 p-6 rounded-full group-hover:bg-blue-500 transition-colors duration-300">
                <Instagram size={32} aria-hidden="true" />
              </div>
              <span className="text-lg font-medium group-hover:text-blue-400 transition-colors">@elisheva_lev_social</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;