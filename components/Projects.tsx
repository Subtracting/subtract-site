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
    title: 'mazegen',
    description: 'Generate a maze using Prims Algorithm and solve it using BFS.',
    image: '/projects/project_maze.png',
    skills: ['Python', 'Algorithms', 'BFS'],
    year: 2024,
  }, {
    title: 'live, laugh, log',
    description: 'A dashboard where you can log and track activities. Such as, hours sleep, pages read, mood and sport. Set yourself a goal, and achieve it - some days at least.',
    image: '/projects/log.png',
    skills: ['React', 'Javascript', 'Dashboard'],
    year: 2023,
  },
  {
    title: 'web graph extension',
    description: 'A machine-learning model that predicts short-term crypto movements using LSTMs and technical indicators.',
    image: '/projects/crypto-bot.png',
    skills: ['Python', 'TensorFlow', 'Pandas'],
    link: 'https://github.com/yourusername/crypto-bot',
    year: 2024,
  }, {
    title: 'pathfinder',
    description: 'A retro-style platformer made with Love2D and Lua.',
    image: '/projects/platformer.png',
    skills: ['Lua', 'Love2D', 'Pixel Art'],
    year: 2023,
  }, {
    title: 'dashboard generator',
    description: 'A retro-style platformer made with Love2D and Lua.',
    image: '/projects/platformer.png',
    skills: ['Lua', 'Love2D', 'Pixel Art'],
    year: 2023,
  },    {
    title: 'project euler',
    description: 'A retro-style platformer made with Love2D and Lua.',
    image: '/projects/platformer.png',
    skills: ['Lua', 'Love2D', 'Pixel Art'],
    year: 2023,
  }, {
    title: 'crypto agent',
    description: 'A retro-style platformer made with Love2D and Lua.',
    image: '/projects/platformer.png',
    skills: ['Lua', 'Love2D', 'Pixel Art'],
    year: 2023,
  }, {
    title: 'finance dashboard',
    description: 'A retro-style platformer made with Love2D and Lua.',
    image: '/projects/platformer.png',
    skills: ['Lua', 'Love2D', 'Pixel Art'],
    year: 2023,
  },
]



export default function Projects() {
  return (
  <div>
    <h1 className="bg-white/90 text-black text-3xl font-black tracking-tighter m-8 pl-2 w-45">
      PROJECTS
    </h1>
    <div className="w-full p-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col overflow-hidden relative
                       border-6 border-black rounded-xl
                       bg-linear-0 from-black to-zinc-900
          ">
            {/* Image */}
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={300}
                className="w-full h-44 object-cover p-4
                           opacity-80
                           rounded-lg invert hover:invert-0

                "
              />
              <h2 className="text-3xl font-bold text-zinc-400 absolute top-9 right-0 bg-black rounded-l-lg p-3
                             border-2 border-black
                             ">
                {project.title}
              </h2>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-lg tracking-wide text-white opacity-80">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-black text-sm text-zinc-600 px-2 py-1 rounded-lg ring-2 ring-white/20 hover:invert"
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
                  className="inline-block text-red-600 hover:underline text-sm"
                >
                  View Project
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  )
}
