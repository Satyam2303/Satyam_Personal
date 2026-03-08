import { Link, useLocation } from "react-router-dom";

const homeLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  const location = useLocation();
  const onBeliefsPage = location.pathname === "/beliefs";

  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link to="/" className="brand">
          Portfolio
        </Link>

        {onBeliefsPage ? (
          <nav className="nav-links">
            <Link to="/" className="btn btn-ghost">
              Back to Main
            </Link>
          </nav>
        ) : (
          <nav className="nav-links">
            {homeLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-link">
                {link.label}
              </a>
            ))}
            <Link to="/beliefs" className="btn btn-solid">
              Philosophy
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
