import React from 'react';
import { landingCopy } from '../../../../data/landing';

const { quote } = landingCopy.connection;

const ConnectionQuote: React.FC = () => (
  <div className="mt-10 border-r-2 border-[#a9781f] pr-5 text-lg leading-relaxed md:text-xl">
    <p className="font-bold">{quote.strongFirst}</p>
    <p>{quote.second}</p>
    <p className="mt-4 font-bold">{quote.strongThird}</p>
    <p>{quote.fourth}</p>
  </div>
);

export default ConnectionQuote;
