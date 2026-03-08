import { ProjectItem } from "../types";

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section-card">
      <div className="section-head">
        <h2>Projects</h2>
        <p>Technical portfolio with stack tags and links.</p>
      </div>

      {projects.length === 0 ? (
        <p className="empty-state">
          Awaiting your project data. I will render this as a technical grid.
        </p>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <h3>{project.name}</h3>
              {project.period ? <p className="muted">{project.period}</p> : null}
              <p>{project.summary}</p>
              {project.highlights && project.highlights.length > 0 ? (
                <ul className="list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="link-row">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-link">
                    Live
                  </a>
                ) : null}
                {project.repository ? (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    Repository
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
