'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type Project = {
  title: string
  description: string
  image: string
  skills: string[]
  link?: string
  year?: number
}

const projects: Project[] = [
  {
    title: 'Crypto Price Bot',
    description: 'A machine-learning model that predicts short-term crypto movements using LSTMs and technical indicators.',
    image: '/projects/crypto-bot.png',
    skills: ['Python', 'TensorFlow', 'Pandas'],
    link: 'https://github.com/yourusername/crypto-bot',
    year: 2024,
  },
     {
    title: '2D Platformer Game',
    description: 'A retro-style platformer made with Love2D and Lua.',
    image: '/projects/platformer.png',
    skills: ['Lua', 'Love2D', 'Pixel Art'],
    year: 2023,
  }, {
    title: 'Live, Laugh, Log',
    description: 'A dashboard where you can log activities.',
    image: '/projects/log.png',
    skills: ['Lua', 'Love2D', 'Pixel Art'],
    year: 2023,
  }, {
    title: '2D Platformer Game',
    description: 'A retro-style platformer made with Love2D and Lua.',
    image: '/projects/platformer.png',
    skills: ['Lua', 'Love2D', 'Pixel Art'],
    year: 2023,
  }, {
    title: '2D Platformer Game',
    description: 'A retro-style platformer made with Love2D and Lua.',
    image: '/projects/platformer.png',
    skills: ['Lua', 'Love2D', 'Pixel Art'],
    year: 2023,
  },    {
    title: '2D Platformer Game',
    description: 'A retro-style platformer made with Love2D and Lua.',
    image: '/projects/platformer.png',
    skills: ['Lua', 'Love2D', 'Pixel Art'],
    year: 2023,
  }, {
    title: '2D Platformer Game',
    description: 'A retro-style platformer made with Love2D and Lua.',
    image: '/projects/platformer.png',
    skills: ['Lua', 'Love2D', 'Pixel Art'],
    year: 2023,
  }, {
    title: '2D Platformer Game',
    description: 'A retro-style platformer made with Love2D and Lua.',
    image: '/projects/platformer.png',
    skills: ['Lua', 'Love2D', 'Pixel Art'],
    year: 2023,
  },
  // Add more projects here
]

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 items-start
                     bg-black/30 bg-radial-[at_25%_25%] from-black to-zinc-950 to-75%
                     border-0 border-zinc-900
                     rounded-md pb-8 p-8"
        >
          <div className="w-full md:w-1/3">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="flex-1 space-y-2">
            <h2 className="text-xl font-semibold">
              {project.title}
              {project.year && (
                <span className="text-sm text-neutral-500 ml-2">
                  ({project.year})
                </span>
              )}
            </h2>
            <p className="text-sm text-neutral-700">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white/10 text-sm px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:underline text-sm"
              >
                View Project
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

