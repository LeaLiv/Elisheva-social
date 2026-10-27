import React, { useState } from 'react';
import ReelsHeader from './ReelsHeader';
import LazyReel from './LazyReel';
import ShowMoreButton from './ShowMoreButton';
import { INITIAL_REELS, instagramReels } from '../../../../data/landing';

const ReelsSection: React.FC = () => {
  const [showAllReels, setShowAllReels] = useState(false);

  return (
    <section id="reels" className="border-b border-black/10 bg-[#f4f0eb] px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <ReelsHeader />
        <div dir="rtl" className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {instagramReels.slice(0, showAllReels ? undefined : INITIAL_REELS).map((reel) => (
            <LazyReel key={reel.id} {...reel} />
          ))}
        </div>
        {!showAllReels && instagramReels.length > INITIAL_REELS && (
          <ShowMoreButton onClick={() => setShowAllReels(true)} />
        )}
      </div>
    </section>
  );
};

export default ReelsSection;
