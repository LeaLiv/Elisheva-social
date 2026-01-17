import React from 'react';
import { motion } from 'framer-motion';
import { Camera, TrendingUp, User, CheckCircle, ArrowLeft } from 'lucide-react';

const Process: React.FC = () => {
  const foundations = [
    {
      title: "ויזואליה של מעצבים",
      desc: "לא סתם 'תיעוד', אלא צילום שמבין קומפוזיציה, חומר ואור ומחמיא לפרויקטים שלכם.",
      icon: <Camera size={32} />,
      color: "bg-stone-50"
    },
    {
      title: "אסטרטגיה שמוכרת",
      desc: "אנחנו לא רודפים אחרי טרנדים, אלא בונים שפה שיווקית שמשדרת סמכות ומביאה לקוחות.",
      icon: <TrendingUp size={32} />,
      color: "bg-white"
    },
    {
      title: "האדם שבמרכז",
      desc: "אנשים קונים מאנשים. אני אעזור לכם להרגיש בנוח מול המצלמה (כן, זה אפשרי!) ולהביא את האישיות הכובשת שלכם לקדמת הבמה. זה המרכיב הסודי שהופך עוקבים ללקוחות משלמים.",
      icon: <User size={32} />,
      color: "bg-stone-50"
    }
  ];

  const tracks = [
    {
      title: "הבוסט הויזואלי",
      target: "למעצבים שמנהלים לבד, אבל חייבים חומרים ברמה של מגזין.",
      features: [
        "יום צילום בשטח: בימוי והעמדה בפרויקט גמר או בסטודיו.",
        "תוצרים ערוכים: בנק סרטונים (Reels) ותמונות אווירה מוכנים לשימוש מיידי."
      ],
      buttonText: "תאמי לי יום צילום",
      isPrimary: false
    },
    {
      title: "פיצוח ואסטרטגיה",
      target: "למעצבים שרוצים לנהל את העמוד לבד, אבל חייבים תוכנית מדויקת וחומרים מקצועיים כדי שזה יעבוד. במסלול הזה אתם מקבלים את כל הכלים כדי לצאת לדרך:",
      features: [
        "פיצוח ואסטרטגיה: פגישת אפיון הבידול הייחודי שלכם ובניית גאנט תוכן חודשי מסודר.",
        "יום צילום ותוכן: אני מגיעה לצלם ולביים, ומספקת לכם בנק סרטונים ותמונות שתואמים בדיוק לגאנט שבנינו.",
        "ניהול עצמאי: אתם מקבלים ממני את התוכנית ואת התוכן הויזואלי - וההעלאה השוטפת (הביצוע) נשארת אצלכם."
      ],
      buttonText: "אני רוצה אסטרטגיה",
      isPrimary: true
    },
    {
      title: "ניהול סושיאל מלא",
      target: "למעצבים שרוצים ראש שקט ומותג שמנוהל מא' ועד ת' בצורה מקצועית. במסלול הזה אני לוקחת את המושכות לידיים:",
      features: [
        "כל מה שיש במסלול הויזואלי +",
        "ניהול שוטף: בניית גאנט, כתיבת קאפשן (Text), העלאת פוסטים וניהול הסטורי.",
        "נוכחות עקבית: אני דואגת שהעמוד שלכם יהיה פעיל, חי וממיר, בזמן שאתם מתרכזים בעיצוב."
      ],
      buttonText: "קחי את המושכות, בואי נדבר",
      isPrimary: false
    }
  ];

  return (
    <section id="process" className="py-24 bg-stone-50" aria-labelledby="process-title">
      
      <div className="container mx-auto px-6">

        {/* Foundations Section */}
        <div className="mb-32">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2
              id="process-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-black text-stone-900 mb-6"
            >
              בונים מותג, לא רק פיד.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-stone-600"
            >
              בדיוק כמו בתוכנית אדריכלית, שבה ההצלחה טמונה בפרטים הקטנים -<br/> מודל הנוכחות הדיגיטלית נשען על שלושה יסודות:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foundations.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`${item.color} p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="w-14 h-14 bg-stone-900 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-stone-900">
                  {item.title}
                </h3>
                <p className="text-stone-600 leading-relaxed mt-4">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-2xl font-bold text-blue-600">אז איך מתרגמים את זה לעבודה?</p>
          </motion.div>
        </div>

        {/* Tracks Section */}
        <div id="services">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">בחרו את המסלול שלכם</h2>
            <p className="text-xl text-stone-500">שלושה דרכים להפוך כישרון לנוכחות דיגיטלית בולטת.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {tracks.map((track, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-3xl p-8 relative flex flex-col h-full border ${track.isPrimary ? 'bg-stone-900 text-white border-stone-900 shadow-2xl scale-105 z-10' : 'bg-white text-stone-900 border-stone-200 shadow-lg'}`}
              >
                {track.isPrimary && (
                  <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                    <span className="bg-blue-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-md">
                      הכי מומלץ
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4">{track.title}</h3>
                <p className={`mb-8 min-h-[80px] ${track.isPrimary ? 'text-stone-300' : 'text-stone-600'}`}>
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
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 group ${track.isPrimary
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-900'
                    }`}
                >
                  {track.buttonText}
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;