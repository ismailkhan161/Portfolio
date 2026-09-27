import { FiDownload, FiMail } from 'react-icons/fi';
import { FiGrid } from 'react-icons/fi';
import { SITE } from '../config/site.js';
import ActionLink from './ActionLink.jsx';
import HeroVisual from './HeroVisual.jsx';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">
            <span className="hero-anim hero-greeting" style={{ '--anim-delay': '0ms' }}>
              Hi, I&apos;m {SITE.name}{' '}
              <span className="wave" role="img" aria-label="waving hand">
                👋
              </span>
            </span>
            <span className="hero-anim hero-role" style={{ '--anim-delay': '120ms' }}>
              {SITE.role}
            </span>
          </h1>

          <p className="hero-anim hero-lead" style={{ '--anim-delay': '240ms' }}>
            {SITE.tagline}
          </p>

          <div className="hero-anim hero-actions" style={{ '--anim-delay': '360ms' }}>
            <ActionLink href="#projects" variant="primary" icon={FiGrid}>
              View My Projects
            </ActionLink>
            <ActionLink href="#contact" variant="secondary" icon={FiMail}>
              Contact Me
            </ActionLink>
            <ActionLink
              href={SITE.links.cv}
              variant="ghost"
              icon={FiDownload}
              external
              hint="Not set yet. Add your CV link as cv in src/config/site.js"
            >
              Download CV
            </ActionLink>
          </div>
        </div>

        <div className="hero-anim hero-visual-wrap" style={{ '--anim-delay': '300ms' }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
