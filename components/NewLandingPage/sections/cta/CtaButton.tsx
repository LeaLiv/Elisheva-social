import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { landingCopy } from '../../../../data/landing';
import { LANDING_WHATSAPP_URL } from '../../../../data/contact';

const CtaButton: React.FC = () => (
  <a
    href={LANDING_WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 border border-[#a9781f] text-[#a9781f] hover:bg-[#a9781f] hover:text-white transition-colors duration-300 px-10 py-4 rounded-full font-bold text-lg group"
  >
    {landingCopy.cta.button}
    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
  </a>
);

export default CtaButton;
