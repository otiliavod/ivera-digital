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
