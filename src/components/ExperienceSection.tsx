import { ExperienceItem } from "../types";

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-card">
      <div className="section-head">
        <h2>Experience</h2>
        <p>Reverse-chronological professional history.</p>
      </div>

      {experience.length === 0 ? (
        <p className="empty-state">
          Awaiting your real experience entries for this section.
        </p>
      ) : (
        <div className="timeline">
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`} className="timeline-item">
              <div className="timeline-meta">
                <p className="muted">{item.period}</p>
                {item.location ? <p className="muted">{item.location}</p> : null}
              </div>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <p className="strong">{item.company}</p>
                <ul className="list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
