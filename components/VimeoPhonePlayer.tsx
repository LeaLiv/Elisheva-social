import React from 'react';
// ייבוא בטוח שעובד תמיד ב-Vite
import ReactPlayer from 'react-player';

interface VimeoPhonePlayerProps {
  url: string;
  title?: string;
}

const VimeoPhonePlayer: React.FC<VimeoPhonePlayerProps> = ({
  url,
  title = 'פרויקט הדגמה - וידאו',
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h3 className="text-center text-2xl md:text-3xl font-semibold text-white mb-6">
        {title}
      </h3>

      <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl shadow-stone-950/40" style={{ paddingTop: '56.25%' }}>
        {/* @ts-ignore - known type definition bug in react-player */}
        <ReactPlayer
          url={url}
          className="absolute top-0 left-0"
          controls={true}
          light={false}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </div>
  );
};

export default VimeoPhonePlayer;