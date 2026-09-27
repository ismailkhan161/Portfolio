import { useCallback, useEffect, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiImage, FiX } from 'react-icons/fi';
import ActionLink from './ActionLink.jsx';
import ProjectCover from './ProjectCover.jsx';

const CLOSE_ANIMATION_MS = 180;

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const [closing, setClosing] = useState(false);
  const titleId = `project-title-${project.id}`;

  // Play the exit animation, then close the native dialog (which also restores focus).
  const requestClose = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      const dialog = dialogRef.current;
      if (dialog && dialog.open && typeof dialog.close === 'function') dialog.close();
      onClose();
    }, CLOSE_ANIMATION_MS);
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');

    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, []);

  const handleCancel = (event) => {
    event.preventDefault(); // Escape key: use our animated close instead
    requestClose();
  };

  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) requestClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className={`project-modal ${closing ? 'is-closing' : ''}`}
      aria-labelledby={titleId}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
    >
      <button type="button" className="modal-close" onClick={requestClose} aria-label="Close project details">
        <FiX aria-hidden="true" />
      </button>

      <div className="modal-panel">
        <div className="modal-hero">
          <ProjectCover project={project} />
        </div>

        <div className="modal-content">
          <h3 id={titleId}>{project.name}</h3>

          <div className="modal-columns">
            <div>
              <h4>Project overview</h4>
              <p>{project.overview}</p>

              <h4>Problem</h4>
              <p>{project.problem}</p>

              <h4>Solution</h4>
              <p>{project.solution}</p>
            </div>

            <div>
              <h4>Features</h4>
              <ul className="check-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <h4>Technologies</h4>
              <ul className="tag-row">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <h4>Architecture</h4>
              <ol className="mini-architecture">
                {project.architecture.map((item) => (
                  <li key={item.layer}>
                    <strong>{item.layer}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <h4>Screenshots</h4>
          {project.screenshots.length > 0 ? (
            <ul className="screenshot-grid">
              {project.screenshots.map((shot) => (
                <li key={shot.src}>
                  <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
                </li>
              ))}
            </ul>
          ) : (
            <p className="screenshot-empty">
              <FiImage aria-hidden="true" />
              <span>
                No screenshots added yet. Add image paths to <code>screenshots</code> in the project data.
              </span>
            </p>
          )}

          <div className="modal-actions">
            <ActionLink
              href={project.liveUrl}
              variant="primary"
              icon={FiExternalLink}
              external
              hint="Not set yet. Replace ADD_LIVE_DEMO_URL in the project data"
            >
              Live Demo
            </ActionLink>
            <ActionLink
              href={project.githubUrl}
              variant="secondary"
              icon={FaGithub}
              external
              hint="Not set yet. Replace ADD_GITHUB_URL in the project data"
            >
              GitHub
            </ActionLink>
          </div>
        </div>
      </div>
    </dialog>
  );
}
