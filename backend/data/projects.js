/**
 * Project data served by GET /api/projects.
 *
 * This is the source of truth. The frontend keeps a copy in
 * frontend/src/data/projects.js as an offline fallback; keep both in sync.
 *
 * URLs that start with "ADD_" are placeholders: replace them with real links.
 * Screenshots: put image files in frontend/public/screenshots/ and list them as
 *   screenshots: [{ src: '/screenshots/clinic-1.png', alt: 'Describe the screenshot' }]
 */
export const PROJECTS = [
  {
    id: 'clinic-management-saas',
    name: 'Clinic Management SaaS',
    cover: 'clinic',
    image: null,
    summary:
      'A full-stack clinic management application designed to manage patients, appointments, diagnoses, prescriptions, and users.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Patient management',
      'Appointment management',
      'Diagnosis records',
      'Prescription management',
      'User authentication',
      'REST APIs',
    ],
    overview:
      'A full-stack clinic management application designed to manage patients, appointments, diagnoses, prescriptions, and users.',
    problem:
      'Clinics keep patient records, schedules, and prescriptions in separate places, which makes information slow to find and easy to lose.',
    solution:
      'One application where staff sign in, register patients, book appointments, record diagnoses, and issue prescriptions, backed by a REST API and a MongoDB database.',
    architecture: [
      { layer: 'React.js', detail: 'Screens for patients, appointments, diagnoses, and prescriptions.' },
      { layer: 'Express.js REST API', detail: 'Endpoints and authentication for each resource.' },
      { layer: 'MongoDB', detail: 'Stores users, patients, appointments, diagnoses, and prescriptions.' },
    ],
    screenshots:  [{
    src: '/clinic.png',
    alt: 'Clinic Management SaaS ',
  },{src: '/clinic2.png',
    alt: 'Clinic Management SaaS ',
  },{src: '/clinic3.png',
    alt: 'Clinic Management SaaS ',
  }],
    liveUrl: 'https://lnkd.in/p/d5EJhAPv',
    githubUrl: 'https://github.com/',
  },
  {
    id: 'shopverse ecommerce',
    name: 'ShopVerse E-Commerce',
    cover: 'store',
    image: null,
    summary: 'A modern full-stack e-commerce platform for showcasing and selling products online.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Product browsing',
      'Product details',
      'Shopping cart',
      'Authentication',
      'Backend APIs',
      'MongoDB database',
    ],
    overview: 'A modern full-stack e-commerce platform for showcasing and selling products online.',
    problem:
      'Online shoppers need to browse products, check the details, and buy without friction, and store owners need one place that holds it all together.',
    solution:
      'A storefront with product browsing, product detail pages, a shopping cart, and authentication, powered by backend APIs and a MongoDB database.',
    architecture: [
      { layer: 'React.js', detail: 'Product listing, product detail, and cart screens.' },
      { layer: 'Express.js REST API', detail: 'Product, cart, and authentication endpoints.' },
      { layer: 'MongoDB', detail: 'Stores products, users, and cart data.' },
    ],
    screenshots: [ {
    src: '/shopversee.png',
    alt: 'ShopVerse E-Commerce',
  },{src: '/shopversee2.png',
    alt: 'ShopVerse E-Commerce',
  },{src: '/shopversee3.png',
    alt: 'ShopVerse E-Commerce',
  }],
    liveUrl: 'https://www.linkedin.com/posts/ismail-khan-82963429b_fullstackdevelopment-react-nodejs-ugcPost-7506650535903666177-7t3R/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiHyqEB0p0jRnE0N0oi_PRngw2sPf6zyU4&lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BS6%2B6MwhdRYC8SkTYvqxO4w%3D%3D',
    githubUrl: 'https://github.com/',
  },
];
