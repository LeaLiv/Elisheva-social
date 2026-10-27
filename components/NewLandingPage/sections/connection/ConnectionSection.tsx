import React from 'react';
import ConnectionBackground from './ConnectionBackground';
import ConnectionContent from './ConnectionContent';

const ConnectionSection: React.FC = () => (
  <section
    id="connection"
    className="relative isolate min-h-[720px] overflow-hidden border-b border-black/10"
  >
    <ConnectionBackground />
    <ConnectionContent />
  </section>
);

export default ConnectionSection;
