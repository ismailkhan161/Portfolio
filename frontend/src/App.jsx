import { useEffect, useState } from 'react';
import { useTheme } from './hooks/useTheme.js';
import { prefersReducedMotion } from './utils/motion.js';
import About from './components/About.jsx';
import Architecture from './components/Architecture.jsx';
import Background from './components/Background.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Journey from './components/Journey.jsx';
import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [ready, setReady] = useState(false);
  const [loaderMounted, setLoaderMounted] = useState(() => !prefersReducedMotion());

  // Page-load sequence: brief loader, then the hero animates in.
  useEffect(() => {
    if (prefersReducedMotion()) {
      setReady(true);
      return undefined;
    }
    const readyTimer = window.setTimeout(() => setReady(true), 650);
    const removeTimer = window.setTimeout(() => setLoaderMounted(false), 1150);
    return () => {
      window.clearTimeout(readyTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className={`app ${ready ? 'is-ready' : ''}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {loaderMounted && <Loader leaving={ready} />}
      <Background />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Architecture />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
