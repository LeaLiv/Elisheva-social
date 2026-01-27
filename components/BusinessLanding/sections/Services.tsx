import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const Services: React.FC = () => {
  const tracks = [
    {
      title: "הבוסט הויזואלי",
      target: "לבעלי עסקים שמנהלים לבד, אבל חייבים חומרים ברמה של מגזין.",
      features: [
        "יום צילום מדויק לעסק שלכם",
        "עריכת תוכן מקצועית",
        "תמונות אווירה לשימוש מיידי"
      ],
      buttonText: "תאמי לי יום צילום",
      isPrimary: false
    },
    {
      title: "פיצוח ואסטרטגיה",
      target: "לבעלי עסקים שצריכים תוכנית עבודה.",
      features: [
        "אפיון בידול עסקי",
        "יום צילום מרוכז",
        "בנק סרטונים לניהול עצמאי"
      ],
      buttonText: "אני רוצה אסטרטגיה",
      isPrimary: true
    },
    {
      title: "ניהול סושיאל מלא",
      target: "למי שרוצה ראש שקט.",
      features: [
        "ניהול מא' ועד ת'",
        "צילום ועריכה שוטפים",
        "ניהול הקהילה והעמוד"
      ],
      buttonText: "קחי את המושכות",
      isPrimary: false
    },
    {
      title: "תיעוד אירועים והשקות",
      target: "הפיכת אירוע חד פעמי לנכס שיווקי.",
      features: [
        "סרטוני תדמית לאירוע",
        "תיעוד אווירה בזמן אמת",
        "חומרים לשיווק עתידי"
      ],
      buttonText: "בואו נדבר על האירוע",
      isPrimary: false
    }
  ];

  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
       {/* Background Decoration */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=5" 
          alt="" 
          className="w-full h-full object-cover opacity-5 pointer-events-none" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-stone-900">המסלולים שלנו</h2>
          <p className="text-xl text-stone-500">ארבע דרכים להפוך עסק לנוכחות דיגיטלית בולטת</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {tracks.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-3xl p-6 relative flex flex-col h-full border min-h-[420px] ${track.isPrimary ? 'bg-stone-900 text-white border-stone-900 shadow-2xl scale-105 z-10' : 'bg-white/90 backdrop-blur-sm text-stone-900 border-stone-200 shadow-lg'}`}
            >
              {track.isPrimary && (
                <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                  <span className="bg-blue-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-md">
                    מומלץ
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold mb-3">{track.title}</h3>
              <p className={`mb-6 text-sm ${track.isPrimary ? 'text-stone-300' : 'text-stone-600'}`}>
                {track.target}
              </p>

              <div className="space-y-4 mb-8 flex-grow">
                {track.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex gap-3 items-start">
                    <div className={`mt-1 flex-shrink-0 ${track.isPrimary ? 'text-blue-400' : 'text-blue-500'}`}>
                      <CheckCircle size={18} />
                    </div>
                    <p className={`text-sm leading-relaxed ${track.isPrimary ? 'text-stone-300' : 'text-stone-600'}`}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <a 
                href="#contact"
                className={`w-full py-3 rounded-xl font-bold text-sm text-center transition-all duration-300 flex items-center justify-center gap-2 group ${
                  track.isPrimary 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-900'
                }`}
              >
                {track.buttonText}
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;