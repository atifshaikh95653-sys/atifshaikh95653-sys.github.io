export const personalInfo = {
  name: 'Atif Shaikh',
  profile: '/profile-cropped.jpeg',
  designation: 'Software Developer',
  designationAlternateWords: [
    'Developer.',
    'Programmer.',
    'Problem Solver.',
    'Learner.',
    'Builder.',
  ],
  title: 'Software Developer',
  tagline: 'Building practical, efficient software solutions with a strong foundation in programming and web development.',
  location: {
    area: 'Sector 9',
    city: 'Ulwe',
    pincode: '410206',
    display: 'Sector 9, Ulwe, Navi Mumbai 410206',
  },
  phone: '+91-8953015564',
  email: 'atifshaikh95653@gmail.com',
  yearsExperience: '1+',
  resumeUrl: '/atif-shaikh-resume.docx',
  social: {
    github: 'https://github.com/atifshaikh95653-sys',
    linkedin: 'https://www.linkedin.com/in/atif-shekh-171199379?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
};

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  badge: 'WELCOME TO MY WORLD',
  heading: {
    line1: 'Building',
    highlight1: 'Practical',
    highlight2: 'Solutions',
  },
  intro: {
    roleLabel: 'a growing',
    suffix: 'developer focused on building efficient software and practical web solutions.',
  },
  cta: {
    collaborate: "Let's Connect",
    resume: 'Get Resume',
  },
  social: [
    { id: 'github', href: personalInfo.social.github, platform: 'github' },
    { id: 'linkedin', href: personalInfo.social.linkedin, platform: 'linkedin' },
  ],
};

export const heroCode = {
  filename: 'profile.ts',
  lines: [
    {
      num: '01',
      parts: [
        { text: 'const', className: 'text-red-500' },
        { text: ' developer', className: 'text-white' },
        { text: ' = {', className: 'text-white' },
      ],
    },
    {
      num: '02',
      parts: [
        { text: '  name:', className: 'text-slate-200' },
        { text: " 'Atif Shaikh',", className: 'text-red-300' },
      ],
    },
    {
      num: '03',
      parts: [
        { text: '  focus:', className: 'text-slate-200' },
        { text: " 'Software Developer',", className: 'text-red-300' },
      ],
    },
    {
      num: '04',
      parts: [
        { text: '  skills:', className: 'text-slate-200' },
        { text: " [ 'C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL', 'MySQL' ],", className: 'text-red-300' },
      ],
    },
    {
      num: '05',
      parts: [
        { text: '  passionate:', className: 'text-slate-200' },
        { text: ' true', className: 'text-red-600' },
        { text: ',', className: 'text-white' },
      ],
    },
    {
      num: '06',
      parts: [
        { text: '  motto:', className: 'text-slate-200' },
        { text: ' "Build with Purpose"', className: 'text-red-400' },
      ],
    },
    {
      num: '07',
      parts: [{ text: '};', className: 'text-white' }],
    },
    {
      num: '08',
      parts: [
        { text: 'developer', className: 'text-red-500' },
        { text: '.', className: 'text-white' },
        { text: 'showcase', className: 'text-white' },
        { text: '();', className: 'text-white' },
      ],
    },
  ],
};

export const stats = [
  { value: '1+', label: 'Years Building' },
  { value: '2+', label: 'Projects' },
  { value: '5+', label: 'Core Skills' },
];

export const about = {
  eyebrow: 'Discovery',
  titlePrefix: 'About',
  titleHighlight: 'The Developer',
  description:
    "I'm Atif Shaikh, a Software Developer with a strong foundation in C, C++, Python, web development, and databases. I am currently pursuing a B.Sc. in Information Technology at Mumbai University while building practical projects such as a Student Management System and a Python Calculator Application. I enjoy creating efficient, structured solutions and continuously strengthening my problem-solving and development skills.",
  image: '/profile-cropped.jpeg',
  imageAlt: 'Atif Shaikh — Software Developer',
  badge: 'Built with Passion',
};

export const skills = {
  eyebrow: 'Inventory',
  titlePrefix: 'The',
  titleHighlight: 'Skill Set',
  categoriesLabel: 'All Categories',
  categories: [
    {
      id: 'languages',
      label: 'Languages',
      items: [
        { name: 'C', icon: 'code' },
        { name: 'C++', icon: 'code' },
        { name: 'Python', icon: 'code' },
        { name: 'JavaScript', icon: 'code' },
      ],
    },
    {
      id: 'web',
      label: 'Web',
      items: [
        { name: 'HTML5', icon: 'code' },
        { name: 'CSS3', icon: 'code' },
        { name: 'JavaScript', icon: 'code' },
        { name: 'Responsive Design', icon: 'monitor' },
      ],
    },
    {
      id: 'database',
      label: 'Database',
      items: [
        { name: 'SQL', icon: 'database' },
        { name: 'MySQL', icon: 'database' },
      ],
    },
    {
      id: 'tools',
      label: 'Tools',
      items: [
        { name: 'VS Code', icon: 'tool' },
        { name: 'MS Word', icon: 'tool' },
        { name: 'Google Docs', icon: 'tool' },
        { name: 'GitHub', icon: 'tool' },
      ],
    },
  ],
};

