import { EducationItem } from "../types";

interface EducationSectionProps {
  education: EducationItem[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="section-card">
      <div className="section-head">
        <h2>Education</h2>
        <p>Academic background and certifications.</p>
      </div>

      {education.length === 0 ? (
        <p className="empty-state">Awaiting your education and certification entries.</p>
      ) : (
        <div className="stack-list">
          {education.map((item) => (
            <article key={`${item.institution}-${item.period}`} className="stack-card">
              <h3>{item.credential}</h3>
              <p className="strong">{item.institution}</p>
              <p className="muted">{item.period}</p>
              {item.notes ? <p>{item.notes}</p> : null}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
