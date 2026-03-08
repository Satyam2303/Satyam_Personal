export interface HeroContent {
  name: string;
  title: string;
  impactStatement: string;
  location?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  name: string;
  period?: string;
  summary: string;
  highlights?: string[];
  tags: string[];
  link?: string;
  repository?: string;
}

export interface EducationItem {
  institution: string;
  credential: string;
  period: string;
  notes?: string;
}

export interface PublicationItem {
  title: string;
  publicationVenue: string;
  year: string;
  doi?: string;
  link?: string;
}

export interface ContactContent {
  email?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

export interface BeliefsContent {
  headline: string;
  intro: string;
  principles: string[];
}

export interface SiteContent {
  hero: HeroContent;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  publications: PublicationItem[];
  contact: ContactContent;
  beliefs: BeliefsContent;
}
