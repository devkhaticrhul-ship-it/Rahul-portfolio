import { NavItem, SkillCategory, Project, EducationItem, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'Rahul Kumar',
  initials: 'RK',
  title: 'Aspiring Software Engineer',
  headline: 'Building Digital Experiences Through Code.',
  heroDescription:
    "I'm a Computer Science Engineering student passionate about software development, emerging technologies, and solving real-world problems through technology.",
  about: {
    lead: "Hi, I'm Rahul — a second-year Computer Science Engineering student dedicated to mastering core engineering principles and modern web development.",
    paragraphs: [
      "My journey in computer science began with curiosity about how complex software systems operate under the hood. Starting with foundational programming in C, I developed a deep appreciation for algorithmic thinking, efficient memory utilization, and clean logical structures.",
      "As I progress in my engineering degree at Pacific School of Engineering, I'm channeling that foundation into full-stack software development and actively exploring modern architectural patterns. I am especially drawn to Artificial Intelligence and Machine Learning, excited by their potential to build smarter, data-driven applications that solve practical everyday problems.",
      "I prioritize continuous learning, intentional practice, and engineering craftsmanship over short-term shortcuts. Currently, I am focused on building meaningful open-source software, refining my problem-solving ability, and preparing for engineering opportunities where I can contribute and grow."
    ],
    principles: [
      {
        title: 'Engineering Fundamentals',
        description: 'Focusing on clean logic, algorithmic thinking, and understanding the core mechanics behind tools.'
      },
      {
        title: 'Continuous Growth',
        description: 'Consistently learning modern web technologies, scalable architectures, and emerging AI tools.'
      },
      {
        title: 'Pragmatic Building',
        description: 'Translating concepts into functional, user-centric software that addresses real-world needs.'
      }
    ]
  },
  education: {
    degree: 'Bachelor of Engineering (BE)',
    field: 'Computer Science and Engineering',
    institution: 'Pacific School of Engineering',
    location: 'Gujarat, India',
    status: 'Currently pursuing • 2nd Year',
    period: '2025 – 2029',
    highlights: [
      'Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Computer Organization',
      'Active focus on hands-on practical software development and modern engineering stacks',
      'Participating in peer technical initiatives and development collaborations'
    ]
  } as EducationItem,
  availability: {
    status: 'Open to Opportunities',
    detail: '2nd Year CS Student • Open to Collaborations & Internships'
  },
  contact: {
    email: 'devkhaticrhul@gmail.com',
    emailPlaceholder: true,
    location: 'Gujarat, India',
    linkedin: 'https://linkedin.com/in/rahul-kumar4173',
    linkedinPlaceholder: true,
    github: 'https://github.com/devkhaticrhul-ship-it',
    githubPlaceholder: true
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: PERSONAL_INFO.contact.github,
    icon: 'github',
    isPlaceholder: true,
    displayHandle: 'github.com/devkhaticrhul-ship-it'
  },
  {
    platform: 'LinkedIn',
    url: PERSONAL_INFO.contact.linkedin,
    icon: 'linkedin',
    isPlaceholder: true,
    displayHandle: 'linkedin.com/in/rahul-kumar4173'
  },
  {
    platform: 'Email',
    url: `mailto:${PERSONAL_INFO.contact.email}`,
    icon: 'mail',
    isPlaceholder: true,
    displayHandle: PERSONAL_INFO.contact.email
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages for systems, logic, and problem-solving',
    skills: [
      { name: 'C', verified: true },
      { name: 'JavaScript', verified: true },
      { name: 'TypeScript', verified: true }
    ]
  },
  {
    title: 'Frontend Development',
    description: 'Modern frameworks and styling engines for intuitive interfaces',
    skills: [
      { name: 'React', verified: true },
      { name: 'Next.js', verified: true },
      { name: 'Tailwind CSS', verified: true },
      { name: 'HTML5 & CSS3', verified: true }
    ]
  },
  {
    title: 'Backend & APIs',
    description: 'Server runtimes, application routing, and authentication',
    skills: [
      { name: 'Node.js', verified: true },
      { name: 'Next.js Server Actions / API Routes', verified: true },
      { name: 'NextAuth.js', verified: true },
      { name: 'RESTful API Architecture', verified: true }
    ]
  },
  {
    title: 'Databases',
    description: 'Data modeling, schema design, and document storage',
    skills: [
      { name: 'MongoDB', verified: true },
      { name: 'Mongoose ODM', verified: true }
    ]
  },
  {
    title: 'Development Tools',
    description: 'Version control, developer tooling, and code editors',
    skills: [
      { name: 'Git', verified: true },
      { name: 'GitHub', verified: true },
      { name: 'Visual Studio Code', verified: true }
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'carverse',
    title: 'Carverse',
    tagline: 'Comprehensive Vehicle Information & Discovery Platform',
    description:
      'A full-stack automotive web application designed to help users explore vehicle specifications, compare models, and navigate structured automotive data through a sleek digital experience.',
    extendedDescription:
      'Carverse is an in-development automotive information platform built with Next.js (App Router), TypeScript, and MongoDB. It aims to eliminate fragmented car research by structuring vehicle trims, technical specifications, and user features into an accessible, high-performance web interface. The project incorporates modern authentication, responsive styling, and modular component design.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Mongoose', 'NextAuth'],
    status: 'In Development',
    featured: true,
    category: 'Full-Stack',
    githubUrl: 'https://github.com/devkhaticrhul-ship-it/carverse',
    githubUrlPlaceholder: true,
    liveUrl: 'https://carverse-demo.vercel.app',
    liveUrlPlaceholder: true,
    highlights: [
      'Engineered with modern Next.js App Router for server-rendered speed and SEO efficiency',
      'Designed structured schemas for vehicle data and specifications using Mongoose & MongoDB',
      'Configured secure user authentication and session management via NextAuth',
      'Crafted a responsive, dark-mode first automotive UI with Tailwind CSS and Framer Motion'
    ]
  },
  {
    id: 'placeholder-project-2',
    title: 'Project in Planning / Incubation',
    tagline: 'Full-Stack Web Application / Systems Project',
    description:
      'An editable slot reserved for an upcoming software engineering project. Ready to showcase a real-world full-stack web application or algorithm visualizer.',
    extendedDescription:
      'This card is a clean, structured placeholder ready for your next project. Simply update the details in src/data/portfolioData.ts with your project title, repository link, and live demonstration.',
    technologies: ['React / Next.js', 'TypeScript', 'API Integration', 'Tailwind CSS'],
    status: 'Planned',
    featured: false,
    category: 'Full-Stack',
    githubUrl: 'https://github.com/devkhaticrhul-ship-it/upcoming-project',
    githubUrlPlaceholder: true,
    liveUrl: '',
    liveUrlPlaceholder: true,
    highlights: [
      'Slot reserved for your next verified project',
      'Easily customizable in src/data/portfolioData.ts',
      'Pre-configured for GitHub repository and deployment badges'
    ]
  },
  {
    id: 'placeholder-project-3',
    title: 'AI / Machine Learning Exploration',
    tagline: 'Applied Intelligence & Data Engineering',
    description:
      'An upcoming project slot dedicated to machine learning models, natural language processing, or intelligent recommendation workflows.',
    extendedDescription:
      'Reserved for machine learning, data analysis, or AI API integration projects as Rahul advances his coursework and experiments in AI/ML.',
    technologies: ['Python / TypeScript', 'ML Frameworks', 'Data Processing', 'API'],
    status: 'Planned',
    featured: false,
    category: 'AI / ML',
    githubUrl: 'https://github.com/devkhaticrhul-ship-it/ai-project',
    githubUrlPlaceholder: true,
    liveUrl: '',
    liveUrlPlaceholder: true,
    highlights: [
      'Aligns with Rahul’s interests in Artificial Intelligence and Machine Learning',
      'Designed to display research, model evaluation, and deployment metrics'
    ]
  }
];


export const ACHIEVEMENTS_CONFIG = {
  enabled: false,
  items: [] as {
    title: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
  }[]
};

