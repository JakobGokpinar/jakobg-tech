'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import Link from 'next/link'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EDUCATION,
  TECH_STACK,
  TECH_COLORS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function TechPill({ name }: { name: string }) {
  const colorClass =
    TECH_COLORS[name] ||
    'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}
    >
      {name}
    </span>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-20"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Hero */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <p className="text-zinc-600 dark:text-zinc-400">
          CS student at the University of Oslo passionate about building clean, modern applications. 
          Hands-on experience across the full stack — from Spring Boot and SQL to React solutions and 
          cloud deployment. I enjoy turning ideas into products that actually work.
        </p>
      </motion.section>

      {/* Education */ }
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-2">
          {EDUCATION.map((edu) => (
            <div
              className="relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={edu.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="h-8 w-8 rounded object-contain"
                    />
                    <div>
                      <h4 className="font-normal dark:text-zinc-100">
                        {edu.level} · {edu.degree}
                      </h4>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {edu.start} - {edu.end}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Work */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
            {WORK_EXPERIENCE.map((job) => (
              <div
                className="relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                key={job.id}
              >
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                  <div className="relative flex w-full flex-row items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="h-8 w-8 rounded object-contain"
                      />
                      <div>
                        <h4 className="font-normal dark:text-zinc-100">
                          {job.title}
                        </h4>
                        <p className="text-zinc-500 dark:text-zinc-400">
                          {job.type}
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-400">
                          {job.company}
                        </p>
                        
                      </div>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {job.start === job.end ? job.start : `${job.start} - ${job.end}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="group space-y-3"
            >
              <div className="relative overflow-hidden rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <img
                  src={project.image}
                  alt={project.name}
                  className="aspect-video w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="px-1">
                <h4 className="font-[450] text-zinc-900 dark:text-zinc-50">
                  {project.name}
                  <span className="ml-1 inline-block text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <TechPill key={tech} name={tech} />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>
      
      {/* Tech Stack */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => (
            <TechPill key={tech} name={tech} />
          ))}
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
