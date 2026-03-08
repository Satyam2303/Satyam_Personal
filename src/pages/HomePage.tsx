import { siteContent } from "../content";
import { ContactSection } from "../components/ContactSection";
import { EducationSection } from "../components/EducationSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { PublicationsSection } from "../components/PublicationsSection";

export function HomePage() {
  return (
    <div className="container page-content">
      <HeroSection hero={siteContent.hero} />
      <ExperienceSection experience={siteContent.experience} />
      <ProjectsSection projects={siteContent.projects} />
      <EducationSection education={siteContent.education} />
      <PublicationsSection publications={siteContent.publications} />
      <ContactSection contact={siteContent.contact} />
    </div>
  );
}
