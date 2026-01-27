import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Palette } from 'lucide-react';

const NotFound = () => {
  return (
    // 👇 השינוי כאן: הוספתי pt-32 כדי להרחיק את התוכן מהתפריט העליון במובייל
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-6 pt-32 md:pt-24 text-center" dir="rtl">
      
      {/* כותרת */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-6xl font-black text-stone-900 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-stone-700 mb-2">
          אופס! נראה שהגעתם למקום הלא נכון
        </h2>
        <p className="text-stone-500 text-lg">
          אבל אל דאגה, בואו נחזור למסלול. לאן תרצו להמשיך?
        </p>
      </motion.div>

      {/* כרטיסי הניווט */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        
        {/* כרטיס למעצבים - מפנה לדף הבית */}
        <Link to="/" className="group">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white border border-stone-200 p-10 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 h-full flex flex-col items-center justify-center relative overflow-hidden"
          >
            <div className="bg-stone-100 p-4 rounded-full mb-6 text-stone-800 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
              <Palette size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-bold text-stone-900 mb-2">למעצבים</h3>
            <p className="text-stone-500 mb-8">כלים, השראות ותהליכי עבודה</p>
            
            <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
              <span>מעבר לאתר</span>
              <ArrowLeft size={20} />
            </div>
          </motion.div>
        </Link>

        {/* כרטיס לעסקים - מפנה לדף העסקי */}
        <Link to="/business" className="group">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-stone-900 border border-stone-900 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center justify-center relative overflow-hidden"
          >
            <div className="bg-stone-800 p-4 rounded-full mb-6 text-white group-hover:bg-stone-700 transition-colors">
              <Briefcase size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">לעסקים</h3>
            <p className="text-stone-400 mb-8">פתרונות, אסטרטגיה וניהול סושיאל</p>
            
            <div className="flex items-center gap-2 text-blue-400 font-bold group-hover:gap-4 transition-all">
              <span>למידע נוסף</span>
              <ArrowLeft size={20} />
            </div>
          </motion.div>
        </Link>

      </div>
    </div>
  );
};

export default NotFound;