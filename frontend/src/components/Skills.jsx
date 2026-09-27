import { SKILL_GROUPS } from '../data/skills.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" title="Skills">
          The technologies I use to build complete web applications, from the interface to the database.
        </SectionHeading>

        <div className="skill-groups">
          {SKILL_GROUPS.map((group, groupIndex) => (
            <Reveal
              as="section"
              key={group.id}
              delay={groupIndex * 60}
              className={`skill-group skill-group-${group.size}`}
              aria-labelledby={`skills-${group.id}`}
            >
              <header>
                <h3 id={`skills-${group.id}`}>{group.title}</h3>
                <p>{group.blurb}</p>
              </header>
              <ul className="skill-grid">
                {group.skills.map(({ name, icon: Icon }) => (
                  <li key={name} className="skill-card">
                    <Icon className="skill-icon" aria-hidden="true" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
