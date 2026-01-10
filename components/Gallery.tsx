import React from 'react';
import { motion } from 'framer-motion';
import { InstagramEmbed } from 'react-social-media-embed';

const Gallery: React.FC = () => {
  // כאן את שמה את הקישורים האמיתיים לרילס שלך באינסטגרם
  const reels = [
    "https://www.instagram.com/elisheva_lev_social/reel/DTVjdFwiLnd/", // הקישור ששלחת
    "https://www.instagram.com/elisheva_lev_social/p/DTH_fvCiM4F/", // דוגמה - תחליפי בקישורים שלך
    "https://www.instagram.com/elisheva_lev_social/reel/DS7UPVuCF90/", // דוגמה
    "https://www.instagram.com/elisheva_lev_social/reel/DTDg9SaiPBl/", // דוגמה
    "https://www.instagram.com/elisheva_lev_social/p/DTAdyNliOks/", // דוגמה
    "https://www.instagram.com/elisheva_lev_social/reel/DR7mpDciKbK/", // דוגמה
  ];

  return (
    <section id="gallery" className="py-24 bg-stone-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">תוצאות מהשטח</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            הנה טעימה קטנה ממה שאנחנו יוצרות יחד. ויז'ואל שמספר סיפור, מושך את העין ומביא לקוחות.
          </p>
        </div>

        {/* שימוש ב-Masonry Layout (טורים).
            שימי לב ל-gap-6 ו-space-y-6 שיוצרים את הרווחים בין הרילס
        */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reels.map((url, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }} // שיניתי ל-y כדי שזה יעלה מלמטה יפה
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="break-inside-avoid relative rounded-xl overflow-hidden shadow-2xl border border-stone-800 bg-stone-800"
            >
              {/* רכיב ההטמעה של אינסטגרם */}
              <div className="flex justify-center">
                <InstagramEmbed 
                  url={url} 
                  width="100%" 
                  captioned={false} // true אם את רוצה להציג את הטקסט של הפוסט
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;