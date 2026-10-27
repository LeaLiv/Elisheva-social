import React from 'react';
import type { Testimonial } from '../../../../types/landing';

interface TestimonialCardProps {
  testimonial: Testimonial;
  long?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, long }) => (
  <figure className={`group relative flex ${long ? 'h-full' : ''} flex-col overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-3 text-right shadow-[0_8px_24px_rgba(28,26,23,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(28,26,23,0.13)] md:p-4`}>
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-[#a9781f]/70 via-[#9bc3de]/70 to-transparent" />
    <span aria-hidden="true" className="mb-1 font-display text-5xl leading-none text-[#a9781f]/60">“</span>
    <blockquote
      className={`whitespace-pre-line font-light text-[#1c1a17]/85 ${
        long ? 'text-sm leading-relaxed md:text-base' : 'text-sm leading-relaxed'
      }`}
    >
      {testimonial.quote}
    </blockquote>
    <figcaption className="mt-4 flex items-center gap-2 border-t border-[#1c1a17]/10 pt-3 text-sm font-bold text-[#1c1a17]">
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#a9781f]" />
      {testimonial.name}
    </figcaption>
  </figure>
);

export default TestimonialCard;
