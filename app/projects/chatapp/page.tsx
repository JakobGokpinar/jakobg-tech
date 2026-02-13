import Link from 'next/link'
import { TECH_COLORS } from '@/app/data'

const TECHNOLOGIES = [
  'Java',
  'Spring Boot',
  'PostgreSQL',
  'JWT',
  'JavaFX',
  'Maven',
  'GitHub Actions',
  'Railway',
]

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

export default function ChatAppPage() {
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
          src="/projects/chatapp.png"
          alt="ChatApp screenshot"
          className="w-full rounded-xl"
        />
      </div>

      {/* Title + Tech */}
      <h1 className="mt-8 text-2xl font-medium dark:text-white">ChatApp</h1>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {TECHNOLOGIES.map((tech) => (
          <TechPill key={tech} name={tech} />
        ))}
      </div>

      {/* Background */}
      <h2 className="mt-10 text-lg font-medium dark:text-white">Background</h2>
      <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
        I originally built this chat application four years ago as one of my
        first coding projects. The stack was a PHP/MySQL backend hosted on
        Heroku&apos;s free tier with a JavaFX desktop frontend. When Heroku
        discontinued free hosting and the app stopped working on my new M4
        MacBook, I decided to modernize the entire project from the ground up.
      </p>
      <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
        The modernization replaced PHP with a Spring Boot REST API, MySQL with
        PostgreSQL, and session-based authentication with JWT tokens. The
        database schema was simplified from five tables down to three, and a
        700-line &ldquo;God class&rdquo; was refactored down to 50 lines. The
        result is a clean, production-ready application that demonstrates modern
        software architecture principles.
      </p>

      {/* Architecture */}
      <h2 className="mt-10 text-lg font-medium dark:text-white">
        Architecture
      </h2>
      <div className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
        <p>
          <span className="font-medium text-zinc-800 dark:text-zinc-200">
            Backend:
          </span>{' '}
          Spring Boot 3.x REST API with layered architecture — controllers,
          services, repositories, and DTOs. Secured with Spring Security and JWT
          authentication. Deployed on Railway with a managed PostgreSQL database.
        </p>
        <p>
          <span className="font-medium text-zinc-800 dark:text-zinc-200">
            Frontend:
          </span>{' '}
          JavaFX 21 desktop application with MVC pattern and a dedicated service
          layer. Uses Java&apos;s built-in HttpClient for async API
          communication with CompletableFuture for non-blocking operations.
        </p>
        <p>
          <span className="font-medium text-zinc-800 dark:text-zinc-200">
            CI/CD:
          </span>{' '}
          GitHub Actions workflow builds cross-platform native executables using
          Maven&apos;s jpackage plugin — producing .dmg installers for macOS and
          .msi for Windows.
        </p>
      </div>

      {/* Features */}
      <h2 className="mt-10 text-lg font-medium dark:text-white">Features</h2>
      <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
          Real-time messaging with a Signal-inspired dark theme
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
          JWT token-based authentication with BCrypt password hashing
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
          Friend system with send, accept, and decline workflow
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
          User search and profile photo uploads
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
          Cross-platform native installers (macOS .dmg, Windows .msi)
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
          Automated CI/CD builds with GitHub Actions
        </li>
      </ul>

      {/* Downloads */}
      <h2 className="mt-10 text-lg font-medium dark:text-white">
        Getting Started
      </h2>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        Download the installer for your platform, or clone the repository to
        build from source.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="#"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-zinc-900"
        >
          Download .dmg (macOS)
        </a>
        <a
          href="#"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-zinc-900"
        >
          Download .msi (Windows)
        </a>
      </div>

      {/* Links */}
      <div className="mt-10 flex gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <a
          href="https://github.com/JakobGokpinar/Java-ChatApp"
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