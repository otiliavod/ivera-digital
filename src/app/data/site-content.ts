import { HeroContent, NavItem } from './site-content.models';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '' },
  { label: 'Projects', path: 'projects' },
  { label: 'Team', path: 'team' },
  { label: 'Contact', path: 'contact' },
];

export const HERO_CONTENT: HeroContent = {
  eyebrow: 'Premium Web Development',
  title: 'We Build',
  titleAccent: 'Digital Experiences',
  subtitle:
    'Transform your vision into reality with cutting-edge web solutions. Ivera Digital delivers excellence in every pixel.',

  primaryCtaLabel: 'Start Your Project',
  primaryCtaTarget: 'contact',

  secondaryCtaLabel: 'View Our Work',
  secondaryCtaTarget: 'projects',
};
