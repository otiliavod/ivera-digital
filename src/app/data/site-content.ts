import { HeroContent, NavItem, ProjectsSectionContent } from './site-content.models';

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

export const PROJECTS_SECTION: ProjectsSectionContent = {
  title: 'Our',
  titleAccent: 'Latest Work',
  subtitle:
    'Explore a selection of projects that highlight my approach to clean UI, reusable architecture, and modern Angular patterns.',
  items: [
    {
      id: 'online-store',
      category: 'E-Commerce',
      title: 'Online Store',
      description:
        'A modern Angular storefront focused on reusable UI patterns and scalable structure for future backend integration.',
      tech: ['Angular 21', 'PrimeNG', 'SCSS', 'Signals'],
      imagePath: 'assets/project-1.png',
      liveUrl: 'https://myonline-store-presentation.netlify.app/',
    },
    {
      id: 'city-hall',
      category: 'Public Sector',
      title: 'City Hall Website',
      description:
        'A content-driven presentation website with a lightweight Node/Express backend for a contact form.',
      tech: ['Angular 21', 'SCSS', 'PrimeIcons', 'Node.js'],
      imagePath: 'assets/project-2.png',
      liveUrl: 'https://cityhall-presentation.netlify.app/',
    },
  ],
};
