export interface Experience {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  technologies: string[];
  roles?: string[];
}

export interface Project {
  title: string;
  period?: string;
  context?: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  year?: string;
  category?: string;
  accent?: 'pink' | 'lime' | 'sky' | 'amber' | 'violet' | 'lemon';
  award?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'email';
}

export interface NavItem {
  label: string;
  href: string;
}
