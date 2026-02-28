import { HeroContent, NavItem, ProjectsSectionContent, TeamSectionContent, ContactSectionContent, FooterContent } from './site-content.models';

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

export const TEAM_SECTION: TeamSectionContent = {
  title: 'Meet',
  titleAccent: 'Your Team',
  subtitle:
    'A one-person team for now — focused on clean UI, scalable architecture, and modern Angular patterns.',
  members: [
    {
      id: 'otilia',
      name: 'Otilia Ivănoiu',
      role: 'Full Stack Developer (Angular • Java)',
      photoPath: 'assets/team-photo.jpg',

      highlights: [
        'Web development (frontend + backend)',
        'Strong focus on clean, reusable UI',
        'Teamwork, communication, attention to detail',
      ],
      skills: ['Angular', 'TypeScript', 'SCSS', 'Java', 'Spring Boot', 'PostgreSQL'],

      githubUrl: 'https://github.com/otiliavod',
      linkedinUrl: 'https://www.linkedin.com/in/otilia-ivanoiu-18b57a18b/',
    },
  ],
};

export const CONTACT_SECTION: ContactSectionContent = {
  title: "Let's Build",
  titleAccent: 'Together',
  subtitle: 'Ready to turn your idea into reality? Send a message and I’ll get back to you.',

  infoTitle: 'Get in Touch',
  infoItems: [
    {
      icon: 'pi pi-envelope',
      label: 'Email',
      value: 'iveradigital.co@gmail.com',
    },
    {
      icon: 'pi pi-map-marker',
      label: 'Location',
      value: 'Romania',
    },
  ],

  whyTitle: 'Why Choose Ivera?',
  whyItems: [
    'Modern Angular 21 + PrimeNG approach (standalone components, reusable UI)',
    'Clean, content-driven architecture (easy to extend, maintain, and hand over)',
    'Strong focus on UI polish, responsiveness, and performance',
  ],

  formTitle: 'Send a Message',
  formCtaLabel: 'Send Message',
};

export const FOOTER_CONTENT: FooterContent = {
  brandName: 'Ivera Digital',
  brandLogoPath: 'assets/brand/ivera_logo_2_asset.png',
  tagline: 'Creating exceptional web experiences for modern businesses.',

  social: {
    githubUrl: 'https://github.com/otiliavod',
    linkedinUrl: 'https://www.linkedin.com/in/otilia-ivanoiu-18b57a18b/',
  },

  services: {
    title: 'Services',
    links: [
      { label: 'Web Development' },
      { label: 'UI/UX Design' },
      { label: 'E-Commerce' },
      { label: 'Consulting' },
    ],
  },

  company: {
    title: 'Company',
    links: [
      { label: 'About Us', route: 'team' },
    ],
  },

  contact: {
    title: 'Contact',
    email: 'iveradigital.co@gmail.com',
    location: 'Romania',
  },

  copyright: `© ${new Date().getFullYear()} Ivera Digital. All rights reserved.`,
};
