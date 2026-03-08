import { FormEvent, useMemo, useState } from "react";
import { ContactContent } from "../types";

interface ContactSectionProps {
  contact: ContactContent;
}

export function ContactSection({ contact }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = useMemo(() => Boolean(contact.email), [contact.email]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!contact.email) {
      return;
    }

    const subject = `Portfolio contact from ${name || "a visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section-card">
      <div className="section-head">
        <h2>Contact</h2>
        <p>Direct links and a recruiter-friendly contact form.</p>
      </div>

      <div className="contact-grid">
        <div className="stack-card">
          <h3>Direct</h3>
          <ul className="contact-list">
            <li>
              Email:{" "}
              {contact.email ? (
                <a href={`mailto:${contact.email}`} className="text-link">
                  {contact.email}
                </a>
              ) : (
                <span className="muted">Add your email</span>
              )}
            </li>
            <li>
              Phone:{" "}
              {contact.phone ? (
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="text-link">
                  {contact.phone}
                </a>
              ) : (
                <span className="muted">Add your phone number</span>
              )}
            </li>
            <li>
              GitHub:{" "}
              {contact.github ? (
                <a href={contact.github} target="_blank" rel="noreferrer" className="text-link">
                  Profile
                </a>
              ) : (
                <span className="muted">Add your GitHub link</span>
              )}
            </li>
            <li>
              LinkedIn:{" "}
              {contact.linkedin ? (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  Profile
                </a>
              ) : (
                <span className="muted">Add your LinkedIn link</span>
              )}
            </li>
            <li>
              Website:{" "}
              {contact.website ? (
                <a href={contact.website} target="_blank" rel="noreferrer" className="text-link">
                  Visit
                </a>
              ) : (
                <span className="muted">Optional personal site</span>
              )}
            </li>
          </ul>
        </div>

        <form className="stack-card contact-form" onSubmit={handleSubmit}>
          <h3>Message</h3>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell me about your role or project."
            />
          </label>
          <button type="submit" className="btn btn-solid" disabled={!canSubmit}>
            Send
          </button>
          {!canSubmit ? (
            <p className="muted small-text">Set your contact email to enable this form.</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
