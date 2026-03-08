import { Link } from "react-router-dom";
import { siteContent } from "../content";

export function BeliefsPage() {
  const { beliefs } = siteContent;

  return (
    <div className="container page-content beliefs-layout">
      <section className="section-card">
        <div className="section-head">
          <h1>{beliefs.headline}</h1>
          <p>{beliefs.intro}</p>
        </div>

        {beliefs.principles.length === 0 ? (
          <p className="empty-state">
            Awaiting your engineering beliefs, clean-code principles, and core values.
          </p>
        ) : (
          <ul className="belief-list">
            {beliefs.principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        )}

        <div className="link-row">
          <Link to="/" className="btn btn-ghost">
            Return to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
