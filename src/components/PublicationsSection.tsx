import { PublicationItem } from "../types";

interface PublicationsSectionProps {
  publications: PublicationItem[];
}

export function PublicationsSection({ publications }: PublicationsSectionProps) {
  return (
    <section id="research" className="section-card">
      <div className="section-head">
        <h2>Research Papers</h2>
        <p>Publications and DOI references.</p>
      </div>

      {publications.length === 0 ? (
        <p className="empty-state">
          Awaiting your publication records, venues, and DOI identifiers.
        </p>
      ) : (
        <div className="stack-list">
          {publications.map((paper) => (
            <article key={`${paper.title}-${paper.year}`} className="stack-card">
              <h3>{paper.title}</h3>
              <p className="strong">{paper.publicationVenue}</p>
              <p className="muted">{paper.year}</p>
              {paper.doi ? <p>DOI: {paper.doi}</p> : null}
              {paper.link ? (
                <a href={paper.link} target="_blank" rel="noreferrer" className="text-link">
                  View publication
                </a>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
