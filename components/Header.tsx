'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Art', href: '/art' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur border-b border-zinc-800 px-4 py-3">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold">sub.tracting<span className='text-neutral-500'>{pathname}</span></Link>
        <ul className="flex space-x-6 text-sm">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

