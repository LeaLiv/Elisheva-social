import React from 'react';
import { motion } from 'framer-motion';
import { InstagramEmbed } from 'react-social-media-embed';

const Gallery: React.FC = () => {
  // כאן את שמה את הקישורים האמיתיים לרילס שלך באינסטגרם
  const reels = [
    "https://www.instagram.com/reel/DTdsBmFiLp7/?igsh=MWhraWY3OHoxNnZwOA==",
    "https://www.instagram.com/reel/DTNGwAcivLL/?igsh=aGI2ZGxocHpyd2U1",
    "https://www.instagram.com/reel/DTiH8QnCDSg/?igsh=MWJ0aHMyb3ZsdG9jZQ==",
    "https://www.instagram.com/p/DTaDp8ZiBDp/?igsh=bDZpajU2bnh6ZThz",
    "https://www.instagram.com/reel/DTnlLzJCB4F/?igsh=dzZqaDBsMHZ1aXFh",
    "https://www.instagram.com/reel/DTDg9SaiPBl/?igsh=MXFocDd3ejk2cXN4eQ==",
    // "https://www.instagram.com/elisheva_lev_social/reel/DS7UPVuCF90/", 
    // "https://www.instagram.com/elisheva_lev_social/p/DTH_fvCiM4F/",
    // "https://www.instagram.com/elisheva_lev_social/p/DTAdyNliOks/", 
    // "https://www.instagram.com/elisheva_lev_social/reel/DR7mpDciKbK/", 
  ];

  return (
    <section id="gallery" className="py-24 bg-stone-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">תוצאות מהשטח</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            הנה טעימה קטנה ממה שאנחנו יוצרים יחד. ויז'ואל שמספר סיפור, מושך את העין ומביא לקוחות.
          </p>
        </div>

        {/* שימוש ב-Masonry Layout (טורים).
            שימי לב ל-gap-6 ו-space-y-6 שיוצרים את הרווחים בין הרילס
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
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