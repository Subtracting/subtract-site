'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Art', href: '/art' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur
                       border-b border-zinc-900 px-4 py-3
                       bg-radial-[at_25%_25%] from-black to-zinc-950 to-75%">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/art/logo.png"
            alt="my_portrait"
            width={50}
            height={50}
            className="rounded-lg pr-4"
          />
          <Link href="/" className="text-lg font-semibold ml-0">
            sub.tracting<span className='text-neutral-500'>{pathname}</span>
          </Link>
        </div>
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
