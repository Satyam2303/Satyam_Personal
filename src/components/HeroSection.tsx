import { HeroContent } from "../types";

interface HeroSectionProps {
  hero: HeroContent;
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section id="hero" className="hero-card">
      <p className="eyebrow">Software Engineering Portfolio</p>
      <h1>{hero.name}</h1>
      <p className="hero-title">{hero.title}</p>
      <p className="hero-statement">{hero.impactStatement}</p>
      {hero.location ? <p className="hero-location">{hero.location}</p> : null}
    </section>
  );
}
