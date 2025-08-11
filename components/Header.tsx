'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
  { name: 'about', href: '/about' },
  { name: 'projects', href: '#projects' },
  { name: 'art', href: '/art' },
  { name: 'blog', href: '/blog' },
]

const sections = ['home', 'art', 'projects', 'contact']

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(entry => entry.boundingClientRect.top <= 0)
        if (visible) {
          const newSection = visible.target.id;
          if (newSection == 'home') {
            setActiveSection('')
          }
          else {
            setActiveSection(newSection);
          }
        }
      },
      { threshold: 0 }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur
                       border-b border-zinc-900 px-4 py-3
                       ">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-lg font-semibold ml-0">
            subtracting/<span className='text-neutral-500'>{activeSection}</span>
          </Link>
        </div>
        <div className='flex items-center'>
        <ul className="flex space-x-6 text-sm">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:underline" scroll={true}>
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
