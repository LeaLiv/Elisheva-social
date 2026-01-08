import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = [
    { url: "https://picsum.photos/400/600?random=10", size: "large" },
    { url: "https://picsum.photos/400/300?random=11", size: "small" },
    { url: "https://picsum.photos/400/400?random=12", size: "medium" },
    { url: "https://picsum.photos/400/500?random=13", size: "large" },
    { url: "https://picsum.photos/400/300?random=14", size: "small" },
    { url: "https://picsum.photos/400/400?random=15", size: "medium" },
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

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="break-inside-avoid relative group overflow-hidden rounded-xl"
            >
              <img 
                src={img.url} 
                alt="Gallery item" 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white border border-white px-6 py-2 rounded-full uppercase tracking-widest text-sm">View Project</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;