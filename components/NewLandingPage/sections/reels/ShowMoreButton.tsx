import React from 'react';
import { landingCopy } from '../../../../data/landing';

interface ShowMoreButtonProps {
  onClick: () => void;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ onClick }) => (
  <div className="mt-10 text-center">
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-[#a9781f] px-8 py-3 font-bold text-[#a9781f] transition-colors duration-300 hover:bg-[#a9781f] hover:text-white"
    >
      {landingCopy.reels.showMore}
    </button>
  </div>
);

export default ShowMoreButton;
