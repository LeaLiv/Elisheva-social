import React from 'react';

interface SectionNumberProps {
  n: string;
  label: string;
}

const ACCENT = '#79bddc9e';

const SectionNumber: React.FC<SectionNumberProps> = ({ n, label }) => (
  <div className="flex items-center gap-4 mb-10">
    <span className="font-display text-sm tracking-[0.4em]" style={{ color: ACCENT }}>{n}</span>
    <span className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: ACCENT }} />
    <span className="text-[11px] tracking-[0.3em] text-[#1c1a17]/50 uppercase">{label}</span>
  </div>
);

export default SectionNumber;
