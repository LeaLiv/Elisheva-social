import React from 'react';
import { profilePictures } from '../../../../data/landing';

const ProfileMarquee: React.FC = () => (
  <div dir="ltr" className="mt-8 overflow-hidden">
    <div className="flex w-max hover:[animation-play-state:paused]" style={{ animation: 'results-marquee 40s linear infinite' }}>
      {[...profilePictures, ...profilePictures].map((n, i) => (
        <img
          key={`${n}-${i}`}
          src={`/assets/profilesPictures/${n}.png`}
          alt=""
          aria-hidden="true"
          className="mr-4 h-14 w-14 flex-shrink-0 rounded-full object-cover shadow-md sm:mr-6 sm:h-20 sm:w-20 md:mr-8 md:h-24 md:w-24"
          loading="lazy"
        />
      ))}
    </div>
  </div>
);

export default ProfileMarquee;
