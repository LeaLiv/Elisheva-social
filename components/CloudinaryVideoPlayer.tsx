import React from 'react';

interface CloudinaryVideoPlayerProps {
  videoUrl: string; 
  posterUrl?: string; 
}

const CloudinaryVideoPlayer: React.FC<CloudinaryVideoPlayerProps> = ({
  videoUrl,
  posterUrl,
}) => {
  return (
    <div className="w-full ">

      <div className="relative overflow-hidden bg-black shadow-2xl aspect-[9/16]">
        <video
          src={videoUrl} 
          poster={posterUrl} 
          controls
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-auto"
        />
      </div>
    </div>
  );
};

export default CloudinaryVideoPlayer;