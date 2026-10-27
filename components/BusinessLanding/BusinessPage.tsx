import React from 'react';
import Hero from '../Hero';
import About from '../About';
import Contact from '../Contact';
import Testimonials from './sections/Testimonials';
import PainPoints from '../PainPoints';
import Process from '../Process';
import Gallery from '../Gallery';
import { businessContent } from '../../data/businessContent';

const BusinessPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero content={businessContent.hero} />
      <PainPoints content={businessContent.painPoints} />
      <About content={businessContent.about} />
      <Process content={businessContent.process} />
      <Gallery content={businessContent.gallery} />
      <Testimonials />
      <Contact content={businessContent.contact} />
    </div>
  );
};

export default BusinessPage;
