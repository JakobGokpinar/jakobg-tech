'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <img
        src="/jakob.jpg"
        alt="Jakob Gokpinar"
        className="h-36 w-36 rounded-full object-cover"
      />
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Jakob Gokpinar
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          CS Student & Developer
        </TextEffect>
      </div>
    </header>
  )
}
