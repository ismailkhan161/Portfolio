import { JOURNEY_STEPS } from '../data/journey.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Journey() {
  return (
    <section id="journey" className="section" aria-labelledby="journey-title">
      <div className="container">
        <SectionHeading id="journey-title" title="Development journey">
          The path from the first web page to complete full-stack applications.
        </SectionHeading>

        <ol className="timeline">
          {JOURNEY_STEPS.map(({ title, icon: Icon, text }, index) => (
            <Reveal as="li" key={title} className="timeline-item" delay={60}>
              <span className="timeline-dot" aria-hidden="true">
                <Icon />
              </span>
              <div className="timeline-card">
                <span className="timeline-step">Step {index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
