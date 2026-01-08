import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import About from './components/About';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <About />
        <Process />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;