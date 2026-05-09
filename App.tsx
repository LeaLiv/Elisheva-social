import React, { useEffect } from 'react';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import About from './components/About';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BusinessPage from './components/BusinessLanding/BusinessPage'; // Import the new page
import HighlightsPage from './components/HighlightsPage'; // Import the highlights page
import { homeContent } from './content'; // We only need homeContent for the main route now
import NotFound from './components/NotFound';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

interface LandingPageProps {
  content: any;
}

// Keep the original LandingPage wrapper for the Home route
const LandingPage: React.FC<LandingPageProps> = ({ content }) => {
  return (
    <>
      <Hero content={content.hero} />
      <PainPoints content={content.painPoints} />
      <About content={content.about} />
      <Process content={content.process} />
      <Gallery content={content.gallery} />
      <Contact content={content.contact} />
    </>
  );
};

// Layout wrapper component
const LayoutWrapper: React.FC = () => {
  const { pathname } = useLocation();
  const isHighlightsPage = pathname === '/videos-to-my-love';

  return (
    <>
      {!isHighlightsPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage content={homeContent} />} />
          {/* Updated Route to use the new dedicated component */}
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/videos-to-my-love" element={<HighlightsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isHighlightsPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen flex flex-col relative font-sans">
      <BrowserRouter>
        <ScrollToTop />
        <LayoutWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;