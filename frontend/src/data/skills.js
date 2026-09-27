import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostman } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

/**
 * To add a technology, append { name, icon } to a group's `skills`.
 * To add a category, add a new group object (`size` controls its width on desktop).
 * Icons come from react-icons: https://react-icons.github.io/react-icons
 */
export const SKILL_GROUPS = [
  {
    id: 'frontend',
    title: 'Frontend',
    blurb: 'Interfaces that adapt to every screen size.',
    size: 'wide',
    skills: [
      { name: 'React.js', icon: FaReact },
      { name: 'JavaScript', icon: FaJs },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    blurb: 'Servers and APIs that the frontend can rely on.',
    size: 'narrow',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: TbApi },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    blurb: 'Data models that fit the application.',
    size: 'narrow',
    skills: [{ name: 'MongoDB', icon: SiMongodb }],
  },
  {
    id: 'tools',
    title: 'Tools',
    blurb: 'The everyday workflow.',
    size: 'wide',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'VS Code', icon: VscVscode },
    ],
  },
];
