import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { useInViewOnce } from '../../hooks/useInViewOnce';
import { landingCopy } from '../../../../data/landing';
import type { InstagramReelData } from '../../../../types/landing';

const LazyReel: React.FC<InstagramReelData> = ({ id, views }) => {
  const [ref, visible] = useInViewOnce<HTMLDivElement>('300px');

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl bg-white/80 shadow-[0_8px_24px_rgba(28,26,23,0.1)]">
      <div className="relative aspect-[9/16] max-h-[600px] w-full overflow-hidden">
        {visible && <InstagramEmbed url={`https://www.instagram.com/reel/${id}/`} width="100%" captioned={false} />}
      </div>
      {views && (
        <div dir="rtl" className="flex items-center justify-center border-t border-[#1c1a17]/10 px-4 py-3 text-sm font-bold text-[#1c1a17]">
          <span>👁 {views} {landingCopy.reels.viewsSuffix}</span>
        </div>
      )}
    </div>
  );
};

export default LazyReel;
