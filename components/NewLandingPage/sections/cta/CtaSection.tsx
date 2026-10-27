import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';
import Reveal from '../../shared/Reveal';
import Lines from '../../shared/Lines';
import CtaButton from './CtaButton';
import { landingCopy } from '../../../../data/landing';
import { businessContact } from '../../../../data/contact';

const { cta } = landingCopy;

const CtaSection: React.FC = () => (
  <section id="contact" className="px-6 md:px-16 py-32 text-center">
    <div className="max-w-3xl mx-auto">
      <Reveal>
        <p className="text-2xl md:text-4xl font-display font-black leading-relaxed">
          <Lines lines={cta.headlineLines} />
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="text-lg md:text-xl text-[#1c1a17]/60 mt-8 mb-10">{cta.question}</p>
      </Reveal>
      <Reveal delay={0.25}>
        <CtaButton />
      </Reveal>
      <Reveal delay={0.35}>
        <div className="mt-14">
          <p className="mb-6 text-sm font-bold text-[#1c1a17]/50">אפשר גם ליצור קשר כאן</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
            <a
              href={businessContact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${businessContact.instagramHandle}`}
              className="inline-flex items-center gap-2 text-[#1c1a17]/70 transition-colors hover:text-[#a9781f]"
            >
              <Instagram size={19} aria-hidden="true" />
              <span>{businessContact.instagramHandle}</span>
            </a>
            <a
              href={`mailto:${businessContact.email}`}
              aria-label={businessContact.emailAriaLabel}
              className="inline-flex items-center gap-2 text-[#1c1a17]/70 transition-colors hover:text-[#a9781f]"
            >
              <Mail size={19} aria-hidden="true" />
              <span>{businessContact.email}</span>
            </a>
            <a
              href={businessContact.phoneHref}
              aria-label={businessContact.phoneAriaLabel}
              className="inline-flex items-center gap-2 text-[#1c1a17]/70 transition-colors hover:text-[#a9781f]"
            >
              <Phone size={19} aria-hidden="true" />
              <span>{businessContact.phoneLabel}</span>
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CtaSection;
