import React from 'react';
import { motion } from 'framer-motion';
import { InstagramEmbed } from 'react-social-media-embed';

// הגדרת הטיפוסים (Types)
type MediaType = 'instagram' | 'video';

interface GalleryItem {
  type: MediaType;
  url: string;
  poster?: string;
}

interface GalleryProps {
  content: {
    title: string;
    description: React.ReactNode;
    items: GalleryItem[]; // 👈 הוספנו את זה כאן
  };
}

const Gallery: React.FC<GalleryProps> = ({ content }) => {
  // מחקנו את המערך הקבוע שהיה כאן (const reels = ...)
  // עכשיו משתמשים ישירות ב-content.items

  return (
    <section id="gallery" className="py-24 bg-stone-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{content.title}</h2>
          <div className="text-stone-400 max-w-3xl mx-auto text-lg">
            {content.description}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {content.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="break-inside-avoid relative rounded-xl overflow-hidden shadow-2xl" >
              <div className="relative w-full aspect-[9/16] max-h-[600px] overflow-hidden">

                {item.type === 'instagram' ? (
                  <InstagramEmbed
                    url={item.url}
                    width="100%"
                    captioned={false}
                  />
                ) : (
                  <video
                    controls
                    playsInline
                    poster={item.poster}
                    className="w-full h-auto object-cover rounded-xl aspect-[9/16]"
                    style={{ maxHeight: '600px', backgroundColor: '#000'}}
                  >
                    <source src={item.url} type="video/mp4" />
                    הדפדפן שלך לא תומך בתגית וידאו.
                  </video>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;