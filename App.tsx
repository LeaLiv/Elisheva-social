import React, { useEffect } from 'react';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BusinessPage from './components/BusinessLanding/BusinessPage'; // Import the new page
import NewLandingPage from './components/NewLandingPage';
import NotFound from './components/NotFound';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout wrapper component
const LayoutWrapper: React.FC = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <>
      {/* {!isHomePage && <Header />} */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<NewLandingPage />} />
          {/* Updated Route to use the new dedicated component */}
          <Route path="/business" element={<BusinessPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
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