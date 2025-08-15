'use client'

import ProjectCard from './ProjectCard'
import { projects } from '@/app/data/projects'

export default function Projects() {
  return (
  <div>
    <div id="projects">
      <span className="flex items-center">
        <span className="text-gray-900 dark:text-white">
          <h1 className="bg-white/90 rounded-lg text-black text-3xl font-black tracking-tighter my-18 mr-4 pl-2 w-45">
            PROJECTS
          </h1>
        </span>
      <span className="h-px flex-1 bg-gradient-to-l from-zinc-950 to-zinc-800"></span>
     </span>
    </div>
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
        {projects.map((project, index) => (
            <ProjectCard
              index={index}
              project={project}
              key={project.title}
            />
        ))}
      </div>
    </div>
  </div>
  )
}
