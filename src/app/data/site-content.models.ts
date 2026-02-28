export type RoutePath = '' | 'projects' | 'team' | 'contact';

export interface NavItem {
  label: string;
  path: RoutePath;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle: string;

  primaryCtaLabel: string;
  primaryCtaTarget: RoutePath;

  secondaryCtaLabel: string;
  secondaryCtaTarget: RoutePath;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  description: string;
  tech: string[];
  imagePath: string;
  liveUrl: string;
}

export interface ProjectsSectionContent {
  title: string;
  titleAccent?: string;
  subtitle: string;
  items: ProjectItem[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoPath: string;

  highlights: string[];
  skills: string[];

  githubUrl: string;
  linkedinUrl: string;
}

export interface TeamSectionContent {
  title: string;
  titleAccent?: string;
  subtitle: string;
  members: TeamMember[];
}

export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
}

export interface ContactSectionContent {
  title: string;
  titleAccent?: string;
  subtitle: string;

  infoTitle: string;
  infoItems: ContactInfoItem[];

  whyTitle: string;
  whyItems: string[];

  formTitle: string;
  formCtaLabel: string;
}

export interface FooterLink {
  label: string;
  href?: string;      // external
  route?: RoutePath;  // internal
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterContent {
  brandName: string;
  brandLogoPath: string;
  tagline: string;

  social: {
    githubUrl: string;
    linkedinUrl: string;
  };

  services: FooterColumn;
  company: FooterColumn;
  contact: {
    title: string;
    email: string;
    location: string;
  };

  copyright: string;
}
