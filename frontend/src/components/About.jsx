import { FiDatabase, FiLayers, FiLayout, FiServer } from 'react-icons/fi';
import { SITE } from '../config/site.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const CAPABILITIES = [
  {
    title: 'Full Stack Development',
    icon: FiLayers,
    text: 'Connecting a React interface, an Express API, and a MongoDB database into one working product.',
    tags: ['React.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Frontend Development',
    icon: FiLayout,
    text: 'Responsive interfaces built with semantic HTML5, CSS3, and reusable React components.',
    tags: ['React.js', 'JavaScript', 'CSS3'],
  },
  {
    title: 'Backend Development',
    icon: FiServer,
    text: 'REST APIs with Node.js and Express.js, including validation and error handling.',
    tags: ['Node.js', 'Express.js', 'REST'],
  },
  {
    title: 'Database Development',
    icon: FiDatabase,
    text: 'MongoDB data models for records like patients, appointments, products, and messages.',
    tags: ['MongoDB'],
  },
];

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-copy">
          <SectionHeading id="about-title" title="About me" />
          <Reveal>
            {SITE.aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="prose">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>

        <ul className="capability-list">
          {CAPABILITIES.map(({ title, icon: Icon, text, tags }, index) => (
            <Reveal as="li" key={title} delay={index * 70} className="capability">
              <span className="capability-icon">
                <Icon aria-hidden="true" />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul className="tag-row" aria-label={`${title} technologies`}>
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
