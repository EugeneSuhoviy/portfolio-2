export const site = {
  name: 'Eugene Sukhovii',
  role: 'Shopify developer',
  location: 'Kyiv, UTC+2',
  email: 'suhoviy.eugene@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yevheniisukhovii/',
  upwork: '', // add your Upwork profile URL
  startYear: 2014,
};

// "What clients come to me with". Each one links to projects tagged with `problem`.
export const situations = [
  { problem: 'design-to-sections', q: 'I have a design and need it built as sections I can edit' },
  { problem: 'theme-upgrade', q: 'My theme is old and hard to update' },
  { problem: 'cro', q: 'Shoppers look at products but do not buy' },
  { problem: 'international', q: 'I want to sell in another country' },
  { problem: 'app-conflict', q: 'An app broke my cart' },
  { problem: 'b2b', q: 'I sell to businesses too' },
] as const;

export const problemLabels: Record<string, string> = {
  'design-to-sections': 'Design to editable sections',
  'editable-theme': 'Editable theme',
  'theme-upgrade': 'Theme upgrade',
  cro: 'Conversion',
  speed: 'Speed',
  international: 'International',
  'app-conflict': 'App conflicts',
  b2b: 'B2B',
  accessibility: 'Accessibility',
  'from-scratch': 'Built from scratch',
};

export const platformLabels: Record<string, string> = {
  shopify: 'Shopify',
  headless: 'Headless',
  magento: 'Magento',
};

export const steps = [
  { t: 'You describe the task', d: 'A short message, a Loom or a Figma link is enough to start.' },
  { t: 'I estimate', d: '[Your terms: fixed price or hourly, how fast you reply.]' },
  { t: 'I build on a copy', d: 'Work happens on an unpublished theme, so your live store is never touched.' },
  { t: 'You review and publish', d: '[Your terms: support after launch.]' },
];

export const faq = [
  { q: 'Do you work with my existing theme?', a: 'Yes. Dawn, Horizon and premium themes, without rebuilding what already works.' },
  { q: 'Can you work with my team or agency?', a: 'Yes. I spent eleven years inside agency teams, with designers, PMs, QA and backend developers.' },
  { q: 'What time zone are you in?', a: 'Kyiv, UTC+2. That overlaps with European working hours and US mornings.' },
  { q: 'Do power or internet outages affect your work?', a: "No. I work with backup power and a backup internet connection, so deadlines don't move." },
  { q: 'How do you estimate?', a: '[Your answer.]' },
  { q: 'What happens after launch?', a: '[Your answer.]' },
];