export const skillsMarquee = skills.categories.flatMap((category) =>
  category.items.map((item) => {
    const skill = typeof item === 'string' ? { name: item, icon: 'code' } : item;
    return {
      name: skill.name,
      icon: skill.icon,
      label: category.label,
      categoryId: category.id,
    };
  })
);

export const experience = {
  eyebrow: 'Learning Journey',
  title: 'Experience',
  overall: 'Building practical software skills and academic projects',
  roles: [
    {
      id: 'academic-projects',
      company: 'Mumbai University / Personal Projects',
      title: 'Student Developer',
      duration: '2025 – Present',
      location: 'Ulwe, Navi Mumbai',
      details: [
        'Building practical software projects using C, C++, Python, and web technologies.',
        'Developed a console-based Student Management System with add, delete, and search operations.',
        'Created a Python calculator application with user input handling and arithmetic functions.',
        'Strengthening problem-solving, file handling, and database fundamentals for future development work.',
      ],
    },
  ],
};

export const projects = {
  eyebrow: 'Projects Showcase',
  portfolioLabel: 'Portfolio',
  titlePrefix: 'Featured',
  titleHighlight: 'Projects',
  subtitle:
    'A selection of high-impact digital solutions, built with focus on scalability, performance, and exceptional user experience.',
  initialCount: 2,
  exploreAllLabel: 'Explore Full Archive',
  showLessLabel: 'Show Less',
  viewDetailsLabel: 'Click to view details →',
  maxVisibleTags: 5,

  items: [
    {
      id: 'student-management-system',
      title: 'Student Management System',
      type: 'C Programming',
      overview:
        'A console-based application for managing student records with add, delete, and search operations using file handling.',
      tech: ['C', 'File Handling', 'Data Management'],
      responsibilities: [
        'Developed a console-based student record system for managing data efficiently',
        'Implemented add, delete, and search operations for student records',
        'Used file handling techniques to store and retrieve records reliably',
        'Improved understanding of core programming concepts and data management workflows',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'python-calculator',
      title: 'Python Calculator Application',
      type: 'Python',
      overview:
        'A simple calculator application built in Python to perform arithmetic operations using functions and user input handling.',
      tech: ['Python', 'Functions', 'User Input'],
      responsibilities: [
        'Built a calculator to perform arithmetic operations',
        'Used functions and structured logic to keep the application simple and readable',
        'Handled user input effectively to support interactive calculations',
        'Strengthened Python fundamentals and command-line application development',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'sedco-capital',
      title: 'Sedco Capital – Trading Platform',
      type: 'FinTech',
      overview:
        'A stock trading and portfolio management platform with analytics and backtesting capabilities.',
      tech: ['React.js', 'Highcharts.js', 'JavaScript'],
      responsibilities: [
        'Developed stock trading workflows including Buy/Sell execution modules',
        'Built portfolio backtesting systems using historical market datasets',
        'Implemented interactive analytics dashboards using Highcharts.js',
        'Optimized large-scale data tables with filtering, sorting, and pagination',
        'Developed Excel upload and structured financial data processing workflows',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'amc-platform',
      title: 'AMC Platform',
      type: 'Asset Management',
      overview:
        'A financial platform for investment management, analytics, and reporting operations.',
      tech: ['React.js', 'Charts', 'Dashboard'],
      responsibilities: [
        'Developed scalable investment and portfolio management modules',
        'Reused and optimized application architecture for maintainability and scalability',
        'Built analytics dashboards with interactive charts and reporting systems',
        'Improved rendering performance and user experience across dashboard modules',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'customer-portal',
      title: 'Customer Portal – Web & Mobile',
      type: 'Cross-Platform',
      overview:
        'A cross-platform customer portal with onboarding, payments, and dashboard features.',
      tech: ['Capacitor.js', 'React', 'Razorpay', 'Android', 'iOS'],
      responsibilities: [
        'Developed cross-platform applications for Web, Android, and iOS using Capacitor.js',
        'Integrated Razorpay payment gateway with secure transaction workflows',
        'Implemented onboarding systems including KYC verification and payment flows',
        'Built dynamic dashboards with user insights and activity tracking',
        'Optimized application performance and responsiveness across platforms',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'accrue-users',
      title: 'Accrue (Users)',
      type: 'Next.js',
      overview:
        'A field workforce platform for onboarding, task assignment, geo-fenced attendance, and gamified incentives — powered by a Go backend and PostgreSQL.',
      tech: ['Next.js', 'React', 'Go', 'PostgreSQL', 'Push Notifications'],
      responsibilities: [
        'Developed scalable user-facing interfaces using Next.js and React',
        'Integrated Go REST APIs with optimized asynchronous state management',
        'Implemented geo-fenced attendance and task tracking workflows',
        'Built push notification systems for real-time activity updates',
        'Collaborated on PostgreSQL-backed data models for users, tasks, and rewards',
        'Optimized onboarding and checklist workflows for operational efficiency',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'accrue-admin',
      title: 'Accrue (Admin)',
      type: 'React.js Admin',
      overview:
        'Admin dashboard for team operations, rewards, surveys, and analytics — backed by Go services and PostgreSQL.',
      tech: ['React.js', 'Go', 'PostgreSQL', 'Chart.js'],
      responsibilities: [
        'Built operational dashboards with analytics and reporting capabilities',
        'Integrated Go APIs for role-based access, teams, and operational controls',
        'Implemented reward systems including credit coins and survey management',
        'Developed PostgreSQL-backed reporting and payout tracking workflows',
        'Built interactive Chart.js visualizations for business insights',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'great-conversations-mobile',
      title: 'Great Conversations',
      type: 'React Native',
      overview:
        'A mobile application focused on conversation engagement and interaction analytics.',
      tech: ['React Native'],
      responsibilities: [
        'Developed responsive mobile interfaces using React Native',
        'Integrated APIs for conversation management and activity tracking',
        'Implemented real-time push notifications for user engagement',
        'Optimized application workflows for smooth navigation and interactions',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'great-conversations-admin',
      title: 'Great Conversations Admin',
      type: 'React.js Admin',
      overview: 'Admin dashboard for conversation analytics and user management.',
      tech: ['React.js', 'JWT', 'Charts'],
      responsibilities: [
        'Built analytics dashboards for conversation tracking and reporting',
        'Implemented JWT authentication and secure admin access workflows',
        'Integrated APIs for user management and operational controls',
        'Developed interactive charts for feedback and engagement analysis',
        'Implemented push-based notification systems for user activity monitoring',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'gigbag-admin',
      title: 'Gigbag (Admin)',
      type: 'Vue.js',
      overview: 'Admin panel with payment tracking and data visualization.',
      tech: ['Vue.js', 'Chart.js', 'Excel Export'],
      responsibilities: [
        'Developed admin interfaces with scalable and modular Vue.js architecture',
        'Implemented payment history and transaction monitoring systems',
        'Built data visualization dashboards using Chart.js',
        'Developed JSON-to-Excel export workflows for reporting operations',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'paperking',
      title: 'Paperking',
      type: 'React Native',
      overview:
        'A newspaper industry digitization platform with mobile apps, admin tooling, and a Node.js + MongoDB backend for content, coupons, and notifications.',
      tech: ['React Native', 'React.js', 'Node.js', 'MongoDB'],
      responsibilities: [
        'Developed cross-platform mobile interfaces with optimized user experience',
        'Built and integrated Node.js APIs for content delivery and coupon management',
        'Designed MongoDB schemas for publications, users, and promotional campaigns',
        'Implemented push notification systems for engagement and promotional updates',
        'Built admin dashboards for operational and content management',
        'Optimized navigation and application responsiveness across devices',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'mrvvs',
      title: 'MRVVS',
      type: 'React Native',
      overview:
        'A union management system with React Native mobile apps, admin panels, and a Node.js + MySQL backend for member records and operations.',
      tech: ['React Native', 'React.js', 'Node.js', 'MySQL'],
      responsibilities: [
        'Developed mobile-first interfaces for union member operations',
        'Integrated Node.js REST APIs for member management and workflow processing',
        'Implemented MySQL-backed data storage for members, roles, and union activities',
        'Implemented streamlined onboarding and management workflows',
        'Built admin management systems for operational control and reporting',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'enalo-admin',
      title: 'Enalo (Admin)',
      type: 'React.js Admin',
      overview:
        'A comprehensive admin interface for managing payments, invoices, and subscriptions.',
      tech: ['React.js', 'Payments API'],
      responsibilities: [
        'Developed scalable admin dashboards for payment and subscription management',
        'Integrated payment APIs with secure transaction handling workflows',
        'Built invoice tracking and operational reporting systems',
        'Optimized administrative workflows for improved operational efficiency',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'enalo-users',
      title: 'Enalo (Users)',
      type: 'React.js',
      overview:
        'User platform for payment link creation, invoice management, and subscriptions.',
      tech: ['React.js', 'Push Notifications'],
      responsibilities: [
        'Developed responsive user interfaces for payment and invoice operations',
        'Integrated APIs for subscription management and payment workflows',
        'Implemented push notification systems for transaction updates',
        'Optimized onboarding and payment link generation workflows',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'just-get-it',
      title: 'Just Get It',
      type: 'Python FastAPI',
      overview:
        'An e-commerce platform connecting buyers and sellers for seamless online transactions.',
      tech: ['FastAPI', 'Python', 'E-commerce'],
      responsibilities: [
        'Developed scalable e-commerce workflows for product and order management',
        'Built backend APIs using FastAPI for transactional operations',
        'Integrated secure payment and checkout systems',
        'Implemented real-time order tracking and notification workflows',
        'Developed admin management systems for operational monitoring',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'soundbase',
      title: 'SoundBase',
      type: 'React Native',
      overview:
        'A music streaming application with playlist management and sharing features.',
      tech: ['React Native', 'Streaming API'],
      responsibilities: [
        'Developed mobile interfaces optimized for music streaming experiences',
        'Integrated streaming APIs for playlist and media management',
        'Implemented responsive playback and user interaction workflows',
        'Optimized application performance for smooth media consumption',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'accrue-static',
      title: 'Accrue (Static Web)',
      type: 'Static Web',
      overview: 'Marketing and landing experience for Accrue.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      responsibilities: [
        'Developed responsive marketing pages with modern UI components',
        'Optimized landing page performance, responsiveness, and SEO',
        'Implemented reusable frontend sections for scalable content updates',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'opensource',
      title: 'GitHub Open Source Projects',
      type: 'Open Source',
      overview:
        'Open-source contributions showcasing skills across technologies and development practices.',
      tech: ['GitHub', 'Various'],
      responsibilities: [
        'Contributed to open-source repositories across frontend and backend technologies',
        'Collaborated on scalable codebases following modern development practices',
        'Maintained reusable components and feature enhancements for community-driven projects',
      ],
      links: { live: null, source: 'https://github.com' },
    },
  ],
};

export const education = {
  pillLabel: 'Academic Background',
};

export const educations = [
  {
    id: 'bsc',
    institution: 'Mumbai University',
    title: 'B.Sc. in Information Technology (Pursuing)',
    duration: '2025 – 2028',
  },
  {
    id: 'hsc',
    institution: 'UP Board',
    title: 'Intermediate (12th)',
    duration: '2023 – 2025',
  },
  {
    id: 'ssc',
    institution: 'UP Board',
    title: 'High School (10th)',
    duration: '2021 – 2023',
  },
];

export const projectsData = projects.items.map((project) => ({
  id: project.id,
  name: project.title,
  type: project.type,
  description: project.overview,
  tools: project.tech,
  responsibilities: project.responsibilities,
  demo: project.links?.live || null,
  code: project.links?.source || null,
  images: [],
  date: '',
}));

export function getProjectById(id) {
  return projectsData.find((p) => p.id === id) ?? null;
}

export const projectDetail = {
  notFound: 'Project not found.',
  backToPortfolio: 'Back to portfolio',
  responsibilitiesTitle: 'Responsibilities',
  technologiesTitle: 'Technologies',
};

export const site = {
  logoAlt: personalInfo.name,
  scrollToTopAria: 'Scroll to top',
  pageTitle: `${personalInfo.name} | ${personalInfo.title}`,
};

export const interests = {
  eyebrow: 'Beyond Code',
  title: 'Interests',
  items: ['Cricket', 'Mobile & PC Games', 'Cycling', 'Reading Tech Blogs'],
};

export const contact = {
  eyebrow: 'Communication',
  titlePrefix: "Let's",
  titleHighlight: 'Connect',
  subtitle:
    "Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.",
  direct: {
    title: 'Direct Contact',
    fields: [
      {
        label: 'Email',
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
        icon: 'email',
        color: '#ef4444',
      },
      {
        label: 'Phone',
        value: personalInfo.phone,
        href: `tel:${personalInfo.phone.replace(/-/g, '')}`,
        icon: 'phone',
        color: '#dc2626',
      },
      {
        label: 'Location',
        value: personalInfo.location.display,
        href: null,
        icon: 'location',
        color: '#991b1b',
      },
    ],
  },
  social: {
    title: 'Social Presence',
    links: [
      { label: 'GitHub', href: personalInfo.social.github },
      { label: 'LinkedIn', href: personalInfo.social.linkedin },
    ],
  },
};

export const footer = {
  tagline:
    'Software Developer focused on building practical solutions, learning continuously, and creating strong foundations in programming.',
  copyright: `© ${new Date().getFullYear()} ${personalInfo.name}. All rights reserved.`,
  madeWithPrefix: 'Made with',
  madeWithSuffix: 'in Navi Mumbai',
  navigationTitle: 'Navigation',
  connectTitle: 'Connect',
};
