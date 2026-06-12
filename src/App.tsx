import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Intro } from './components/Intro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { Resume } from './components/Resume';
import { Certificates } from './components/Certificates';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Force dark theme on mount
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!introComplete && (
          <Intro key="preloader" onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      {introComplete && (
        <div className="min-h-screen bg-[#0C0C0C] text-white overflow-x-hidden">
          <Navbar />
          <Hero />
          <Marquee />
          <About />
          <Services />
          <Resume />
          <Certificates />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
