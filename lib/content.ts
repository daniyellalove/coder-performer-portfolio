import { Project, Credit } from './types';

export const personalInfo = {
  name: '[DANIYELLA HARMON]',
  initials: 'DH',
  location: 'Austin / Houston, TX',
  email: '[hdaniyella@gmail.com]',
  devTitle: 'Front-End Developer | I build what you see.',
  performerTitle: 'Actor & Model | I become what you remember.',
  devSubtitle: 'Building clean, fast products people actually want to use.',
  performerSubtitle: 'Actor and model fluent in commercial, film, and print.',
  devBio: `I'm a front-end developer based in Austin, TX, crafting fast, accessible, and beautiful web experiences. My stack centers on React, TypeScript, and Next.js — with a deep appreciation for the details that make UIs feel right. I'm currently open to new projects and full-time opportunities.`,
  performerBio: `Based in Austin / Houston, TX, I'm an actor and model working across commercial, film, print, and digital media. I bring a grounded, versatile presence to every project — equally comfortable in a 30-second spot or a character-driven film.`,
  /*unifiedStory: `What links both worlds? Precision, presence, and storytelling. Whether I'm writing a component or inhabiting a character, the goal is the same: make it feel real.`,*/
  stack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Git'],
  stats: {
    height: "5'5\"",
    eyes: 'Brown',
    hair: 'Black',
    representation: 'Independent',
  },
  social: {
    github: 'https://github.com/daniyellalove',
    linkedin: 'https://linkedin.com/in/daniyella-harmon-work-with-me/',
    instagram: 'https://instagram.com/daniyella.harmon',
    imdb: 'https://imdb.com',
  },
};

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'HarmoNext',
    description: 'A component library built with React and TypeScript, shipped as an npm package with Storybook documentation.',
    stack: ['React', 'TypeScript', 'Storybook', 'Rollup'],
    tags: ['Open Source', 'UI/UX', 'Library'],
    liveUrl: '#',
    githubUrl: '#',
    year: 2024,
  },
  {
    id: 'p2',
    title: 'E-Commerce Marketplace',
    description: 'Full-stack admin dashboard with real-time analytics, inventory management, and role-based access control.',
    stack: ['Next.js', 'Tailwind', 'Prisma', 'PostgreSQL'],
    tags: ['Full Stack', 'SaaS', 'Dashboard'],
    liveUrl: '#',
    githubUrl: '#',
    year: 2024,
  },
  {
    id: 'p3',
    title: 'Anime Tracker',
    description: 'An open-source portfolio starter with Framer Motion animations, dark mode, and CMS integration.',
    stack: ['Next.js', 'Framer Motion', 'Contentful'],
    tags: ['Template', 'Animation', 'CMS'],
    liveUrl: '#',
    githubUrl: '#',
    year: 2023,
  },
];

export const credits: Credit[] = [
  {
    id: 'c1',
    title: 'National Auto Brand',
    role: 'Lead',
    type: 'commercial',
    client: 'Automotive Co.',
    director: 'Director Name',
    description: 'Hero spot for a national automotive campaign, aired across broadcast and digital platforms.',
    tags: ['Commercial', 'National', 'Broadcast'],
    year: 2024,
  },
  {
    id: 'c2',
    title: 'Shoreline',
    role: 'Marcus',
    type: 'film',
    director: 'Director Name',
    description: 'Feature-length indie drama. Marcus is a stoic fisherman navigating grief and renewal on the Texas coast.',
    tags: ['Film', 'Drama', 'Lead'],
    year: 2023,
  },
  {
    id: 'c3',
    title: 'Spring Collection',
    role: 'Model',
    type: 'print',
    client: 'Fashion Brand',
    description: 'Editorial print campaign for a regional fashion brand\'s spring/summer lookbook.',
    tags: ['Print', 'Editorial', 'Fashion'],
    year: 2024,
  },
];
