import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ראשי', href: '#hero' },
    { name: 'הבעיה', href: '#pain-points' },
    { name: 'עליי', href: '#about' },
    { name: 'תהליך', href: '#process' },
    { name: 'תיק עבודות', href: '#gallery' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className={`text-2xl font-bold tracking-wider uppercase transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-stone-900'}`}>
          <a href="#" aria-label="Elisheva Lev Home" className="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-1">
            <span className="font-display">ELISHEVA</span> <span className="text-blue-400">LEV</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1 ${
                isScrolled ? 'text-stone-200' : 'text-stone-800'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#" 
            aria-label="Visit Instagram Profile"
            className={`hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1 ${isScrolled ? 'text-white' : 'text-stone-900'}`}
          >
            <Instagram size={20} aria-hidden="true" />
          </a>
          <a 
            href="mailto:elishevalev5@gmail.com" 
            aria-label="Send an Email"
            className={`hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1 ${isScrolled ? 'text-white' : 'text-stone-900'}`}
          >
            <Mail size={20} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${isScrolled ? 'text-white' : 'text-stone-900'}`}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-stone-900 z-50 flex flex-col items-center justify-center space-y-8"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Menu"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 left-6 text-stone-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-full p-2"
              aria-label="Close menu"
            >
              <X size={32} aria-hidden="true" />
            </button>

            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-4 py-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex gap-6 mt-8">
               <a href="#" aria-label="Instagram" className="text-stone-400 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-2"><Instagram size={28} aria-hidden="true" /></a>
               <a href="#" aria-label="Email" className="text-stone-400 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-2"><Mail size={28} aria-hidden="true" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;