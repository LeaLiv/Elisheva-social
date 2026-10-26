import React from 'react';
import Reveal from '../../shared/Reveal';
import ProofHeader from './ProofHeader';
import ProfileMarquee from './ProfileMarquee';
import ProofSteps from './ProofSteps';
import ResultsCarousel from './ResultsCarousel';
import { videoResults } from '../../../../data/landing';

// Shared by ProfileMarquee and ResultsCarousel.
const MARQUEE_KEYFRAMES = '@keyframes results-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }';

const ProofSection: React.FC = () => (
  <section id="gallery" className="mt-20 border-y border-black/10 py-12 md:mt-24 md:py-16" aria-labelledby="proof-title">
    <style>{MARQUEE_KEYFRAMES}</style>
    <Reveal>
      <ProofHeader />
      <ProfileMarquee />
      <ProofSteps />
      <div className="mt-4">
        <ResultsCarousel items={videoResults} />
      </div>
    </Reveal>
  </section>
);

export default ProofSection;
