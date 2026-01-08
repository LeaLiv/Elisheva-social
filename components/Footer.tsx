import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-500 py-8 border-t border-stone-800">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-2">© {new Date().getFullYear()} Elisheva Lev - Interior Design Social Media.</p>
        <p className="text-sm">עיצוב, תוכן, ואסטרטגיה למעצבי פנים.</p>
      </div>
    </footer>
  );
};

export default Footer;