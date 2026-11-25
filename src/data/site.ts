// Edit your links here — every page reads from this file.
export const site = {
  name: 'Estefani Ruiz',
  title: 'Estefani Ruiz — UX/UI & Product Designer',
  description:
    'Product designer shaping simple solutions for complex problems — from banking to how a country processes 86 million travelers.',
  email: 'estefaniruiz.design@gmail.com',
  linkedin: 'https://www.linkedin.com/in/estefaniruiz/',
  instagram: 'https://www.instagram.com/estefaniruiz/',
  // Subject that pre-fills when someone clicks "Let's talk"
  emailSubject: 'Hi Estefi 👋 saw your portfolio',
  cv: '/CV_EstefaniRuiz_ProductDesigner.pdf', // replace this file in /public to update the CV
};

const enc = encodeURIComponent;
export const contactLinks = {
  gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=${enc(site.emailSubject)}`,
  outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${site.email}&subject=${enc(site.emailSubject)}`,
};
export const mailto = `mailto:${site.email}?subject=${encodeURIComponent(site.emailSubject)}`;

export const nav = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
];

// All projects. `featured: true` shows on the homepage and About.
// Images go in /public/assets (see the asset checklist).
export const projects = [
  { title: 'Transforming Migration Systems', meta: 'Government · Web app', href: '/work/migration-system', image: '/assets/project-migration.webp', featured: true, live: true },
  { title: "Traveler's Pre-Check WebApp", meta: 'Government · Web app', href: '/work/webapp-viajeros', image: '/assets/project-viajeros.webp', featured: true, live: true },
  { title: 'Building an Insurance Ecosystem from Scratch', meta: 'Insurance · Web platform', href: '/work/protege-seguros', image: '/assets/project-protege.jpg', featured: true },
  { title: 'Modernizing Digital Banking', meta: 'Fintech · Mobile app', href: '/work/credicomer', image: '/assets/project-credicomer.jpg', featured: false },
  { title: 'Making Banking Effortless', meta: 'Fintech · Mobile app', href: '/work/banco-azul', image: '/assets/project-banco-azul.jpg', featured: true },
];

// Homepage / About order
// MVP: only finished case studies show. Add live: true to a project when its page is ready.
export const live = projects.filter((p) => p.live);
export const featured = live;
