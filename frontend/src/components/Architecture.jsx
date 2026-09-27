import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const LAYERS = [
  {
    title: 'React.js',
    role: 'Frontend',
    icon: FaReact,
    text: 'Renders the interface, validates input, and calls the API.',
  },
  {
    title: 'REST API',
    role: 'Express.js',
    icon: SiExpress,
    text: 'Routes each request, applies middleware, and shapes the response.',
  },
  {
    title: 'Node.js',
    role: 'Backend',
    icon: FaNodeJs,
    text: 'Runs the business logic and talks to the database.',
  },
  {
    title: 'MongoDB',
    role: 'Database',
    icon: SiMongodb,
    text: 'Stores the data as documents, modeled per application.',
  },
];

const REQUEST_STEPS = [
  'A visitor submits the contact form in React.',
  'The form checks the fields, then sends POST /api/contact.',
  'Express validates the body and passes it to the controller.',
  'The controller saves a ContactMessage document in MongoDB.',
  'The API replies with JSON and the form shows a success message.',
];

export default function Architecture() {
  return (
    <section id="architecture" className="section" aria-labelledby="architecture-title">
      <div className="container">
        <SectionHeading id="architecture-title" title="How I build full-stack applications">
          Every project follows the same path: a request travels from the browser to the database, and the response
          travels back.
        </SectionHeading>

        <ol className="flow" aria-label="Full-stack request flow">
          {LAYERS.map(({ title, role, icon: Icon, text }, index) => (
            <Reveal as="li" key={title} delay={index * 110} className="flow-item">
              <div className="flow-node">
                <span className="flow-icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p className="flow-role">{role}</p>
                <p className="flow-text">{text}</p>
              </div>
              {index < LAYERS.length - 1 && (
                <span className="flow-link" aria-hidden="true">
                  <span className="flow-dot flow-dot-request" />
                  <span className="flow-dot flow-dot-response" />
                </span>
              )}
            </Reveal>
          ))}
        </ol>

        <Reveal className="request-walkthrough">
          <h3>Example: this site&apos;s contact form</h3>
          <ol>
            {REQUEST_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
