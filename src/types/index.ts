export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    verified: boolean;
    icon?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  extendedDescription?: string;
  technologies: string[];
  status: 'In Development' | 'Completed' | 'Planned';
  featured: boolean;
  githubUrl: string;
  githubUrlPlaceholder: boolean;
  liveUrl?: string;
  liveUrlPlaceholder?: boolean;
  highlights: string[];
  category: 'Full-Stack' | 'AI / ML' | 'System';
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  status: string;
  period: string;
  highlights: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  isPlaceholder: boolean;
  displayHandle: string;
}

