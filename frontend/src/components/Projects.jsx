import { useState } from 'react';
import { useProjects } from '../hooks/useProjects.js';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Projects() {
  const { projects } = useProjects();
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" title="Projects">
          Full-stack applications built with React.js, Node.js, Express.js, and MongoDB.
        </SectionHeading>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && <ProjectModal key={selected.id} project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
