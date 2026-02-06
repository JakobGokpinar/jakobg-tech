import Link from 'next/link'
import { TECH_COLORS } from '@/app/data'

const TECHNOLOGIES = ['React', 'Node.js', 'JavaScript', 'HTML/CSS']

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

export default function RegoPage() {
  return (
    <main className="mt-8 pb-20">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
      >
        ← Back
      </Link>

      {/* Hero image */}
      <div className="mt-6 overflow-hidden rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
        <img
          src="/projects/rego.png"
          alt="Rego Marketplace screenshot"
          className="w-full rounded-xl"
        />
      </div>

      {/* Title + Tech */}
      <h1 className="mt-8 text-2xl font-medium dark:text-white">
        Rego Marketplace
      </h1>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {TECHNOLOGIES.map((tech) => (
          <TechPill key={tech} name={tech} />
        ))}
      </div>

      {/* Background */}
      <h2 className="mt-10 text-lg font-medium dark:text-white">Background</h2>
      <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
        {/* TODO: Fill in background story */}
        Rego is a marketplace web application for buying and selling second-hand
        items. Built as a group project, it demonstrates full-stack web
        development with React on the frontend and Node.js on the backend.
      </p>

      {/* Features */}
      <h2 className="mt-10 text-lg font-medium dark:text-white">Features</h2>
      <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
        {/* TODO: Update features to match your actual project */}
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
          Browse and search for second-hand items
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
          Create listings with images and descriptions
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
          User authentication and profile management
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
          Responsive design across devices
        </li>
      </ul>

      {/* Links */}
      <div className="mt-10 flex gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <a
          href="https://github.com/YOUR_USERNAME/rego"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
        >
          View on GitHub →
        </a>
      </div>
    </main>
  )
}