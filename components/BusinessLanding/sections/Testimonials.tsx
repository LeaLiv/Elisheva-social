import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "היה יום צילום נדיר! לא האמנתי שאפשר להספיק כל כך הרבה ועדיין ליהנות מהדרך.",
      author: "לקוחה מרוצה",
      role: "בעלת עסק"
    },
    {
      text: "לא ציפיתי לכזאת בהירות וכלים פרקטיים. סוף סוף יש לי תוכנית עבודה מסודרת.",
      author: "משתתפת סדנה",
      role: "מעצבת פנים"
    }
  ];

  return (
    <section className="py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold">קצת ממה שלקוחות שבחרו להראות את עצמם,<br/> מספרים על התהליך המשותף</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700 relative"
            >
              <div className="text-blue-500 mb-4 opacity-50">
                <Quote size={40} />
              </div>
              <p className="text-xl font-light leading-relaxed mb-6 text-stone-200">
                "{item.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-stone-600 rounded-full flex items-center justify-center font-bold text-stone-300">
                  {item.author[0]}
                </div>
                <div>
                  <div className="font-bold">{item.author}</div>
                  <div className="text-sm text-stone-400">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;