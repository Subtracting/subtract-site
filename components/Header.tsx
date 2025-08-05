'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navItems = [
  { name: 'about', href: '/about' },
  { name: 'projects', href: '/projects' },
  { name: 'art', href: '/art' },
  { name: 'blog', href: '/blog' },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur
                       border-b border-zinc-900 px-4 py-3
                       ">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-lg font-semibold ml-0">
            subtracting<span className='text-neutral-500'>{pathname}</span>
          </Link>
        </div>
        <div className='flex items-center'>
        <ul className="flex space-x-6 text-sm">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </nav>
    </header>
  )
}
