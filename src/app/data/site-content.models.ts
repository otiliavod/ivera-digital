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
