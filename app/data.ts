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
    image: '/projects/chatapp.png',
    slug: '/projects/chatapp',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'JavaFX', 'Maven'],
    id: 'project1',
  },
  {
    name: 'Rego Marketplace',
    description: 'A marketplace web application for buying and selling second-hand items.',
    link: 'https://github.com/JakobGokpinar/Rego-frontend',
    image: '/projects/rego.png',
    slug: '/projects/rego',
    technologies: ['React', 'Node.js', 'JavaScript', 'HTML/CSS'],    
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Universitet i Oslo',
    title: 'Frontend developer i Universet',
    start: '2025',
    end: '',
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
  'Spring Boot',
  'React'
]  

export const TECH_COLORS: Record<string, string> = {
  Java: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  'Spring Boot': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  React: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
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
