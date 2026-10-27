import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AmbientGlow from './NewLandingPage/shared/AmbientGlow';
import { landingCopy } from '../data/landing';

const NotFound = () => (
  <div className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#faf7f2] px-6 py-24 text-[#1c1a17]" dir="rtl">
    <AmbientGlow />

    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 mx-auto w-full max-w-3xl text-center"
    >
      <p className="mb-6 font-display text-7xl font-black leading-none text-[#a9781f]/20 md:text-9xl" aria-hidden="true">
        404
      </p>
      <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#a9781f] md:text-base">
        העמוד הזה לא נמצא
      </p>
      <h1 className="font-display text-3xl font-black leading-tight md:text-5xl">
        נראה שהלינק הזה לקח אותך למקום שלא קיים.
      </h1>
      <Link
        to="/"
        className="group mt-10 inline-flex items-center gap-3 rounded-full border border-[#a9781f] px-8 py-4 text-lg font-bold text-[#a9781f] transition-colors duration-300 hover:bg-[#a9781f] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#a9781f] focus:ring-offset-2 focus:ring-offset-[#faf7f2]"
      >
        חזרה לעמוד הבית
        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
      </Link>
    </motion.main>
  </div>
);

export default NotFound;
