import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import type { ContactContent } from '../types/content';
import { businessContact } from '../data/contact';

interface ContactProps {
  content: ContactContent;
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section id="contact" className="py-24 bg-stone-100 relative overflow-hidden" aria-labelledby="contact-title">
       {/* Background with Parallax Feel */}
      <div className="absolute inset-0 z-0">
         <img
          src="/assets/contact.png"
          alt="Interior Design Construction Site"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-transparent to-stone-50/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-stone-900 rounded-3xl shadow-2xl overflow-hidden p-12 md:p-16 text-center text-white">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="contact-title" className="text-3xl md:text-5xl font-bold mb-6">{content.title}</h2>
            <p className="text-stone-300 mb-12 text-lg md:text-xl max-w-2xl mx-auto">
              {content.description}
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
              href={businessContact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 group min-w-[120px]"
            >
              <div className="bg-stone-800 p-6 rounded-full group-hover:bg-blue-500 transition-colors duration-300">
                <MessageCircle size={32} aria-hidden="true" />
              </div>
              <span className="text-lg font-medium group-hover:text-blue-400 transition-colors">WhatsApp</span>
            </a>
            <a href={businessContact.phoneHref} className="flex flex-col items-center gap-4 group">
              <div className="bg-stone-800 p-6 rounded-full group-hover:bg-blue-500 transition-colors duration-300">
                <Phone size={32} aria-hidden="true" />
              </div>
              <span className="text-lg font-medium group-hover:text-blue-400 transition-colors" aria-label={businessContact.phoneAriaLabel}>{businessContact.phoneLabel}</span>
            </a>

            <a href={`mailto:${businessContact.email}`} className="flex flex-col items-center gap-4 group">
              <div className="bg-stone-800 p-6 rounded-full group-hover:bg-blue-500 transition-colors duration-300">
                <Mail size={32} aria-hidden="true" />
              </div>
              <span className="text-lg font-medium group-hover:text-blue-400 transition-colors" aria-label={businessContact.emailAriaLabel}>{businessContact.email}</span>
            </a>

            <a href={businessContact.instagramUrl} className="flex flex-col items-center gap-4 group">
              <div className="bg-stone-800 p-6 rounded-full group-hover:bg-blue-500 transition-colors duration-300">
                <Instagram size={32} aria-hidden="true" />
              </div>
              <span className="text-lg font-medium group-hover:text-blue-400 transition-colors">{businessContact.instagramHandle}</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;