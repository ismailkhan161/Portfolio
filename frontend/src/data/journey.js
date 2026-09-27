import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { FiLayers } from 'react-icons/fi';

/** Edit, reorder, or add steps here; the timeline renders whatever is listed. */
export const JOURNEY_STEPS = [
  { title: 'HTML + CSS', icon: FaHtml5, text: 'Semantic markup, layouts, and responsive styling.' },
  { title: 'JavaScript', icon: FaJs, text: 'Logic and interactivity, the language everything else builds on.' },
  { title: 'React.js', icon: FaReact, text: 'Component-based interfaces with reusable pieces and state.' },
  { title: 'Node.js', icon: FaNodeJs, text: 'JavaScript on the server for backends and tooling.' },
  { title: 'Express.js', icon: SiExpress, text: 'Routing, middleware, and REST APIs.' },
  { title: 'MongoDB', icon: SiMongodb, text: 'Data modeling and storage for real application data.' },
  {
    title: 'Full Stack Development',
    icon: FiLayers,
    text: 'Bringing every layer together into complete, deployable applications.',
  },
];
