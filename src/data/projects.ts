export interface Project {
  title: string;
  description: string;
  tags: string[];
  screenshot?: string;
  url?: string;
  status?: 'Live' | 'Beta' | 'In Development';
}

export const projects: Project[] = [
  {
    title: 'Versify Bible',
    description: 'Full-featured Bible app with reading plans, streak tracking, cross-references, highlights, journaling, prayer lists, and iOS widgets. Built with Expo, Supabase, and SQLite for offline support.',
    tags: ['React Native', 'Expo', 'Supabase', 'Personal Project'],
    screenshot: '/versify-bible.png',
    url: 'https://apps.apple.com/eg/app/versify-daily-bible-verses/id6756984138',
    status: 'Live',
  },
  {
    title: 'Scribe Scan',
    description: 'AI-powered handwriting to text scanner using Google Gemini for accurate OCR. Snap a photo of handwritten notes and get editable text instantly.',
    tags: ['React Native', 'AI', 'Google Gemini', 'Personal Project'],
    screenshot: '/scribe-scan.png',
    url: 'https://apps.apple.com/eg/app/scribe-scan-handwriting-ocr/id6758213865',
    status: 'Live',
  },
  {
    title: 'Softmind',
    description: 'AI-powered mental wellness app with mood tracking, guided check-ins, journaling, and personalized programs.',
    tags: ['React Native', 'AI', 'Personal Project'],
    screenshot: '/softmind.jpeg',
    url: 'https://getsoftmind.com',
    status: 'Live',
  },
  {
    title: 'Andersen EV',
    description: 'Migrated EV charging app to React Native New Architecture for a leading UK EV charger manufacturer. Improved app startup time by 30% and reduced JS bundle size.',
    tags: ['React Native', 'IoT', 'Performance', 'Client Work'],
    screenshot: '/andersen-ev.png',
    url: 'https://andersen-ev.com',
    status: 'Live',
  },
  {
    title: 'Report Focus News',
    description: 'Built offline-first news app with biometric authentication, push notifications, and GDPR-compliant data handling for a UK media outlet.',
    tags: ['React Native', 'AWS', 'Security', 'Client Work'],
    screenshot: '/report-focus-news.png',
    status: 'Live',
  },
];

export const socialLinks = [
  {
    platform: 'GitHub',
    url: 'https://github.com/sambulosenda',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/sambulosenda',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/sambulosenda',
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  },
];

export interface Technology {
  name: string;
  primary: boolean;
  years: number;
  description: string;
}

export const technologies: Technology[] = [
  { name: 'React Native', primary: true, years: 5, description: 'Cross-platform mobile apps shipped to App Store & Play Store' },
  { name: 'TypeScript', primary: true, years: 5, description: 'Type-safe code across frontend and backend projects' },
  { name: 'Expo', primary: true, years: 4, description: 'Managed workflow, EAS builds, OTA updates, and native modules' },
  { name: 'Node.js', primary: false, years: 6, description: 'REST APIs, serverless functions, and build tooling' },
  { name: 'Supabase', primary: false, years: 2, description: 'Auth, real-time database, storage, and edge functions' },
  { name: 'GraphQL', primary: false, years: 3, description: 'Schema design, Apollo Client, and code generation' },
  { name: 'AI/LLMs', primary: false, years: 2, description: 'Google Gemini, OpenAI APIs, on-device ML integration' },
];
