import React from 'react';
import Reveal from '../../shared/Reveal';
import TestimonialCard from './TestimonialCard';
import { displayedTestimonials, isLongTestimonial } from '../../../../data/landing';

const TestimonialsGrid: React.FC = () => (
  <div dir="rtl" className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {displayedTestimonials.map((testimonial, index) => {
      const isLong = isLongTestimonial(testimonial);
      return (
        <Reveal
          key={testimonial.name}
          delay={(index % 3) * 0.08}
          className={isLong ? 'lg:row-span-2 lg:self-stretch' : 'self-start'}
        >
          <TestimonialCard testimonial={testimonial} long={isLong} />
        </Reveal>
      );
    })}
  </div>
);

export default TestimonialsGrid;
