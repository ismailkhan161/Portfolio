import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import ActionLink from './ActionLink.jsx';
import ProjectCover from './ProjectCover.jsx';
import Reveal from './Reveal.jsx';

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <Reveal as="article" delay={index * 90} className="project-card">
      {/* Mouse-only shortcut; keyboard and screen-reader users use the "View details" button. */}
      <button
        type="button"
        className="project-cover"
        onClick={() => onOpen(project)}
        tabIndex={-1}
        aria-hidden="true"
      >
        <ProjectCover project={project} />
      </button>

      <div className="project-body">
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>

        <ul className="tag-row" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <ul className="feature-list" aria-label="Key features">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="project-actions">
          <button type="button" className="btn btn-primary" onClick={() => onOpen(project)}>
            <FiArrowUpRight aria-hidden="true" />
            <span>
              View details<span className="visually-hidden"> of {project.name}</span>
            </span>
          </button>
          <ActionLink
            href={project.liveUrl}
            variant="secondary"
            icon={FiExternalLink}
            external
            hint="Not set yet. Replace ADD_LIVE_DEMO_URL in the project data"
          >
            Live Demo
          </ActionLink>
          <ActionLink
            href={project.githubUrl}
            variant="ghost"
            icon={FaGithub}
            external
            hint="Not set yet. Replace ADD_GITHUB_URL in the project data"
          >
            GitHub
          </ActionLink>
        </div>
      </div>
    </Reveal>
  );
}
