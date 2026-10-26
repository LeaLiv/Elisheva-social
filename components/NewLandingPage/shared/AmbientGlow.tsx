import React from 'react';

// Fixed, blurred color blobs behind the whole page.
const AmbientGlow: React.FC = () => (
  <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0">
    <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#a9781f]/10 blur-[120px]" />
    <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#79bddc9e] blur-[140px]" />
  </div>
);

export default AmbientGlow;
