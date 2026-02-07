type Project = {
  name: string
  description: string
  link: string
  image: string
  slug: string
  technologies: string[]
  id: string
}

type WorkExperience = {
  company: string
  title: string
  type: string,
  description: string
  start: string
  end: string
  link: string
  logo: string
  id: string
}

type Education = {
  institution: string
  level: string
  degree: string
  start: string
  end: string
  link: string
  logo: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'ChatApp',
    description:
      'A modern chat application with Spring Boot, JWT authentication, and JavaFX desktop client',
    link: 'https://github.com/JakobGokpinar/Java-ChatApp',
    image: '/projects/chatapp1.png',
    slug: '/projects/chatapp',
    technologies: ['Java', 'JavaFX', 'Spring Boot', 'PostgreSQL', 'JWT', 'Maven', 'Docker'],
    id: 'project1',
  },
  {
    name: 'Rego Marketplace',
    description: 'A marketplace web application for buying and selling second-hand items.',
    link: 'https://github.com/JakobGokpinar/Rego-frontend',
    image: '/projects/shopping-bag.avif',
    slug: '/projects/rego',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'HTML/CSS', 'AWS'],    
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'University of Oslo',
    title: 'Frontend-developer',
    type: 'Internship',
    description: 'Built and maintained internal web applications for the university.',
    start: '2025',
    end: '2025',
    link: 'https://tinyurl.com/3h6z3uf2',
    logo: '/logos/uio.png',
    id: 'work1',
  },
]

export const EDUCATION: Education[] = [
  {
    institution: 'University of Oslo',
    level: "Bachelor's",
    degree: 'Programming and System Architecture',
    start: '2023',
    end: '2026',
    link: 'https://www.uio.no/studier/program/informatikk-programmering/',
    logo: '/logos/uio.png',
    id: 'edu1',
  }
]

export const TECH_STACK: string[] = [
  'Java',
  'JavaScript',
  'C',
  'Python',
  'Kotlin',
  'Typescript',
  'React',
  'Angular',
  'Tailwind',
  'Bootstrap',
  'Next.js',
  'Node.js',
  'Spring Boot',
  'Junit',
  'Gradle',
  'Maven',
  'Docker',

  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'PHP',

  'Git/Github',
  'AWS S3',
  'Azure AI',
]  

export const TECH_COLORS: Record<string, string> = {
  // Languages
  Java: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  JavaScript: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  C: 'bg-zinc-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300',
  Python: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  Kotlin: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
  Typescript: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
  PHP: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',

  // Frontend
  React: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
  Angular: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  Tailwind: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
  Bootstrap: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  'Next.js': 'bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-300',
  'HTML/CSS': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',

  // Backend
  'Node.js': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  'Express.js': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  'Spring Boot': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  JWT: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300',
  JavaFX: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',

  // Testing & Build
  Junit: 'bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-300',
  Gradle: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
  Maven: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',

  // Databases
  MongoDB: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  PostgreSQL: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  MySQL: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',

  // DevOps & Cloud
  Docker: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
  'Git/Github': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  'AWS S3': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  AWS: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  'Azure AI': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/JakobGokpinar',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jakob-gokpinar-646851238/',
  },

]

export const EMAIL = 'jakobgokpinar02@gmail.com'
