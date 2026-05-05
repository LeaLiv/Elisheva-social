import React from 'react';
import { motion } from 'framer-motion';
import { Camera, TrendingUp, User, CheckCircle, ArrowLeft, Check } from 'lucide-react';

interface FoundationItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  subtitle?: string;
  features?: string[];
}

type FeatureItem = string | { title: string; desc: string };

interface TrackItem {
  title: string;
  target: string;
  features: FeatureItem[]; 
  buttonText: string;
  isPrimary: boolean;
}

interface ProcessProps {
  content: {
    foundationsTitle: string;
    foundationsDesc: string;
    foundations: FoundationItem[];
    tracksTitle: string;
    tracksDesc: string;
    tracks: TrackItem[];
  };
}

const Process: React.FC<ProcessProps> = ({ content }) => {
  const recommendedTracks = content.tracks.filter(track => track.isPrimary);
  const normalTracks = content.tracks.filter(track => !track.isPrimary);

  const renderTrackCard = (track: TrackItem, idx: number) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="rounded-3xl p-8 relative flex flex-col h-full bg-white/90 backdrop-blur-sm text-stone-900 border-stone-200 border shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-4">{track.title}</h3>
      <p className="mb-8 min-h-[80px] text-stone-600">
        {track.target}
      </p>

      <div className="space-y-4 mb-8 flex-grow">
        {track.features.map((feature, fIdx) => (
          <div key={fIdx} className="flex gap-3 items-start">
            <div className="mt-1 flex-shrink-0 text-blue-500">
              <CheckCircle size={18} />
            </div>
            <div>
              {typeof feature === 'string' ? (
                <p className="text-sm leading-relaxed text-stone-600">
                  {feature}
                </p>
              ) : (
                <>
                  <h4 className="font-bold leading-tight text-stone-900">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-relaxed mt-1 text-stone-600">
                    {feature.desc}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className="w-full py-4 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 group bg-stone-100 hover:bg-stone-200 text-stone-900"
      >
        {track.buttonText}
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );

  return (
    <section id="process" aria-labelledby="process-title">
      
      {/* --- חלק 1: היסודות (Foundations) --- */}
      <div className="relative py-24 overflow-hidden">
        
        {/* תמונת רקע לחלק הראשון */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/process2.jpg" 
            alt="Background Texture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-50/70" /> 
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2
              id="process-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-black text-stone-900 mb-6"
            >
              {content.foundationsTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-stone-600"
            >
              {content.foundationsDesc}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.foundations.map((item, idx) => (
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
                  {item.subtitle && <span className="block text-base font-normal text-stone-500 mt-1">{item.subtitle}</span>}
                </h3>
                <p className="text-stone-600 leading-relaxed mt-4">
                  {item.desc}
                </p>
                {item.features && item.features.length > 0 && (
                  <ul className="mt-6 space-y-3 border-t border-stone-300/30 pt-4">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 text-stone-900">
                          {/* אייקון V קטן ועדין */}
                          <Check size={16} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium text-stone-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
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
      </div>

      <div id="services" className="relative py-24 overflow-hidden">
        
        <div className="absolute inset-0 z-0">
           <img
            src="/assets/process.jpg" 
            alt="Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/95 via-stone-50/80 to-stone-50/95" />
        </div>

        {/* תוכן חלק שני */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold mb-4">{content.tracksTitle}</h2>
             <p className="text-xl text-stone-500">{content.tracksDesc}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center">
            {/* First normal track - left */}
            {normalTracks.length > 0 && (
              <div className="w-full lg:flex-[1_1_25%] min-w-0">
                {renderTrackCard(normalTracks[0], 0)}
              </div>
            )}

            {/* Recommended box - middle with column display */}
            {recommendedTracks.length > 1 && (
              <div className="w-full lg:flex-[2_1_50%] min-w-0 rounded-[2rem] border-2 border-cyan-600 bg-gradient-to-br from-slate-700 to-slate-800 p-6 flex flex-col">
                <div className="mb-6 text-center">
                  <span className="inline-flex items-center justify-center rounded-full bg-cyan-500/20 text-cyan-100 px-4 py-2 text-sm font-semibold tracking-tight">
                    מומלצים במיוחד
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recommendedTracks.map((track, idx) => renderTrackCard(track, idx))}
                </div>
              </div>
            )}

            {/* Last normal track - right */}
            {normalTracks.length > 1 && (
              <div className="w-full lg:flex-[1_1_25%] min-w-0">
                {renderTrackCard(normalTracks[1], 1)}
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Process;